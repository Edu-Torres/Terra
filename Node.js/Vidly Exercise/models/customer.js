
const mongoose = require("mongoose");
const Joi = require("joi");

const Customer = mongoose.model("Customers", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: Number,
    isGold: {
        type: Boolean,
        default: false
    }
}));

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.number(),
        isGold: Joi.boolean()
    });
    return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;