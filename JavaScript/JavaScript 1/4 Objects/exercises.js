//Address
let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

//Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address2 = createAddress("ff", "hh", "tt");
showAddress(address2);

//Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address3 = new Address("rr", "ss", "cc");
console.log(address3);

let myHouse = new Address("z", "x", "c");
let yourHouse = new Address("z", "x", "c");

function areEqual(address1, address2) {
  for (let key in address1) if (address1[key] !== address2[key]) return false;
  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(myHouse, yourHouse));
console.log(areSame(myHouse, yourHouse));

//BlogPost
let post = {
  title: "You",
  body: "text",
  author: "Joe",
  views: 7473,
  comments: [
    { author: "Jess", body: "text" },
    { author: "Jess", body: "text" },
  ],
  isLive: false,
};

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}
let post1 = new Post("a", "b", "c");

console.log(post1);

//Yelp price range
let priceRanges = [
  { lalbel: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { lalbel: "$$", tooltip: "Normal", minPerPerson: 11, maxPerPerson: 20 },
  { lalbel: "$$$", tooltip: "Epensive", minPerPerson: 21, maxPerPerson: 50 },
];
