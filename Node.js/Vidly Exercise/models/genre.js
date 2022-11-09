const mongoose = require('mongoose');
const Joi = require("joi");

const Genre = mongoose.model(
    "Genres",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
      },
    })
);
  
function checkGenreSchema(genre) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
    });
    return schema.validate(genre);
}
  
exports.Genre = Genre; 
exports.validate = checkGenreSchema;