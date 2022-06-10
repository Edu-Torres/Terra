// function sum(...items) {
//     let total = 0;
//     for (let a of arguments)
//         total += a;
//     return total;
// }
console.log(sum([1, 4, 5, 7]))

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

const circle = {
    radius: 2,
    get area() {
        return Math.PI * (this.radius ** 2);
    }
    // Since it only has a getter it cannot be set from outside
}
console.log(circle);


function countOcurrence(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Not an array');
    return array.reduce((accum, current) => (current === searchElement) ? accum + 1 : accum, 0);
}
try {
    console.log(countOcurrence(5, 4))
}
catch (e) {
    console.log(e.message);
}






