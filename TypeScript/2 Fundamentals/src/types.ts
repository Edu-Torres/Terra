let sales: number = 10;
let course: string = 'type';
let is_published = true; //type is inferred

let level; // Assumed to be of type any
level = 1;
level = 'gl';

function render(document: any) { // could be an implicit any if noImplicitAny is set to false
    console.log(document);
}

// Arrays
let numbers: number[] = [1, 2, 3];
let empty = []; // inferred as any[]

// Tuple
let user: [number, string] = [1, "Edu"];

// Enums
enum Size { Small = 1, Medium, Large } // Pascal convention
// by default { Small = 0, Medium = 1, Large = 2 }
let mySize: Size = Size.Medium;
console.log(mySize);
// if enum is defined as constant compiler will generate a more optimized code
const enum Size2 { Small = 1, Medium, Large } // Pascal convention
let mySize2: Size2 = Size2.Large;

function calculateTax(income: number, taxYear = 2022): number {
    // Optional taxYear with default, or with ? 
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
// "noUnusedParameters": true,
// "noImplicitReturns": true,
// "noUnusedLocals": true,
calculateTax(10_000, 2022);


// Objects
let employee: {
    readonly id: number,
    name?: string, 
    retire: (date: Date) => void
} = {
    id: 1, 
    retire(date: Date) {
        console.log(this, date);
}};
employee.name = "Lalo";
employee.retire(new Date());

