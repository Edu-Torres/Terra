const mongoose = require("mongoose");
const Joi = require("joi");
const { Genre, genreSchema } = require("../models/genre");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 25,
  },
  genre: genreSchema,
  numberInStock: { type: Number, default: 0 },
  dailyRentalRate: { type: Number, default: 0 },
});
const Movie = mongoose.model("Movies", movieSchema);

function checkMovieSchema(movie) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0),
    dailyRentalRate: Joi.number().min(0),
  });
  return schema.validate(movie);
}

exports.Movie = Movie;
exports.movieSchema = movieSchema;
exports.validate = checkMovieSchema;
