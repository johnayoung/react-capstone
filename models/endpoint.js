'use strict';

const mongoose = require('mongoose');
const wurl = require('wurl');
const Url = require('url-parse');
const parse = require('url').parse;

const endpointSchema = new mongoose.Schema({
  name: {type: String, required: true, lowercase: true, trim: true},
  description: {type: String},
  baseUrl: {type: String},
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
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}
//   collection: {type: Schema.Types.ObjectId, ref: 'Collection'}
}, {strict: false});

endpointSchema.index({name: 1, userId: 1}, {unique: true});

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
  const parsedUrl = parse(uri);
  const {
    protocol,
    hostname,
    href,
    path
  } = parsedUrl;
  return {
    hostname,
    domain: wurl('domain', uri),
    protocol,
    path,
    protocolAndHost: `${protocol}//${hostname}`
  };
};

endpointSchema.statics.prettify =  (str) => {
  return str.split('-').map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');
};

endpointSchema.methods.serialize = () => {
  return console.log('this is working');
};

module.exports = mongoose.model('Endpoint', endpointSchema);
