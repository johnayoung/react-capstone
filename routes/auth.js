const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const { JWT_SECRET, JWT_EXPIRY } = require("../config");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../models/user");

const options = { session: false, failWithError: true };
const localAuth = passport.authenticate("local", options);
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"]
});

function createAuthToken(user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY
  });
}

router.get("/auth/google", googleAuth);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `https://localhost:3000`,
    session: false
  }),
  (req, res, next) => {
    const { token, name, email } = req.user;
    console.log("req.user is ", req.user);
    const userObj = {
      fullname: name,
      email,
      token,
      username: email
    };
    User.create(userObj)
      .then(response => {
        console.log("user successfully created!", response);
        res.redirect(`https://localhost:3000?token=${token}`);
      })
      .catch(err => {
        next(err);
      });
  }
);

router.post("/login", localAuth, function(req, res) {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

const jwtAuth = passport.authenticate("jwt", {
  session: false,
  failWithError: true
});

router.post("/refresh", jwtAuth, function(req, res) {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});

module.exports = router;
