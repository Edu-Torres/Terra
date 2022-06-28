function Circle(radius) {
  this.radius = radius;

  // Use let so it isn't accesible from outside
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    return factor ** 3;
  };
  // They are private members of the  circle object

  // To be able to read it but not write it
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  // Also a getter but its a property not a method
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    // Setters allow validation
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location dummy.");
      defaultLocation = value;
    },
  });

  this.draw = function () {
    let optimum = computeOptimumLocation(0.1);
    console.log("draw", optimum);
  };
}

const circle1 = new Circle(10);
console.log(circle1);
console.log(circle1.defaultLocation);
circle1.defaultLocation = { x: 8, y: 8 };

// Objects with getters and setters
const car = {
    tires: 4,
    brand: "Volkswagen",
    get price() {
    return this.tires * 200;
    },
    set price(value) {
        this.tires = value/200;
    }
};
car.price = 399;
console.log(car.price);
car.tires = 4
console.log(car.price);
