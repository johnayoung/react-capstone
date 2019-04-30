const express = require("express");
const axios = require("axios");

const router = express.Router();
const Collection = require("../models/collection");
const User = require("../models/user");

/* ========== GET COLLECTIONS ========== */

// Get all endpoints from database
router.get("/", (req, res, next) => {
  Collection.find()
    .then(collections => {
      res.json(collections);
    })
    .catch(err => {
      next(err);
    });
});

// Get one collection from database
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Collection.findOne({ _id: id })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      next(err);
    });
});

/* ========== POST COLLECTIONS ========== */
router.post("/", (req, res, next) => {
  const { collections } = req.body;

  Collection.insertMany(collections)
    .then(collections => {
      console.log("collections is", collections);
      res
        .location(`${req.originalUrl}`)
        .status(201)
        .json(collections);
    })
    .catch(err => {
      // Check for duplicate entry in Mongo
      if (err.code === 11000) {
        err = new Error("A collection you created with that name already exists");
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;
