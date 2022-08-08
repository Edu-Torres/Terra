// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules

// CommonJS (Used in Node)
// Exporting
module.exports.Cirlce = Circle;
// Or if you have only one class
module.exports = Circle;
// Importing
const Circle = require("./src/circle");
// ./ refers to the current folder

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing
import { Square } from "./square";

// We use Babel to transpile our modern JavaScript code
// into code that browsers can understand (typically ES5).
// Terminal:
// npm init --yes
// npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
// npm run babel

// We use Webpack to combine our JavaScript files into a
// bundle.
// Terminal:
// npm i -g webpack-cli@2.0.14
//
// "scripts": {
//     "babel": "babel --presets env index.js -o build/index.js",
//     "build": "webpack -w"     watch so it will automatically build
//   },
