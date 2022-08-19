type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 2,
    name: "Jorge",
    retire: (date: Date) => {
        console.log(date);
    } 
}

// Union
function kgToLbs(weight: number | string): number {
    //Narrowing  , allows for accesing methods and attributes of a specific type
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));

// Type Alias
type Draggable = {
    drag: () => void
    drop: () => void
};
type Resizable = {
    resize: () => void
};
// Intersection
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: function() { },
    resize() { },
    drop: () => { }
}

// Literals (exact or specific value)
let quantity: 50 | 100;
quantity = 50;
// Literal Type
type Metri = 'cm' | 'inch';

// Nullable
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
}
// strictNullChecks option
greet(null);
greet("Josh");

// Optional Chaining
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}
let customer = getCustomer(0);
// Optional property acess operator (?) executed only if it exists
// Here it prints undefined
console.log("customer getFullYear", customer?.birthday?.getFullYear());

// Optional element access operator
let customers: Customer[] = [];
console.log("Customers index 1", customers?.[1]);

// Optional call operator
let log: any = null;
log?.(8); // If it were a function it would be called

// Nullish Coaelscing Operator (??) 
// If it isn't undefined or null use otherwise use the default
let speed: number | null = null;
let ride = {
    // cant use falsy since 0 is falsy
    speed: speed ?? 30 
}
console.log("speed", ride)

// // Type Assertion
// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone2 = <HTMLInputElement> document.getElementById("phone");
// phone.value; // Just to tell the compiler we know more about the type of the object

// Unknown Type
class Circle { size = 4 }
function render(document: unknown) { // like any but without the liberties
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    if (document instanceof Circle) {
        document.size
    }
}

// Never Type
function processEvents(): never {
    while (true) {
        // function never returns
    }
}
processEvents()
console.log("hello") // allowUnreachableCode option , if false this line would be error


