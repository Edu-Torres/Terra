// Generic Classes
class KeyValuePair<T, U> { // T is short for template
    constructor(public key: T, public value: U) {}
}

// You can supply the generic type argument or the compiler can imply them
const kvp = new KeyValuePair<number, string>(3, "three");


// Generic Functions
function wrapInArray<T>(value: T) {
    return [value];
}


// Generic Interfaces
interface APIResult<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): APIResult<T> {
    return { data: null, error: url };
}
// Can't call generic function without <T> so it knows the type of the result
const user = fetch<User>("http/something");
user.data?.username;
user.error?.charAt(9);

interface User {
    username: string
}


// Generic Constrains
function echo<T extends number | string | {name: string}>(value: T): T {
    console.log(value);
    return value;
}
echo('1');
echo({ name: "Juan" });
echo({ name: "Juan" , last: "Torres"}); // Extending means at the very least it must have a name property

// Keyof Operator
interface Product {
    name: string;
    price: number;
}

class Store<T> {
    // So it wont be accesible from the outside, with underscore for privates
    protected _objects: T[] = [];

    add(obj: T): void{
        this._objects.push(obj);
    }
    // We must tell the compiler we are not using index signatures (strings)
    // for the properties of T we will instead use the actual properties of T
    // If T is Product => keyof returns name or price
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value)
    }
}
let store1 = new Store<Product>();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', 1);


// Extending a Generic Class
// Passing on the generic type parameter
// The generic type parameter that we have in the base class will also be used in the child class
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>();
store.compress()

//Restricting the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    search(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// Fixing or terminanting the generic type parameter
class ProductStore extends Store<Product> { // Extends a specific type of store
    filterByCategory(category: string): Product[] {
        console.log(category);
        return [];
    }
}


// Type Mapping
type ReadOnlyProduct = {
    // Using Index Signatures and keyof
    // : type , so Product[K] will return the type of that key of Product
    readonly [K in keyof Product]: Product[K]
}

let product: ReadOnlyProduct = {
    name: 'a',
    price: 4
};

// Generalize
type ReadOnly<T> = {
    // This is like a for loop
    readonly [K in keyof T]: T[K]
}

let product1: ReadOnly<Product> = {
    name: 'a',
    price: 4
};

// Other utility types
type Optional<T> = { // This would be partial
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}
