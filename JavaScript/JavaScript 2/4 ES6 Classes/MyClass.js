"use strict";
// prevent us from modifying the global object

class Animal {
  height = 9;

  constructor(speed) {
    this.speed = speed;
    // This method will be in the instance
    this.eat = function () {
      console.log("eat");
    };
  }

  // This method will be in the prototype
  move() {
    console.log("moving at: " + this.speed);
  }

  // Static methods are usually utility functions,
  // not tied to a particular instance of an object
  static birth(speed) {
    console.log("A new animal has been born");
    return new Animal(speed);
  }
}

const a = new Animal(8);
const b = Animal.birth(9);
// Class declaration
class Triangle {}
// Class expression
const Square = class {};
// Unlike functions class declarations are not hoisted to the top

const People = function () {
  this.talk = function () {
    console.log(this);
  };
};

const p = new People();
// Method call
p.talk(); // Here this is the people instance 

const talk = p.talk; 

// Function call
talk(); // Here this is undefined
// This should print the global object, but it wont since we are in strict mode

// By default the body of a class is executed in strict mode
class Juan {
  sing = function () {
    console.log("lalalala", this);
  };
}
const j = new Juan();
j.sing();
const sing = j.sing;
sing();
// Instead of window object it will be undefined even without the strict mode

// Private attributes/methods 
// Symbol
const _radius = Symbol();  // not a constructor, but a function
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  // Brackets so it is a computed name
  [_draw]() {
    console.log(this);
  }
}

const c = new Circle(1);
console.log('getOwnPropertyNames of c: ', Object.getOwnPropertyNames(c)); // Doesn't work, but:
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]) // This is how you could access a symbol property


// Maps
const _diameter = new WeakMap();
const _movement = new WeakMap();
const _rotate = new WeakMap();

class Planet {
  constructor(diameter) {
    _diameter.set(this, diameter);
    _movement.set(this, function () {
      // Here this is undefined since classes are strict mode, it would be window elsewhere
      console.log('movement: ', this);
    });
    _rotate.set(this, () => {
      // Arrow functions use the this value of their containing function 
      console.log('rotate', this);
    })
  }
  draw() { // how to access/call this private properties
    console.log(_diameter.get(this));
    _movement.get(this)();
    _rotate.get(this)();
  }
}

const venus = new Planet(4); 
venus.draw();

//Or.. all together in one weakmap
const privateProps = new WeakMap();
class Moons {
  constructor(diameter) {
    privateProps.set(this, {
      diameter: diameter,
      movement: () => {
        console.log('movement', this);
      }
    });
    this.draw = function () {
      console.log('draw');
      privateProps.get(this).diameter = 9
      console.log('diameter', privateProps.get(this).diameter);
      privateProps.get(this).movement();
    }
  }
}

const m = new Moons(2);
console.log(m);
m.draw();