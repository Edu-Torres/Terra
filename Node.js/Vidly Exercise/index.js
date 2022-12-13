const winston = require('winston');
const express = require("express");
const app = express();

// Single responsability principle
require('./start/logging')();
require('./start/routes')(app);
require('./start/config')();
require('./start/db')();
require('./start/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));
// Use joi-password-complexity to specify password minimum parameters

module.exports = server;
