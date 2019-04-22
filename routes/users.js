const express = require("express");

const router = express.Router();

/* ========== CONTROLLERS ========== */
const userController = require("../controllers/user");

/* ========== API KEYS AND PASSPORT CONFIG ========== */
const passportConfig = require("../config/passport");

/* ========== PRIMARY APP ROUTES ========== */

module.exports = router;
