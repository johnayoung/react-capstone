const express = require("express");
const axios = require("axios");

const router = express.Router();
const passport = require("passport");
const Endpoint = require("../models/endpoint");
const User = require("../models/user");
const { configs } = require("../db/axiosConfigs");

// Authenticated endpoint only on post

const { check, validationResult, body } = require("express-validator/check");

const validBody = [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  check("baseUrl").isURL()
];

function createEndpoint(name, description, baseUrl, parameters, userId) {
  const parsedURI = Endpoint.parseURL(baseUrl);
  const prettyName = Endpoint.prettify(name);
  const { domain, path, protocolAndHost } = parsedURI;
  const favicon = `${baseUrl}favicon.ico`;

  if (!description) {
    description = `An endpoint from ${domain}`;
  }

  return Object.assign(
    {},
    {
      name,
      prettyName,
      description,
      baseUrl: protocolAndHost,
      path,
      parameters,
      favicon,
      userId
    },
    parsedURI
  );
}

/* ========== GET ENDPOINTS ========== */

// Get all endpoints from database
router.get("/", (req, res, next) => {
  Endpoint.find()
    .populate("userId", "username")
    .then(endpoints => {
      res.json(endpoints);
    })
    .catch(err => {
      next(err);
    });
});

// Get one endpoint from database
router.get("/:username/:name", (req, res, next) => {
  const { name } = req.params;
  const { username } = req.params;

  User.findOne({ username })
    .then(response => {
      if (response) {
        return response._id;
      }
      next();
    })
    .then(userId => {
      Endpoint.findOne({ name, userId })
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            next();
          }
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

/* ========== POST ENDPOINTS ========== */
router.post(
  "/",
  validBody,
  passport.authenticate("jwt", { session: false, failWithError: true }),
  (req, res, next) => {
    const { name, description, baseUrl, parameters } = req.body;
    const userId = req.user.id;
    const { username } = req.user;
    // const testReq = 'https://www.google.com/path/:id?';
    // const pathname = pathToRegexp.parse(testReq);
    // const all = parse(testReq);
    // console.log(all);

    const newEndpoint = createEndpoint(
      name,
      description,
      baseUrl,
      parameters,
      userId
    );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    Endpoint.create(newEndpoint)
      .then(endpoints => {
        const response = Object.assign({}, endpoints, username);
        console.log("new response is", response);
        res
          .location(`${req.originalUrl}/${endpoints.id}`)
          .status(201)
          .json(endpoints);
      })
      .catch(err => {
        // Check for duplicate entry in Mongo
        if (err.code === 11000) {
          err = new Error(
            "An endpoint you created with that name already exists"
          );
          err.status = 400;
        }
        next(err);
      });
  }
);

// Front end proxy requests
router.get("/proxy", (req, res, next) => {
  const urlString = req.get("x-url-string");
  const collectionName = req.get("x-collectionName");
  console.log(urlString, collectionName);
  const config = {
    method: "get",
    url: urlString,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  };

  if (configs[collectionName]) {
    Object.assign(config, configs[collectionName]);
    console.log("config is now ", config);
  }

  axios(config)
    .then(response => {
      res.set("Cache-Control", "no-cache").send(response.data);
    })
    .catch(err => {
      console.log("full error is ", err);
      if (err) {
        err = new Error("We are having trouble with the request");
        err.status = 400;
      }
      next(err);
    });
});

// router.put('/:name', (req, res, next) => {

// })

module.exports = router;
