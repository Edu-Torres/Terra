const mongoose = require('mongoose');
const Joi = require("joi");
const moment = require('moment'); // library to play with dates

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
});

// Static method
rentalSchema.statics.lookup = function (customerId, movieId) {
  // let the caller of the lookup method await the promise
  return this.findOne({
    'customer._id': customerId,
    'movie._id': movieId
  })
  // We use dot notation and quotes to access a property in a subdocument
}

// Instance Method
rentalSchema.methods.return = function () {
  this.dateReturned = new Date();

  const rentalDays = moment().diff(this.dateOut, 'days')
  this.rentalFee = rentalDays * this.movie.dailyRentalRate;
}



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