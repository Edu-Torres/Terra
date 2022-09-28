function sayHello(name) {
    console.log('Hello. ' + name);
}

// Client side JavaScript
// JavaScript global objects they are in the window object
sayHello('Eduardo'); // Hello. Eduardo

console.log();
// setTimeout()
clearTimeout()
// setInterval()
clearInterval()


// In node we have global instead of window
global.console.log("Global"); // Global
global.clearTimeout();
var message = ''; // variables are added in window but won't be in global

// Module
// Every file is a module
// Everything inside a module is only available in itself
console.log(module);
// Module {
//     id: '.',
//     path: 'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\Node.js\\1 Node Module System',
//     exports: {},
//     filename: 'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\Node.js\\1 Node Module System\\app.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\Node.js\\1 Node Module System\\node_modules',
//       'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\Node.js\\node_modules',
//       'C:\\Users\\Juan Manuel\\Documents\\Programming\\Terra\\node_modules',
//       'C:\\Users\\Juan Manuel\\Documents\\Programming\\node_modules',
//       'C:\\Users\\Juan Manuel\\Documents\\node_modules',
//       'C:\\Users\\Juan Manuel\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }



