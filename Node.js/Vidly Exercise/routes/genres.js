const validateObjectId = require('../middleware/validateObjectId');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Genre, validate } = require("../models/genre");
const express = require("express");
const router = express.Router();
const asyncMiddleware = require('../middleware/async');
const mongoose = require('mongoose');

// Secon parameter is a function expression (not call)
// It is the Express framework that calls the function at runtime
// and passes the parameters req, res, next
router.get("/", asyncMiddleware(async (req, res, next) => {
  // const nameQuery = req.query.name; Query params
  const genres = await Genre.find().sort("name");
  res.send(genres);
}));

router.get("/:id", validateObjectId, async (req, res) => {
  const genre = await Genre.findById( req.params.id );
  if (!genre) return res.status(404).send("Genre with given id not found");
  res.send(genre);
});

// Parameters: route, optional middleware, route handler function
// Only authenticated users
router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  res.send(genre);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!genre) return res.status(404).send("Genre with given id not found");
  res.send(genre);
});

// Multiple Middleware functions in array and in order
router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre) return res.status(404).send("Genre with given id not found");
  res.send(genre);
});

module.exports = router;
