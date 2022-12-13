const auth = require('../middleware/auth');
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const user = await User.find().sort("name");
  res.send(user);
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.get("/:id", async (req, res) => {
  const user = await User.find({ _id: req.params.id });
  if (user && user.length === 0) return res.status(404).send("User with given id not found");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const already = await User.findOne({ email: req.body.email });
  if (already) return res.status(400).send("Email already in use");

  let user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save().catch((err) => res.send(err.message));

  // Header return token at registration time
  const token = user.generateAuthToken();
  
  // Return user, but without password, using lodash
  res.header('x-auth-token', token).send(_.pick(user, ["_id", "name", "email"]));

});

router.delete("/:id", auth, async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send("User with given id not found");
  res.send(user);
});

module.exports = router;
