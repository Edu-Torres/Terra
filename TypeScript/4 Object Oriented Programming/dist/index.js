"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
        this.calculateTax();
    }
    calculateTax() {
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}
let account = new Account(1, "Edu", 0);
account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Juan";
seats['A2'] = "Lalo";
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log("Rides everywhere: ", Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Waling');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
        this.walk();
    }
}
let student = new Student(1, 'Johnny', 'Test');
student.takeTest();
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher("Juan", "Torres");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([new Person("John", "Smith"), new Teacher("Jacob", "Lautner")]);
