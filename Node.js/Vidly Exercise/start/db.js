const winston = require('winston');
const mongoose = require("mongoose");
const config = require('config');

module.exports = function () {
    mongoose
        .connect(config.get('db')) // To dynamically get the correct DB string
        .then(() => winston.info(`Connected to ${config.get('db')}...`));
    // remove cathch, and let our global error handler log it in the console
}