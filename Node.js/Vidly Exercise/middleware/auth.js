// Authorization
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function auth(req, res, next) {
    const token = req.header('x-auth-token');
    // 401 Doesn't have required credentials
    if (!token) return res.status(401).send('Access denied. No token provided');

    // Compare token with saved with key
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        // decoded has the payload which will be the user _id in this case
        req.user = decoded; // so req.user._id has the _id and isAdmin
        next();
    } // If token is not valid it will trhow an exception
    catch (ex) { // 400 = bad request
        res.status(400).send('Invalid token.');
    }
}