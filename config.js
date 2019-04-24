require("dotenv").config();

const providers = ["google"];

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === "production"
    ? `https://https://warm-peak-72707.herokuapp.com/${provider}/callback`
    : `https://localhost:8080/${provider}/callback`;
});

const [googleURL] = callbacks;

exports.CLIENT_ORIGIN =
  process.env.NODE_ENV === "production"
    ? "https://warm-peak-72707.herokuapp.com"
    : "https://localhost:3000";

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "https://localhost:3000",
  SESSION_SECRET: process.env.SESSION_SECRET,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://dev:therock1@ds139295.mlab.com:39295/api-viz-dev",
  TEST_MONGODB_URI: process.env.TEST_MONGODB_URI || "mongodb://localhost/db-test",
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
  SHEETY_API: process.env.SHEETY_API,
  CMC_KEYS: process.env.CMC_KEYS,
  LOCAL_SSL_KEY: "../../local-cert-generator/server.key",
  LOCAL_SSL_CRT: "../../local-cert-generator/server.crt",
  GOOGLE_ID: process.env.GOOGLE_ID,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  GOOGLE_CONFIG: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: googleURL,
    passReqToCallback: true
  }
};
