const lib = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw an exception if input is not a number', () => {
        expect(() => { lib.fizzBuzz('a') }).toThrow();
        expect(() => { lib.fizzBuzz(null) }).toThrow();
        expect(() => { lib.fizzBuzz(undefined) }).toThrow();
        expect(() => { lib.fizzBuzz({}) }).toThrow();
        expect(() => { lib.fizzBuzz() }).toThrow();
    });
    
    it('should return FizzBuzz if input is dividsible by 3 and 5', () => {
        expect(lib.fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if input is dividsible only by 3', () => {
        expect(lib.fizzBuzz(6)).toBe('Fizz');
    });

    it('should return Buzz if input is dividsible only by 10', () => {
        expect(lib.fizzBuzz(10)).toBe('Buzz');
    });

    it('should return input if it is not dividsible by 3 nor 5', () => {
        expect(lib.fizzBuzz(1)).toBe(1);
    });
});