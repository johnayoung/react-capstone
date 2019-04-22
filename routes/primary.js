const express = require("express");
const passport = require("passport");
const querystring = require("querystring");
const { CLIENT_ORIGIN } = require("../config");

const router = express.Router();

/* ========== CONTROLLERS ========== */
const userController = require("../controllers/user");

/* ========== API KEYS AND PASSPORT CONFIG ========== */
const passportConfig = require("../config/passport");

/* ========== PRIMARY APP ROUTES ========== */
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
  failureRedirect: `${CLIENT_ORIGIN}/login`
});
router.get("/google/callback", googleAuth, (req, res, next) => {
  res.redirect(`${CLIENT_ORIGIN}`);
});
router.get("/google", googleAuth);

module.exports = router;
