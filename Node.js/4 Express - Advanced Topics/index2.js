const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan');
// To manage our dev/prod configurations
const config = require('config');
// To debug
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const app = express();

// Tells you the environment we are in
// undefined | development | testing | production
// console.log(process.env.NODE_ENV) // undefined
// same but returns development by deafult
// app.get('env');

// To set our environment:
// export/set NODE_ENV=production on PowerShell $env:NODE_ENV = "production"


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...')
}
// Debugger
// $env:DEBUG='app:db'  $env:DEBUG='app:db app:startup'
dbDebugger('Connected to the database')

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 
app.use(helmet());


// Configuration
console.log(config.get('name')); // My Express App - Production
console.log(config.get('mail.host')); // prod-mail-server
// Don't save passwords in the config file, save them in terminal
// $env:app_password=1234
// In Production there must likely will be a configuration pannel for storing this variables
// The mapping for password is done in custom-environment-variables
console.log(config.get('mail.password'));// 1234
// Looked at various sources, one of them command line arguments





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