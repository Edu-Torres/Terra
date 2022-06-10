//Better to use let instead of var
//Single quotes is more common in JS
let name = "Eduardo";
//Variable names no space or hyphen (-)
//They are case sensitive
console.log(name);

//Constant variables cant be reassigned
const interestRate = 0.3;
console.log(interestRate);

//Primitives:
//String Literal
let myName = "Edu";
//Number literal
let age = 45;
//Boolean literal
let isApproved = true;
//undefined
let firstName;
let lastName = undefined;
//null, to explicitly clear the value of a variable
let selectedColor = null;

//Dynamic language, the type of the variable can be changed at runtime
name = 34;
console.log(typeof name);
console.log(typeof lastName);


// Reference Types

//Object
let person = {
  yourName: "Edu",
  yourAge: 30,
};
console.log(person);
//Dot notation
person.age = 31;
//Bracket notation, useful to pass the target property as a variable
person["yourName"] = "Juan";

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
//Can add in any index and the rest is filled with empty
//The length of the array is dynamic, The type of object is also dynamic 
selectedColors[4] = 9;
console.log(selectedColors);
console.log(selectedColors.length);

//Functions
//No need to add semicolon
function greet(name, planet) {
    console.log('Hello ' + name + ' from ' + planet);
}
greet('Juan');

//Function that calculates
function square(num) {
    return num * num;
}
console.log(square(14));

