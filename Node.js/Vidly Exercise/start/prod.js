const helmet = require('helmet');
const compression = require('compression');

module.exports = function (app) {
    app.use(helmet());
    app.use(compression()); // These are functions we call to get the middleware function
}
