// nodemon npm package to run constantly
const express = require("express");
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();


// Middleware
app.use(express.json()); // the express.json returns a mideelware function that parses
// the body of the request into a JSON Object and then sets the request.body property to it

// Another MW function parses a request into URL encoded payloads
// So it reads the x-www-form-urlencoded option in Postman
app.use(express.urlencoded({ extended: true })); // key=value&key=value handy for HTML forms
// extended so we can pass arrays an other complex objects

app.use(express.static('public')); // MW to pass static files from a folder
// http://localhost:3000/readme.txt   will get the readme file in public

// Every route handler is in fact a Middleware function (get, put, post, delete)

// To place a middleware function in our request processing pipeline
// This one comes from logger.js
app.use(logger)

// This MW functions are called in sequence
app.use((req, res, next) => {
    console.log('Authenticating...');
    next();
})

// Third party MiddleWares
// To pass headers
app.use(helmet());


// To log http requests
app.use(morgan('tiny'));
// GET /api/courses 200 50 - 2.306 ms

// Example get/post code:
const courses = [
    { id: 1, name: "Math" },
    { id: 2, name: "Writing" },
];

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.post("/api/courses", (req, res) => {
    const course = {
      id: courses.length + 1,
      name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));