
const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: Number,
    isGold: {
        type: Boolean,
        default: false
    }
});
const Customer = mongoose.model("Customers", customerSchema);

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.number(),
        isGold: Joi.boolean()
    });
    return schema.validate(customer);
}

exports.Customer = Customer;
exports.customerSchema = customerSchema;
exports.validate = validateCustomer;