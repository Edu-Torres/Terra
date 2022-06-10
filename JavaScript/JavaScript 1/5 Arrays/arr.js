//Addd Element
const numbers = [3, 4];
//The reference to array is constant but array can change
//End
numbers.push(5, 6);
//Beginning
numbers.unshift(0, 1, 2);
//Middle
numbers.splice(2, 0, "a", "b");
//We want to delete 0 numbers
console.log(numbers);


//Find
//Primitives
console.log(numbers.indexOf("a"));
numbers.push("a");
console.log(numbers.lastIndexOf("a"));
console.log(numbers.includes(3));
// Can pass second parameter for index at which start search


//Reference
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];
console.log(
  courses.find(function (course) {
    return course.name === "a";
  })
);
//Executes at every element as a function
console.log(
  courses.findIndex(function (course) {
    return course.name === "a";
  })
);


// Arrow Functions
courses.findIndex((course) => course.name === "a");
// Only one param can remove parenthesis
// Only one line can remove return and fancy parenthesis


//Removing
console.log(numbers);
//End
const last = numbers.pop();

// Beginning
const first = numbers.shift();

// Middle
numbers.splice(2, 1);
console.log(numbers);


// Clear array
let num = [1, 2, 3, 4];
//Reassigning
num = [];
//It works if num was the only reference to that array
//Truncate
num.length = 0;
//Splice
num.splice(0, num.length);
//Pop
while (num.length > 0) num.pop();
console.log(num);


//Slice Combine
const uno = [1, 2, 3];
const dos = [5, 6, 7];
const combined = uno.concat(dos);
console.log(combined);
console.log(combined.slice(2, 4));
console.log(combined.slice(2));
console.log(combined.slice());
//The values of the array are copied
//So this last slice makes a true copy


//Spread operator
const together = [...uno, 'cuatro', ...dos];
//adding the elements individually
console.log(together);


// Iterating
for (let n of uno)
    console.log(n);

dos.forEach(function (n) {
    console.log(n);
});

uno.forEach(n => console.log(n));

uno.forEach((n, i) => console.log(i, n));

for (let d in dos)
    console.log(d, dos[d]);


//Split
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts)
//Joining
const joined = parts.join('-');
console.log(joined);
    

// Sort
const numeros = [2, 1, 3, 4, 7];
numeros.sort();
//Reverse
numeros.reverse();
console.log(numeros);
//Sort objects
const languages = [
    { id: 1, name: 'Japanese' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'arabic'}
]
languages.sort(function (a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
});
//Put function used for comparison
console.log(languages);


//Every
const values = [4, 5, 6, -3, 8, -2];
const allPositives = values.every(function (value) {
    return value >= 0;
});
console.log(allPositives);
//As soon as it finds a false element it stops

const atLeastOnePositive = values.some(function (value) {
    return value >= 0;
});
console.log(atLeastOnePositive);
//At least an element that mathces the criteria


//Filtering
const filtered = values.filter(n => n >= 0);
console.log(filtered);


//Mapping
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
console.log(filtered.map(n => ({ value: n })));
//If you are returning an object you need to wrap it in parenthesis
//Map and filter is chainable


// Reducing
const costos = [34, 55, 70, 19, 50];
let sum = 0;
for (let x of costos)
    sum += x;
console.log(sum);
//Same as =
console.log(costos.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
//accumulator keeps track of the last return or uses the initial value given
//currentValue are the numbers in costos





























