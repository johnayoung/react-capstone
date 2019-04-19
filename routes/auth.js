const express = require("express");
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

// This custom middleware allows us to attach the socket id to the session
// With that socket id we can send back the right user info to the right
// socket
router.use((req, res, next) => {
  req.session.socketId = req.query.socketId;
  next();
});

// Routes that are triggered by the callbacks from each OAuth provider once
// the user has authenticated successfully
router.get("/auth/google/callback", googleAuth, (req, res) => {
  const io = req.app.get("io");
  const user = {
    name: req.user.displayName,
    photo: req.user.photos[0].value.replace(/sz=50/gi, "sz=250")
  };
  const authToken = createAuthToken(user);
  io.in(req.session.socketId).emit("google", user);
  res.redirect(`https://localhost:3000?authToken=${authToken}`);
});

// Routes that are triggered on the client
router.get("/auth/google", googleAuth);

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
