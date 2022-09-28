const Logger = require('./logger') // import a module
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

logger.log('message');
// message
// Listener called { id: 1, url: 'http://' }