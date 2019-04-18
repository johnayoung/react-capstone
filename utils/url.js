const parseurl = require("parseurl");
const { parse } = require("url");
const pathToRegexp = require("path-to-regexp");
const uriTemplates = require("uri-templates");
const URI = require("urijs");

const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info{?id}";
const tUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,2,10";

const extractParamsFromUrl = (url, exampleUrl) => {
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
  const uPath = URI.parse(decodedUrl).path;
  const uregexp = pathToRegexp(uPath);
  const tPath = URI.parse(exampleUrl).path;
  console.log("we made it");
  const exampleParams = uregexp.exec(tPath);

  // Turn extracted parameters into what we need for database
  const serializeParams = keys.reduce((params, param) => {
    const { name, prefix, optional } = param;
    const where = prefix === "/" ? "path" : "query";
    const obj = { name, in: where, required: !optional, schema: { enum: "" } };
    params.push(obj);
    return params;
  }, []);

  console.log("varObj is ", varObj);
  console.log("filledUrl is ", filledUrl);
  console.log("decodedUrl is ", decodedUrl);
  console.log("extracted params are ", keys);
  console.log("serialized params are ", serializeParams);
  console.log("exampleParams are ", exampleParams);
  return {
    varObj,
    filledUrl,
    decodedUrl,
    keys,
    serializeParams,
    exampleParams
  };
};

extractParamsFromUrl(url, tUrl);

// const { query, path } = URI.parse(url);
// console.log('path is ', path);
// console.log('query is ', query);
// const defaultValues = URI.parseQuery(query);

// console.log(defaultValues);

module.exports = {
  extractParamsFromUrl
};
