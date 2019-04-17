'use strict';

const mongoose = require('mongoose');
const axios = require('axios');
const { MONGODB_URI, SHEETY_API } = require('../config');
const url = require('./url');
const URI = require('urijs');

const User = require('../models/user');
const { users } = require('../db/data');
const Endpoint = require('../models/endpoint');

const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

function fullEndpoint(obj) {
  let {category, collectionName, name, path, description, baseUrl, exampleCall, template, endpointKeys} = obj;
  const {serializeParams, exampleParams} = url.extractParamsFromUrl(template, exampleCall);
  const parsedURI = Endpoint.parseURL(exampleCall);
  const prettyName = Endpoint.prettify(name);
  const { domain, protocolAndHost } = parsedURI;
  const favicon = `https://api.faviconkit.com/${domain}/144`;

  // Extract default values from example call
  const { query } = URI.parse(exampleCall);
  const defaultValues = URI.parseQuery(query);

  const keys = Object.keys(defaultValues);
  const paramsWithDefaults = serializeParams.reduce((a, val, i) => {
    if (keys.includes(val.name)) {
      const paramWithDefault = Object.assign({}, val, { default: defaultValues[val.name],  type: getType(defaultValues[val.name])});
      a.push(paramWithDefault)
    } else {
      const paramWithoutDefault = Object.assign({}, val, {default: exampleParams[i+1], type: getType(exampleParams[i+1])})
      a.push(paramWithoutDefault);
    }
    return a;
  }, [])

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
  });
}

const fullArray = async sheetyUrl => {
  const { data } = await axios.get(sheetyUrl);
  console.log('WE HAVE DATA =========>', data);
  return data.map(a => fullEndpoint(a));
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
    return fullArray('https://api.sheety.co/4ea80e27-00fd-44b8-a675-0d4abe8b8ebe');
  })
  .then((response) => {
    console.info('Seeding Database...');
    return Promise.all([
      User.insertMany(users),
      Endpoint.insertMany(response)
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