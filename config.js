"use strict";

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://dev:therock1@ds139295.mlab.com:39295/api-viz-dev",
  TEST_MONGODB_URI:
    process.env.TEST_MONGODB_URI || "mongodb://localhost/db-test",
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
  SHEETY_API: process.env.SHEETY_API,
  CMC_KEYS: process.env.CMC_KEYS
};
