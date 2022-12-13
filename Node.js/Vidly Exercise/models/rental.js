const mongoose = require('mongoose');
const Joi = require("joi");

const rentalSchema = new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name: {
        type: String, 
        required: true,
        maxlength: 255
      },
      phone: Number,
      isGold: Boolean
    }),
    required: true
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        maxlength: 255,
        trim: true
      },
      dailyRentalRate: {
        type: Number,
        min: 0,
        required: true
      }
    }),
    required: true
  },
  dateOut: {
    type: Date, 
    required: true,
    default: Date.now()
  },
  dateReturned: Date, 
  rentalFee: {
    type: Number,
    min: 0
  }
})
const Rental = mongoose.model(
    "Rentals",
    rentalSchema
);
  
// Proper way to check for Ids, if not it will approve and later just hang
function checkRentalSchema(rental) {
    const schema = Joi.object({
      customerId: Joi.objectId().required(),
      movieId: Joi.objectId().required()
    });
    return schema.validate(rental);
}
  
exports.Rental = Rental; 
exports.validate = checkRentalSchema;