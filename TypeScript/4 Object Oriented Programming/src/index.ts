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

    walk() {
        console.log('Walking');
    }
}

class Student extends Person { 
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName); // first and last can't be parameter properties
    }

    takeTest() {
        console.log('Taking a test');
    }
}

let student = new Student(1, 'Johnny', 'Test');