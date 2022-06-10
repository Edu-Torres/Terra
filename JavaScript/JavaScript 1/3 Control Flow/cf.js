// If
let hour = 10;
if (hour >= 6 && hour < 12) console.log("good morning");
else if (hour >= 12 && hour < 18) console.log("good afternoon");
else console.log("good evening");

//Switch
let role;
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

//For
for (let i = 0; i < 6; i++) {
  if (i % 2 !== 0) console.log(i);
}

//while
let i = 0;
while (i <= 5) {
  if (i % 2 === 0) console.log(i);
  i++;
}

//Do while
i = 0;
do {
  console.log(String.fromCharCode(65 + i));
  i++;
} while (i <= 2);

// For-in
// Properties in an object
const person = {
  name: "Josh",
  age: 23,
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);

// For-of
// Elemnts or items in an array
for (let color of colors) console.log(color);

// Break , Continue
i = 0;
while (i <= 10) {
  i++;
  if (i === 8) break;
  if (i % 2 === 0) continue;
  console.log(i);
}

//Numbers
function maximo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

let numb = maximo(8, 9);
console.log(numb);

//Exercises
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*'
    console.log(pattern);
  }
}

showStars(9);