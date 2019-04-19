const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authController = require("./auth.controller");
const { JWT_SECRET, JWT_EXPIRY, CLIENT_ORIGIN } = require("../config");

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

// This custom middleware allows us to attach the socket id to the session.
// With the socket id attached we can send back the right user info to
// the right socket
const addSocketIdtoSession = (req, res, next) => {
  req.session.socketId = req.query.socketId;
  next();
};

router.get("/auth/google", googleAuth);

router.get("auth/google/callback", googleAuth, authController.google);

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
