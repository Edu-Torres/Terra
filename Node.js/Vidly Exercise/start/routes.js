const express = require('express');
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function(app) {
    // Middleware that is used in the request processing pipeline
    app.use(express.json());
    app.use("/api/genres", genres); 
    app.use("/api/customers", customers);
    app.use("/api/movies", movies);
    app.use("/api/rentals", rentals);
    app.use("/api/users", users);
    app.use("/api/auth", auth);
    // error middleware after all existing MW functions
    app.use(error);
    // When doing logic route function will go to this specified error function as next
}