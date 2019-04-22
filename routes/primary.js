const express = require("express");
const passport = require("passport");

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
router.get("/auth/google", passport.authenticate("google", { scope: "profile email" }));
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(req.session.returnTo || "/");
  }
);

module.exports = router;
