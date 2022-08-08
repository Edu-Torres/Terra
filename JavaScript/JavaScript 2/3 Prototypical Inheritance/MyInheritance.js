function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('dupicate');
};

function Circle(radius, color) {
    this.radius = radius;
    // Call the super constructor
    // To pass a parameter to its parent object, we need to make sure it constructs with the same this
    // Otherwise it will set any properties in Shape, such as color, in the window object 
    Shape.call(this, color);
}

// Create object from a specific prototype
// It creates an empty object that has Shape.prototype as its prototype
Circle.prototype = Object.create(Shape.prototype)
// The problem with this is that we loose the Circle constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape('red');
const c = new Circle(1, 'blue');

function Square(size) {
    this.size = size;
}

// Reset protoype but made as function
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
extend(Square, Shape);
// Any prototype member must come after the extend, since we are 
// actually resetting the prototype to an empty object with a parent prototype
// and even the constructor got lost 
Square.prototype.draw = function () {
    console.log('draw');
}
// Make this a function 
const sq = new Square(9);


function Animal() {
}
Animal.prototype.move = function () {
    console.log('run');
}

function Monkey() {
}

extend(Monkey, Animal);

// Override
Monkey.prototype.move = function() {
    console.log('climb');
    // You can also call the implementation in the parent
    // If you are not using this in the implementation you can call it simply
    Animal.prototype.move();
    // If the prototype member uses this use call
    Animal.prototype.move.call(this);
}

const m = new Monkey();

function Fish() {
}

extend(Fish, Animal);

Fish.prototype.move = function () {
    console.log('swim');
}

// Polymorphism allows each object its own method
const animals = [
    new Monkey(),
    new Fish()
];
for (let a of animals)
    a.move();

// Composing Objects to use instead of inheritance when complexity arises

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

// To copy properties and methods to an object
const person = Object.assign({}, canEat, canWalk);
Object.assign(Monkey.prototype, canEat, canWalk);

const m2 = new Monkey();

// To simplify the procedure
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}