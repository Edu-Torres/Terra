const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj)
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\Node.js\\1 Node Module System',
//   base: 'built-in-modules.js',
//   ext: '.js',
//   name: 'built-in-modules'
// }


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}
Free Memory: ${freeMemory}`)
// Total Memory: 16934494208
// Free Memory: 8940765184


const fs = require('fs');
// Synchronous form (blocking)
const files = fs.readdirSync('./');
console.log(files)
// [ 'app.js', 'app2.js', 'built-in-modules.js', 'logger.js' ]
// Asynchronous (parallel) has a second parameter, function to call after
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
// Result [ 'app.js', 'app2.js', 'built-in-modules.js', 'logger.js' ]

const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register a listener (addListener or its abbreviation on)
emitter.on('messageLogged', function (arg) {
    console.log('Listener called', arg);
})
// Raise an event has to be after the listener
// calls all the register listeners and calls them synchronously
// you can add event arguments, usually wrapped in an object
emitter.emit('messageLogged', {id: 1, url: 'something'})
// Listener called { id: 1, url: 'something' }


const http = require('http');
const server = http.createServer(); // inherits from net>server which is an Event Emitter
server.on('connection', (socket) => {
    // This gets called when you open port 3000 on browser
    console.log('New connection...')
})
server.listen(3000);
console.log('Listening on port 3000...')

