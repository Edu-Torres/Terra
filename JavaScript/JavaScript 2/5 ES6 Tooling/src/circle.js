export class Moons {
    constructor(diameter) {
      privateProps.set(this, {
        diameter: diameter,
        movement: () => {
          console.log('movement', this);
        }
      });
      this.draw = function () {
        console.log('draw');
        privateProps.get(this).diameter = 9
        console.log('diameter', privateProps.get(this).diameter);
        privateProps.get(this).movement();
      }
    }
  }