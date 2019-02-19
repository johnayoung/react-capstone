'use strict';
// const mongoose = require('mongoose');
// const { MONGODB_URI } = require('../config');
// const route = require('path-match');
// const parseurl = require('parseurl');

// const match = route('https://www.google.com/route/:id?');
// const parse = require('url').parse;
// const params = parse('https://www.google.com/route/:id?').pathname;

// const req = {
//   url: 'https://www.google.com/route/:id?'
// };

// const parsed = parseurl(req);


// console.log(parsed);

// const Endpoint = require('../models/endpoint');

// function createEndpoint(name, description, fullUrl) {
//   const parsedURI = Endpoint.parseURL(fullUrl);
//   return Object.assign({}, {
//     name,
//     description,
//     fullUrl
//   }, parsedURI);
// }

// const testFuncObj = createEndpoint('Chart', 'Testing a chart desc', iexChart);

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex : true })
//   .then(() => {
//     console.info('Deleting Data...');
//     return Promise.all([
//       Endpoint.create(testFuncObj)
//     ]);
//   })
//   .then((response) => {
//     console.info(`Response is ${response}`);
//     return mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error(err);
//     return mongoose.disconnect();
//   });

