'use strict';
const parseurl = require('parseurl');
const parse = require('url').parse;
const pathToRegexp = require('path-to-regexp');
const uriTemplates = require('uri-templates');
const URI = require('urijs');

const extractParamsFromUrl = url => {
  // Create RFC 6570 template
  const template = uriTemplates(url);

  // Extract variables names from template
  const { varNames } = template;

  // Fill url with varNames and decode back
  const varObj = varNames.reduce((a, varr) => {
    a[varr] = `:${varr}`;
    return a;
  }, {});
  const filledUrl = template.fill(varObj);
  const decodedUrl = URI.decode(filledUrl);

  // Extract parameters from decoded URL
  const keys = [];
  const regexp = pathToRegexp(decodedUrl, keys);
  // const extractParameters = extractParams(decodedUrl);

  // Turn extracted parameters into what we need for database
  const serializeParams = keys.reduce((params, param) => {
    const { name, prefix, optional } = param;
    const where = prefix === '/' ? 'path' : 'query';
    const obj = { name, in: where, required: !optional, schema: { enum: ''}};
    params.push(obj);
    return params;
  }, []);

  console.log('varObj is ', varObj);
  console.log('filledUrl is ', filledUrl);
  console.log('decodedUrl is ', decodedUrl);
  console.log('extracted params are ', keys);
  console.log('serialized params are ', serializeParams);
  return {varObj, filledUrl, decodedUrl, keys, serializeParams};
};

module.exports = {
  extractParamsFromUrl
};