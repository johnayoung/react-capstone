require("dotenv").config();

const providers = ["twitter", "google", "facebook", "github"];

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === "production"
    ? `https://https://warm-peak-72707.herokuapp.com/${provider}/callback`
    : `https://localhost:8080/${provider}/callback`;
});

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks;

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
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CONFIG: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: googleURL
  }
};
