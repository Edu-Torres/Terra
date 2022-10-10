const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.use(express.json()); // Middleware that is used in the request processing pipeline

const genres = [
  { id: 1, name: "Comdedy" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Historical Film" },
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre with given id not found");
  res.send(genre);
});

router.post("/", (req, res) => {
  const { error } = checkGenreSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  index =
    genres.reduce((prev, curr) => {
      return Math.max(prev, curr.id);
    }, 0) + 1;
  const genre = { id: index, name: req.body.name };
  genres.push(genre);
  res.send(genre);
});

router.put("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre with given id not found");
  const { error } = checkGenreSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("Genre with given id not found");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

function checkGenreSchema(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(genre);
}

module.exports = router;