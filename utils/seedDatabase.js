'use strict';

const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config');

const User = require('../models/user');
const { users } = require('../db/data');
const Endpoint = require('../models/endpoint');
const {stockEndpoints} = require('../db/data');

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
      Endpoint.insertMany(stockEndpoints)
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
