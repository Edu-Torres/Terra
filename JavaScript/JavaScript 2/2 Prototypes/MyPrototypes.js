let car = { tires: 4 };

// To access the prototype
Object.getPrototypeOf(car);

// To get the attributes of a property:
const propertyDesc = Object.getOwnPropertyDescriptor(car, "tires");
console.log(propertyDesc);

let person = { name: "Eduardo" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  // configurable false means it cannot be deleted
  configurable: false,
});
// Wont change the name since writable is false
person.name = "Juan";
// Will appear empty because enumerable is false
console.log(Object.keys(person));


function Circle(radius) {
  this.radius = radius
  this.move = function () {
    console.log("move");
    // can call prototype method
    console.log(this.toString());
  }
}
const c1 = new Circle(1);
const c2 = new Circle(2);
const c3 = new Circle(1);

// The prototype (parent) for objects created with this constructor
console.log('circle protoptype: ', Circle.prototype);
// Better to have the draw method in the prototype, so it doesnt get
// copied with every instance of circle, only one copy in memory
Circle.prototype.draw = function () {
  console.log("draw"); 
  // can call instance method
  this.move();
}
// This is then a prototype member, compared to instance members
Circle.prototype.toString = function () {
  return 'circle with radius: ' + this.radius;
};

// Iterate through instance members
console.log('Object.keys of c1: ', Object.keys(c1));

// Through instance and prototype members (that are enumerable)
for (let key in c1) console.log(key);

// Checks if property is instance. Here is false, since its protoype
console.log(c1.hasOwnProperty('draw'));


// Exercise

function Stopwatch() {
  let startTime, running = false;
  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    }, 
    set: function (value) {
      startTime = value;
    }
  })
  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    }
  })
  this.duration = 0;
}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('Already running');
  this.running = true;
  this.startTime = new Date();
}
Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('It wasnt running');
  this.running = false;
  this.duration += (new Date()-this.startTime) / 1000 ;
}
Stopwatch.prototype.reset = function () {
  this.running = false;
  this.startTime, this.duration = 0;
}