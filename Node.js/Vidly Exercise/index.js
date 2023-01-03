const winston = require('winston');
const express = require("express");
const app = express();

// Single responsability principle
require('./start/logging')();
require('./start/routes')(app);
require('./start/config')();
require('./start/db')();
require('./start/validation')();
require('./start/prod')(app); // We could make this conditioned to be used only in prod

let server;
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
    server = app.listen(port, () => winston.info(`Listening on port ${port}...`));
} else {
    server = app.listen(); // Not a specific port so the tests can run in parallel
}
// Use joi-password-complexity to specify password minimum parameters

module.exports = server;
