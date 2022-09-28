const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://madeup.io/log'
function log() { console.log('Standalone function') }

// Extends all methods from EventEmitter
class Logger extends EventEmitter{

    log(message) {
        // Send an HTTP request
        console.log(message)
    
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

// Exporting an object 
module.exports.log = log; // exporting log method
module.exports.endPoint = url; // changing name to the outside

// Exporting a stand alone function
module.exports = log; 

// Final export, the class
module.exports = Logger; // This last one prevails

// node doesn't execute the code directly , it always wraps it around with a function
// A Immedieately Invoked Function Expression (IIFE)
// Called Module Wraper Function
// (funtion(exports, require, module, __filename, __dirname){
//     // Here goes the module
// })
console.log(__filename) // C:\Users\Juan Manuel\Documents\Programming\Terra\Node.js\1 Node Module System\logger.js
console.log(__dirname) // C:\Users\Juan Manuel\Documents\Programming\Terra\Node.js\1 Node Module System

