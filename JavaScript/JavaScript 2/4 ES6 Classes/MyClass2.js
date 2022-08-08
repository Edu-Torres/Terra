const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // Getter
  get radius() {
    return _radius.get(this)
  }

  // Setter
  set radius(value) {
    if (value <= 0) throw new Error('invalid radius')
    _radius.set(this, value);
  }
}
const c = new Circle(3);
console.log(c);

// Inheritance
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}

class Triangle extends Shape {
  constructor(color, side){
    super(color);
    this.side = side;
  }
  draw() {
    console.log('draw');
  }
  // Override method
  move() {
    console.log('triangle move');
    super.move();
  }
}

const t = new Triangle('red', 2);
console.log(t);


















