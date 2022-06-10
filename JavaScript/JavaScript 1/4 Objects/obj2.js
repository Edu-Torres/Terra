//Primitive Types
//F2 Refactor and Alt+click another cursor
let x = 10;
let y = x;
x = 20;
//y keeps same value

//Reference Type
let xx = { value: 10 };
let yy = xx;
xx.value = 20;

//Local variable
let number = 10;
function increase(number) {
  number++;
}
increase(number);
//Here the value of number was copied into the parameter
//Making it completely independent
console.log(number);
// Copying by reference
let objnumber = { value: 10 };
function increaseObj(obj) {
  obj.value++;
}
//So the reference is copied and inside the function
//the changes will be done to the object in that direction
increaseObj(objnumber);
console.log(objnumber);


//Object
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }  
};

for (let key in circle)
  console.log(key, circle[key]);

for (let key of Object.keys(circle))
  console.log(key); 

for (let entry of Object.entries(circle))
  console.log(entry); 

if ('radius' in circle) console.log('yes');


//Clone an object
const another = {};
for (let key in circle)
  another[key] = circle[key];
//or like this, can use an existing or empty object
const another2 = Object.assign({}, circle);
//or Spread Operator
const another3 = { ...circle };

//Math
console.log(Math.exp(4));
console.log(Math.random());

//String primitive
const message1 = 'hi';
message1.length;
message1.indexOf('i');
//It has attributes and methods because JS wraps it as a String object

//String Object
const message2 = String('hi');
message2[0];
message2.includes('h');

//Escape characters
const message3 = 'Esca\'pe Char\nact\\ers';
console.log(message3);
message3.split(' ');

// Template literals
const message4 = `This is my 
new way of writing'`;
const message5 = `Hi ${message4} using ${message3}`;
console.log(message5);


//Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9); //minutes and secs initizlied to 0 by default
now.setFullYear(2017);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
