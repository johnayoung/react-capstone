'use strict';

const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');
const url = require('./url');
const URI = require('urijs');
const pathToRegexp = require('path-to-regexp');

const User = require('../models/user');
const { users } = require('../db/data');
const { full } = require('../db/full');
const Endpoint = require('../models/endpoint');
// const {swapiEndpoint} = require('../db/swapi');

const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

function fullEndpoint(obj) {
  let {category, collectionName, name, description, baseUrl, exampleCall, template, endpointKeys} = obj;
  const {serializeParams, decodedUrl, keys} = url.extractParamsFromUrl(template);
  const parsedURI = Endpoint.parseURL(baseUrl);
  const prettyName = Endpoint.prettify(name);
  const { domain, path, protocolAndHost } = parsedURI;
  const favicon = `https://api.faviconkit.com/${domain}/144`;

  // Extract default values from example call
  const { query } = URI.parse(exampleCall);
  const defaultValues = URI.parseQuery(query);

  const paramsWithDefaults = Object.keys(defaultValues).reduce((arr, val) => {
    const param = serializeParams.find(p => p.name === val);
    const paramWithDefault = Object.assign({}, param, { default: defaultValues[val],  type: getType(defaultValues[val])});
    arr.push(paramWithDefault);
    return arr;
  }, []);

  if (!description) {
    description = `An endpoint from ${domain}`;
  }

  return Object.assign({}, {
    category,
    collectionName,
    name,
    prettyName,
    description,
    baseUrl: protocolAndHost,
    path,
    parameters: paramsWithDefaults,
    favicon,
    userId: '5c3f5ca9ec37422f44bdaa82',
    exampleCall,
    template,
    endpointKeys
  }, parsedURI);
}

const fullArray = arr => {
  return arr.map(a => fullEndpoint(a));
};

console.log(`Connecting to mongodb at ${MONGODB_URI}`);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
  .then(() => {
    console.info('Deleting Data...');
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.info('Creating Indexes');
    return Promise.all([
      User.ensureIndexes(),
      Endpoint.ensureIndexes()
    ]);
  })
  .then(() => {
    console.info('Seeding Database...');
    return Promise.all([
      User.insertMany(users),
      Endpoint.insertMany(fullArray(full))
    ]);
  })
  .then(results => {
    console.log(`Inserted results with no errors, ${results}`);
    console.info('Disconnecting...');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });

// console.log(fullArray(full));