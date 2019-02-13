'use strict';
const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Endpoint = require('../models/endpoint');

const swapi = require('../db/swapi');

function createEndpoint(obj) {
  const {baseUrl, collectionName, description} = obj;
  const newObj = Object.assign({}, {
    name: collectionName,
    description,
    fullUrl: baseUrl,
    userId: '333333333333333333333300',
    ...obj
  });
  return newObj;
}

const swapiObj = createEndpoint(swapi);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
  .then(() => {
    console.info('Deleting Data...');
    return Promise.all([
      Endpoint.create(swapiObj)
    ]);
  })
  .then((response) => {
    console.info(`Response is ${response}`);
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });