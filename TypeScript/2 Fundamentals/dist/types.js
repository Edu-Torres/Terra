"use strict";
let sales = 10;
let course = 'type';
let is_published = true;
let level;
level = 1;
level = 'gl';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let empty = [];
let user = [1, "Edu"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let mySize2 = 3;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    retire(date) {
        console.log(this, date);
    }
};
employee.name = "Lalo";
employee.retire(new Date());
