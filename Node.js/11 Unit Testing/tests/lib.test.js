const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');
// To continually run tests, put in package.json
// "scripts": {
//     "test": "jest --watchAll"
//   },

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        // toBe is a matcher function
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return a 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Edu');
        // expect(result).toBe('Welcome Edu'); // don't make text to specific
        expect(result).toMatch(/Edu/);
        expect(result).toContain('Edu');
    });
});

// Arrays
describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        // Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);
        
        // Proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
        // They can come in any order
    });
});

// Objects
describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // toBe compares the references in memory, so we should use toEqual
        expect(result).toEqual({ id: 1, price: 10 });
        // toMatchObject only requires the object to have these categories, it could have more
        expect(result).toMatchObject({ id: 1, price: 10 });
        // It should have that one property
        expect(result).toHaveProperty('id', 1);
    });
});

// Exceptions
describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach((a) => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });

    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('Edu');
        expect(result).toMatchObject({ username: 'Edu' });
        expect(result.id).toBeGreaterThan(0);
    });
});

// Mock a function
describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 10 points', () => {
        db.getCustomerSync = function (customerId) { // Fake or mock function
            console.log('Fake reading customer')
            return { id: customerId, points: 20 }
        }
        const order = { customerId: 1, totalPrice: 10 }
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9)
    });
});

// Proper mock function
describe('notifyCustomer', () => {
    // When we load a module(require) it is cached, so there is only one instance in memory
    // An instance that we can rewrite
    it('should send an email to the customer', () => {
        // const mockFunction = jest.fn();
        // mockFunction.mockReturnValue(1);
        // mockFunction.mockResolvedValue(1);
        // mockFunction.mockRejectedValue(new Error('...'));

        db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
        mail.send = jest.fn();

        lib.notifyCustomer({ customerId: 1 });

        // expect(mail.send).toHaveBeenCalled();
        expect(mail.send).toHaveBeenCalledWith('a', 'Your order was placed successfully.');
        expect(mail.send.mock.calls[0][1]).toMatch(/order/); // of the first call, the second arg
    });
});