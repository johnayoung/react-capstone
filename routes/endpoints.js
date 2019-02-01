'use strict';

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Endpoint = require('../models/endpoint');

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

function createEndpoint(name, description, fullUrl) {
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
    favicon
  }, parsedURI);

//   return Object.assign({}, firstObj, {favicon});
}

/* ========== GET ENDPOINTS ========== */
router.get('/', (req, res, next) => {
  Endpoint
    .find()
    .then(endpoints => {
      res.json(endpoints);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:name', (req, res, next) => {
  const { name } = req.params;
  Endpoint
    .findOne({name: name})
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
});

/* ========== POST ENDPOINTS ========== */
router.post('/', validBody, (req, res, next) => {
  const {name, description, fullUrl} = req.body;

  const newEndpoint = createEndpoint(name, description, fullUrl);

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