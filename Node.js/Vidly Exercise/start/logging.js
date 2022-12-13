const winston = require('winston'); // The default logger, can create custom ones
// require('winston-mongodb');
require('express-async-errors') // wraps every route with the error middleware

module.exports = function () {
    // Uncaught exceptions (beyond the express route pipeline)
    // The node run will not terminate since the error was caught
    // Only works with synchronous code
    // process.on('uncaughtException', (ex) => {
    //   // on to subscribe to event listeners
    //   winston.error(ex.message, ex);
    //   // process.exit(1); // to terminate the process, which might not be in a clean state
    // })
    // This winston handler does the same thing as the three lines above
    winston.exceptions.handle(
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
        new winston.transports.Console()
    )
    winston.exitOnError = true;
    // throw new Error('Uncaught exception jejeje'); // Uncaught exception
    
    process.on('unhandledRejection', (ex) => {
    // console.log('WE GOT AN UNHANDLED REJECTION');
    // winston.error(ex.message, ex);
    throw ex;
    })
    // const p = Promise.reject(new Error('Failed asynchronously'));
    // p.then(() => console.log('Done'));


    // To add the file transport besides the console transport
    winston.add(new winston.transports.File({ filename: 'logfile.log'}));
    winston.add(new winston.transports.Console());
    // winston.add(new winston.transports.MongoDB({
    // db: 'mongodb://localhost/vidly',
    // level: 'info' // will only log info errors or higher (warn, error)
    // }))
}