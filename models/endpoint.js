'use strict';

const mongoose = require('mongoose');
const url = require('url');
const wurl = require('wurl');

const endpointSchema = new mongoose.Schema({
  name: {type: String, required: true, lowercase: true, trim: true},
  description: {type: String},
  fullUrl: {type: String, required: true},
  method: {type: String, default: 'GET'},
  tld: {type: String},
  domain: {type: String},
  hostname: {type: String},
  sub: {type: String},
  protocol: {type: String},
  path: {type: String},
  query: {type: String},
  queryObj: {
    type: Map,
    of: String
  },
  parameters: {type: Array},
//   collection: {type: Schema.Types.ObjectId, ref: 'Collection'}
}, {strict: false});

// Add `createdAt` and `updatedAt` fields
endpointSchema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
endpointSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

endpointSchema.statics.parseURL = (uri) => {
  return {
    tld: wurl('tld', uri),
    domain: wurl('domain', uri),
    hostname: wurl('hostname', uri),
    sub: wurl('sub', uri),
    protocol: wurl('protocol', uri),
    path: wurl('path', uri),
    query: wurl('query', uri),
    queryObj: wurl('?', uri),
  };
};

endpointSchema.methods.serialize = () => {
  return console.log('this is working');
};

module.exports = mongoose.model('Endpoint', endpointSchema);
