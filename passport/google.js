const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../config");

const User = require("../models/user");

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:8080/api/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // const user = {
    //   email: profile.emails[0].value,
    //   name: profile.displayName,
    //   token: accessToken
    // };
    // const userData = {
    //   email: profile.emails[0].value,
    //   username: `googleTestUsername`,
    //   fullname: profile.displayName,
    //   token: accessToken
    // };
    // User.findOrCreate(userData)
    //   .then(results => {
    //     if (!results) {
    //       return Promise.reject({
    //         reason: "LoginError",
    //         message: "Incorrect username?",
    //         location: "username"
    //       });
    //     }
    //     return done(null, user);
    //   })
    //   .catch(err => {
    //     console.log("WE HAVE AN ERROR ", err);
    //     if (err.reason === "LoginError") {
    //       return done(null, false);
    //     }
    //     return done(err);
    //   });
    const userData = {
      email: profile.emails[0].value,
      name: profile.displayName,
      token: accessToken
    };
    done(null, userData);
  }
);

module.exports = googleStrategy;
