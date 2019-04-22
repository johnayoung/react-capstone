const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { CLIENT_ORIGIN, JWT_EXPIRY, JWT_SECRET } = require("../config");

const router = express.Router();

function createAuthToken(user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.email,
    expiresIn: JWT_EXPIRY
  });
}

/* ========== CONTROLLERS ========== */
const userController = require("../controllers/user");

/* ========== API KEYS AND PASSPORT CONFIG ========== */
const passportConfig = require("../config/passport");

/* ========== PRIMARY APP ROUTES ========== */
router.get("/api/test", (req, res, next) => {
  console.log(req.session);
  res.send("hello");
});
router.post("/login", userController.postLogin);
router.get("/forgot", userController.getForgot);
router.post("/forgot", userController.postForgot);
router.get("/reset/:token", userController.getReset);
router.post("/reset/:token", userController.postReset);
router.post("/signup", userController.postSignup);
router.post("/account/profile", passportConfig.isAuthenticated, userController.postUpdateProfile);
router.post("/account/password", passportConfig.isAuthenticated, userController.postUpdatePassword);
router.post("/account/delete", passportConfig.isAuthenticated, userController.postDeleteAccount);
router.get(
  "/account/unlink/:provider",
  passportConfig.isAuthenticated,
  userController.getOauthUnlink
);

/* ========== OAUTH AUTHENTICATION ROUTES ========== */
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
  failureRedirect: `${CLIENT_ORIGIN}`
});
router.get("/google/callback", googleAuth, (req, res, next) => {
  res.redirect(`${CLIENT_ORIGIN}`);
});
router.get("/google", googleAuth);

module.exports = router;
