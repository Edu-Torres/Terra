walk();
// Function declaration
function walk() {
    console.log('walk');
}
// Only this one can be called before it is initialized
// Hoisting: At runtime machine moves all function declarations to the top of the file

// Function Expression
let run = function () {
    console.log('run')
};
// Uses semicolon at the end
// Function can be anonymous or named

let move = run;
run();
move();

function sum(a, b) {
    return a + b;
}
console.log(sum(1));
// the second parameter is run as undefined
console.log(sum(2, 3, 4, 5));
// It works but only takes the first two numbers


// Arguments object
function multiply() {
    let total = 1;
    for (let value of arguments)
        total *= value;
    return total;
}
console.log(multiply(1, 2, 3, 4, 5, 6));
// Can have as many parameters


// Rest operator
function cashier(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(cashier(.10, 30, 15));
// Rest parameter must be last formal parameter


// Default Parameters
// You should have your default parameters at the end
function interest(principal, rate = 3.5, years = 5) {
// rate = rate || 3.5;
    return principal * rate / 100 * years;
}
console.log(interest(1000));
// You should have your default parameters at the end


// Getters and Setters
const person = {
    firstName: 'Eduardo',
    lastName: 'Torres',
    // Can write function inside object like this:
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};
console.log(person.fullName());
// With getters and setters
const person1 = {
    firstName: 'Eduardo',
    lastName: 'Torres',
    get fullName() {
        return `${person1.firstName} ${person1.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person1.fullName = 'Sofia Vergara'; 
console.log(person1.fullName);


//Try Catch
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0)
        throw new Error('Values not permited');
    return a / b;
}
try {
    divide(9, 5);
}
catch (e) { // What to do with the error
    alert(e);
}


// Scope
{
    const message = 'hi';
} // message only accesible inside this block
if (true) {
    const another = 'bye';
} // And this block (local scope)
const another = 'hello'; // Global scope
// Local variables take precedence over global if available


// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// var is not limited to the block it is defined, only limited by function
var color = 'red';
// var global variables are attached to the window object
// If using libraries this can override your variable if it has a same name variable
// Techinaclly functions are also attached to the window object



// This keyword
// The object that is executing the current function
// method -> obj
// function -> global (window, global)
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.play();

function playVideo() {
    console.log(this);
}
playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('b');
Video('op');
// new makes it a object different to the global object

const album = {
    title: 'Shadows',
    tags: ['Round and Round', 'Fire for You', 'Baby'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
        // this inside forEach function references the window object
        // solution is to use thisArg parameter in forEach()
        // Since showTags() is a method this refers to its object
    }
};
album.showTags();



// Changing the value of this
const album2 = {
    title: 'Night Drive',
    tags: ['Mood Ring', 'Night Drive', 'Kiss Me'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
        // Have self store this
        // Also none of this is needed by using an arrow function for some reason
        // Arrow functions inherit this from the containing function
    }
};
album2.showTags();

function playMusic() {
    console.log(this, 'adios');
}
// call 
// to use function changing 'this' for first argument in call()
playMusic.call({ name: 'Lalo' });
// apply 
// same but the remaining arguments have to be passed as array
playMusic.apply({ name: 'Lalo' });
//bind
// returns a new function with the 'this' changed
playMusic.bind({ name: 'Lalo' })();
// the last () is just to quickly call the new function
// or it can be stored in a constant

const album3 = {
    title: 'Shadows',
    tags: ['Round and Round', 'Fire for You', 'Baby'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
        // this makes the call of the function always refer to this
    }
};
album3.showTags();




















































































