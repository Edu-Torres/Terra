// Core module? File(./)? node_module?
var _ = require("underscore");

console.log(_.contains([1, 2, 3], 2)); // true

// My node module
var gf = require('grapefruit-lib')
console.log(gf.add(9,9))