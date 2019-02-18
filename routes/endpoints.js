'use strict';

const express = require('express');
const proxy = require('express-http-proxy');
const app = require('express')();
const axios = require('axios');

const router = express.Router();
const Endpoint = require('../models/endpoint');
const User = require('../models/user');

// Authenticated endpoint only on post
const passport = require('passport');

const { check, validationResult, body } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const validBody = [
  body('name')
    .not().isEmpty()
    .trim()
    .escape(),
  check('fullUrl')
    .isURL()
];

function createEndpoint(name, description, fullUrl, parameters, userId) {
  const parsedURI = Endpoint.parseURL(fullUrl);
  const { domain } = parsedURI;
  const favicon = `https://api.faviconkit.com/${domain}/144`;

  if (!description) {
    description = `An endpoint from ${domain}`;
  }

  return Object.assign({}, {
    name,
    description,
    fullUrl,
    parameters,
    favicon,
    userId
  }, parsedURI);

//   return Object.assign({}, firstObj, {favicon});
}

/* ========== GET ENDPOINTS ========== */

// Get all endpoints from database
router.get('/', (req, res, next) => {
  Endpoint
    .find()
    .populate('userId', 'username')
    .then(endpoints => {
      res.json(endpoints);
    })
    .catch(err => {
      next(err);
    });
});

// Get one endpoint from database
router.get('/:username/:name', (req, res, next) => {
  const { name } = req.params;
  const { username } = req.params;
  
  User.findOne({username})
    .then(response => {    
      if (response) {
        return response._id;
      } else {
        next();
      }
    })
    .then(userId => {
      Endpoint
        .findOne({name: name, userId})
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
router.post('/', validBody, passport.authenticate('jwt', {session: false, failWithError: true}), (req, res, next) => {
  const {name, description, fullUrl, parameters} = req.body;
  const userId = req.user.id;
  const username = req.user.username;
  console.log(req.user);

  const newEndpoint = createEndpoint(name, description, fullUrl, parameters, userId);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  Endpoint
    .create(newEndpoint)
    .then(endpoints => {
      // endpoints = Object.assign({}, endpoints, {username});
      // console.log('endpoints from post are', endpoints, 'username is', username);
      const response = Object.assign({}, endpoints, username);
      console.log('new response is', response);
      res.location(`${req.originalUrl}/${endpoints.id}`)
        .status(201)
        .json(endpoints);
    })
    .catch(err => {
      // Check for duplicate entry in Mongo
      if (err.code === 11000) {
        err = new Error('An endpoint you created with that name already exists');
        err.status = 400;
      }
      next(err);
    });
});

// Front end proxy requests
// (req) => {
//   const string = req.get('x-url-string');
//   console.log(string);
//   return string;
// }
// app.use('/proxy', proxy('https://swapi.co/api/people/1?page=1'));
router.get('/proxy', (req, res, next) => {
  const urlString = req.get('x-url-string');
  console.log(urlString);
  const config = {
    method: 'get',
    url: urlString,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios(config)
    .then(response => {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch(err => {
      // console.log(err);
      if (err) {
        err = new Error('We are having trouble with the request');
        err.status = 400;
      }
      next(err);
    });

});

// router.put('/:name', (req, res, next) => {

// })

module.exports = router;