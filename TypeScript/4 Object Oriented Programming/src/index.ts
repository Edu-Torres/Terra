// Class
class Account {
    // readonly id: number; // Unchangeable
    // owner: string; // public by default
    // private _balance: number;
    nickname?: string; // Optional

    constructor( // Parameter properties
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
        this.calculateTax();
    }

    private calculateTax() { // private method
        // Not accesible from an instance
    }

    // Getter
    get balance(): number {
        return this._balance;
    }

    // Setter
    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}

// Objects
let account = new Account(1, "Edu", 0);
account.deposit(100);
console.log(typeof account); // Always returns object
console.log(account instanceof Account); // Can check for a custom object is boolean
console.log(account.balance);

// Index Signature
class SeatAssignment { // Add properties dynamically
    // A1, A2, ...
    // Edu, Juan, ...
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Juan";
seats['A2'] = "Lalo";

// Static Members
class Ride {
    private static _activeRides: number = 0; // It has only one instance in memory

    static get activeRides() {
        return Ride._activeRides
    }

    start() { Ride._activeRides ++; } // This is why it cant be readonly
    stop() { Ride._activeRides --; }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// Cant modify since its private
// Ride.activeRides = 4;
console.log("Rides everywhere: ", Ride.activeRides);


// Inheritance
class Person {
    constructor(public firstName: string, public lastName: string) { }
    
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // Protected Members
    protected walk() { // Like private but accesible to children classes
        console.log('Waling');
    }
}

class Student extends Person { 
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName); // first and last can't be parameter properties
    }

    takeTest() {
        console.log('Taking a test');
        this.walk();
    }
}

let student = new Student(1, 'Johnny', 'Test');
student.takeTest();

// Method Overriding
class Teacher extends Person{
    // If I don't add a constructor I'll be extending the one from the parent class
    
    // override keyword
    // If you don't write it, the method will be disconnected from the one defined in the base class
    // set noImplicitOverride to true so you always rememeber to write it
    override get fullName() {
        // can call parent method
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher("Juan", "Torres");
console.log(teacher.fullName);


// Polymorphism
function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
// Open Closed Principle: Classes should be open for extension and closed for modification
printNames([new Person("John", "Smith"), new Teacher("Jacob", "Lautner")]);



// Abstract Classes
// So as not to be able to create an instance of Shape
abstract class Shape {
    constructor(public color: string) { }
    abstract render(): void;
}

class Circle extends Shape{
    constructor(public radius: number, color: string) { 
        super(color);
    }

    override render(): void {
        
    }
}



// Interfaces
interface Calendar { // Like abstract class, but it cannot have methods implementations only declarations
    name: string;
    addEvent(): void;
    removeEvent(): void;
}
interface CloudCalendar extends Calendar {
    sync(): void;
}
class GoogleCalendar implements Calendar {
    constructor(public name: string) { };
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}
