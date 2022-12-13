const config = require('config');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: /.*@.*/,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: Boolean
});

// Add methods to the schema so every user created or looked up has it 
userSchema.methods.generateAuthToken = function () {
    // Will include iat which is the time the token was created
    return jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
}

const User = mongoose.model("Users", userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.userSchema = userSchema;
exports.validate = validateUser;