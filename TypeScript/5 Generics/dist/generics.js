"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const kvp = new KeyValuePair(3, "three");
function wrapInArray(value) {
    return [value];
}
function fetch(url) {
    return { data: null, error: url };
}
const user = fetch("http/something");
(_a = user.data) === null || _a === void 0 ? void 0 : _a.username;
(_b = user.error) === null || _b === void 0 ? void 0 : _b.charAt(9);
function echo(value) {
    console.log(value);
    return value;
}
echo('1');
echo({ name: "Juan" });
echo({ name: "Juan", last: "Torres" });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store1 = new Store();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', 1);
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
class SearchableStore extends Store {
    search(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
let product = {
    name: 'a',
    price: 4
};
let product1 = {
    name: 'a',
    price: 4
};
