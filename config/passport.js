const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { OAuth2Strategy: GoogleStrategy } = require("passport-google-oauth");
const _ = require("lodash");
const { GOOGLE_CONFIG } = require("../config");

const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { msg: `Email ${email} not found.` });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          console.log("do we have an error?", err);
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { msg: "Invalid email or password." });
      });
    });
  })
);

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

/**
 * Sign in with Google.
 */
passport.use(
  new GoogleStrategy(GOOGLE_CONFIG, (req, accessToken, refreshToken, profile, done) => {
    console.log("req is ", req.user);
    if (req.user) {
      User.findOne({ google: profile.id }, (err, existingUser) => {
        if (err) {
          console.log("we have an error ", err);
          return done(err);
        }
        if (existingUser) {
          done(err);
        } else {
          User.findById(req.user.id, (err, user) => {
            if (err) {
              return done(err);
            }
            user.google = profile.id;
            user.tokens.push({ kind: "google", accessToken });
            user.profile.name = user.profile.name || profile.displayName;
            // user.profile.gender = user.profile.gender || profile._json.gender;
            // user.profile.picture = user.profile.picture || profile._json.image.url;
            user.save(err => {
              done(err, user);
            });
          });
        }
      });
    } else {
      User.findOne({ google: profile.id }, (err, existingUser) => {
        if (err) {
          return done(err);
        }
        if (existingUser) {
          return done(null, existingUser);
        }
        User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
          if (err) {
            return done(err);
          }
          if (existingEmailUser) {
            done(err);
          } else {
            const user = new User();
            user.email = profile.emails[0].value;
            user.google = profile.id;
            user.tokens.push({ kind: "google", accessToken });
            user.profile.name = profile.displayName;
            // user.profile.gender = profile._json.gender;
            // user.profile.picture = profile._json.image.url;
            user.save(err => {
              console.log("error? ", err);
              done(err, user);
            });
          }
        });
      });
    }
  })
);

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split("/").slice(-1)[0];
  const token = req.user.tokens.find(token => token.kind === provider);
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
