const mongoose = require("mongoose");
const axios = require("axios");
const { MONGODB_URI, SHEETY_API } = require("../config");
const url = require("./url");
const URI = require("urijs");

const User = require("../models/user");
const { users } = require("../db/data");
const Endpoint = require("../models/endpoint");

const validateNumber = n =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

const getType = v =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

function fullEndpoint(obj) {
  let {
    category,
    collectionName,
    apiDocumentation,
    name,
    path,
    description,
    baseUrl,
    exampleCall,
    template,
    endpointKeys
  } = obj;
  const { serializeParams, decodedUrl, keys } = url.extractParamsFromUrl(
    template
  );
  const parsedURI = Endpoint.parseURL(exampleCall);
  const prettyName = Endpoint.prettify(name);
  const { domain, protocolAndHost } = parsedURI;
  const favicon = `https://api.faviconkit.com/${domain}/144`;

  // Extract default values from example call
  const { query } = URI.parse(exampleCall);
  const defaultValues = URI.parseQuery(query);

  const paramsWithDefaults = Object.keys(defaultValues).reduce((arr, val) => {
    const param = serializeParams.find(p => p.name === val);
    const paramWithDefault = Object.assign({}, param, {
      default: defaultValues[val],
      type: getType(defaultValues[val])
    });
    arr.push(paramWithDefault);
    return arr;
  }, []);

  if (!description) {
    description = `An endpoint from ${domain}`;
  }

  return Object.assign(
    {},
    {
      category,
      collectionName,
      apiDocumentation,
      name,
      prettyName,
      description,
      baseUrl: protocolAndHost,
      path,
      parameters: paramsWithDefaults,
      favicon,
      userId: "5c3f5ca9ec37422f44bdaa82",
      exampleCall,
      template,
      endpointKeys
    }
  );
}

const fullArray = async sheetyUrl => {
  const { data } = await axios.get(sheetyUrl);
  console.log("WE HAVE DATA =========>", data);
  return data.map(a => fullEndpoint(a));
};

console.log(`Connecting to mongodb at ${MONGODB_URI}`);
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.info("Deleting Data...");
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.info("Creating Indexes");
    return Promise.all([User.ensureIndexes(), Endpoint.ensureIndexes()]);
  })
  .then(() => {
    return fullArray(
      "https://api.sheety.co/7379c3b5-79ee-40f2-8dac-35ad9fb0aa8e"
    );
  })
  .then(response => {
    console.info("Seeding Database...");
    return Promise.all([User.insertMany(users), Endpoint.insertMany(response)]);
  })
  .then(results => {
    console.log(`Inserted results with no errors, ${results}`);
    console.info("Disconnecting...");
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });
