function log(req, res, next) {
    console.log('Logging...');
    next(); // require to continue
}

module.exports = log