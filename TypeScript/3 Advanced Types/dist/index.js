"use strict";
var _a;
let employee = {
    id: 2,
    name: "Jorge",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
let textBox = {
    drag: function () { },
    resize() { },
    drop: () => { }
};
let quantity;
quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
}
greet(null);
greet("Josh");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log("customer getFullYear", (_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
console.log("Customers index 1", customers === null || customers === void 0 ? void 0 : customers[1]);
let log = null;
log === null || log === void 0 ? void 0 : log(8);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
console.log("speed", ride);
class Circle {
    constructor() {
        this.size = 4;
    }
}
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    if (document instanceof Circle) {
        document.size;
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("hello");
