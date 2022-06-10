let x = 5;
let y = 7;

//Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increment (++)
console.log(++x);

//Decrement (--)
console.log(x--);

// Assigment
x += 5;
console.log(x);
x *= 3;
console.log(x);

// Comparison
console.log(x <= 20);
console.log(x !== 1);

//Strict equallity operator, same type and value
console.log(x === 1);

// Lose equality (converts value on right to match left)
console.log("1" == 1);

//Ternary
let points = 100;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// Logical Operators
console.log(true && true);
console.log(true || false);
console.log(!true);

// Using non-booleans
console.log(false || "Eduardo");
// Falsy:
// undefined
// null
// 0
// false
// ''
// NaN

// Truthy
// Anything else

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise operators
console.log(1 | 2);
console.log(1 & 2);

//Example Accesses

//Read    00000100
//Write   00000010
//Execute 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);

//Exercise swapping
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
