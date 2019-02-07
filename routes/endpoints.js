'use strict';

const express = require('express');
const mongoose = require('mongoose');

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

  const newEndpoint = createEndpoint(name, description, fullUrl, parameters, userId);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  Endpoint
    .create(newEndpoint)
    .then(endpoints => {
      res.location(`${req.originalUrl}/${endpoints.id}`)
        .status(201)
        .json(endpoints);
    })
    .catch(err => {
      next(err);
    });
});

// router.put('/:name', (req, res, next) => {

// })

module.exports = router;