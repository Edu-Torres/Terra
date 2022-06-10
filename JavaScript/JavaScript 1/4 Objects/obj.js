const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  }
};

circle.draw(); //Method, since it is part of an object

//Factory fucntion
function createCircle(radius) {
  return {
    radius, // same as radius: radius,
    draw() {
      console.log("draw");
    }
  };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1)

// Construction Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
console.log("circle3", circle3);

//Dynamic Nature of objects
const Square = {
  side: 5,
};
//const only means square cant be assigned to something differnt
//But its properties can change
Square.color = "yellow";
Square.draw = function () {
  console.log("draw");
};

delete Square.color;
console.log('Square', Square);

//Functions are objects
console.log(Circle.name);
//number of parameters
console.log(Circle.length);
//Reference thr function that was used to create an object
console.log(Circle.constructor);

//You can use a Function Constructor to create an object
//When a function is declared internally it is represented like this:
const CircleObject = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`); 

const newcircle = CircleObject(1);
console.log(newcircle);

//Methods available in functions
Circle.call({}, 1);
//Empty object {} references the object that is passed (Circle)
//Creates an empty object {} and passes it as the first argument to the call method
//Same as new Circle(1);
//If you dont use'new' this references the golbal object (window)

Circle.apply({}, [1, 2, 3]);
//pass an array [1,2,3,4,5] instead of passing the arguments explicitly 1,2,3,4,5
