const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.error(err.message, err);
  // error
  // warn
  // info
  // verbose
  // debug
  // silly
  // winston.log('error', err.message, err)
  // optionally we can store (metadata second arg)

  // 500 = Internal server error
  res.status(500).send("Something failed.");
};
