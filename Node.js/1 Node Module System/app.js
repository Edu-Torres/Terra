function sayHello(name) {
    console.log('Hello. ' + name);
}

sayHello('Eduardo');

// Client side JavaScript
// JavaScript global objects they are in the window object
console.log();
// setTimeout()
clearTimeout()
// setInterval()
clearInterval()


// In node we have global instead of window
global.console.log();
global.clearTimeout();
var message = ''; // variables are added in window but won't be in global

// Module
console.log(module); // Every file is a module
// Everything inside a module is only available in itself



