/* eslint-disable no-nested-ternary */
const { parse } = require("url");
const queryString = require("query-string");
const pathToRegexp = require("path-to-regexp");

const getType = v =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

const extractParamsFromUrl = (url, exampleUrl) => {
  // Extract parts from template URL
  const tPathname = parse(url).pathname;
  const tQuery = parse(url).query;

  // Extract parts from example URL
  const ePathname = parse(exampleUrl).pathname;
  const eQuery = parse(exampleUrl).query;

  // Extract pathname without query string
  const pathKeys = [];
  const pathRegexp = pathToRegexp(tPathname, pathKeys);
  const pathExample = pathRegexp.exec(ePathname);
  const sPath = pathKeys.reduce((params, param) => {
    const { name, optional } = param;
    const obj = { name, in: "path", required: !optional, schema: { enum: "" } };
    params.push(obj);
    return params;
  }, []);

  // Extract query
  const queryKeys = [];
  if (tQuery) {
    // If we have a query string, then we run pathToRegexp on it
    const queryRegexp = pathToRegexp(tQuery, queryKeys);
  }
  // const queryExample = queryRegexp.exec(eQuery);
  const sQuery = queryKeys.reduce((params, param) => {
    const { name, optional } = param;
    const obj = {
      name,
      in: "query",
      required: !optional,
      schema: { enum: "" }
    };
    params.push(obj);
    return params;
  }, []);
  const qn = queryKeys.map(q => q.name);
  const qParsed = queryString.parse(eQuery);

  // Combine path and query parameters
  const serializeParams = sPath.concat(sQuery);

  // Give default values to parameters
  const parameters = serializeParams.reduce((a, val, i) => {
    if (qn.includes(val.name)) {
      const paramWithDefault = Object.assign({}, val, {
        default: qParsed[val.name],
        type: getType(qParsed[val.name])
      });
      a.push(paramWithDefault);
    } else {
      const paramWithoutDefault = Object.assign({}, val, {
        default: pathExample[i + 1],
        type: getType(pathExample[i + 1])
      });
      a.push(paramWithoutDefault);
    }
    return a;
  }, []);

  return { parameters };

  // console.log("pathKeys are ", pathKeys);
  // console.log("queryKeys are ", queryKeys);
  // console.log("pathExample is ", pathExample);
  // console.log("queryExample is ", queryExample);
  // console.log("serializedParams are ", serializeParams);
  // console.log("final parameters are ", parameters);
};

module.exports = {
  extractParamsFromUrl
};
