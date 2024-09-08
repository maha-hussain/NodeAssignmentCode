// Import the calculate file in the test file: const mathOperations = require('./calculator')
const mathOperations = require('./calculate');


describe('testing the math functions', () => {
  
    // Write a test for adding 2 numbers and validate the expected results
  
    it('should add two numbers ', () => {
        const sumInput = mathOperations.sum(2,3);
        expect(sumInput).toBe(5);
    })

// Write a failing test and see what output you get

    it('should fail this test on purpose', () =>{
        const sumInput = mathOperations.sum(9,10);
        expect(sumInput).toBe(21);
    })

    // Write more test cases: for subtract and multiply

    // Testing the subtraction function

    it('should take 2 inputs and subtract the second from the first', () =>{
        const subInput = mathOperations.subtract(10,2);
        expect(subInput).toBe(8);
    })

    // Testing the multiplication function

    it('should take 2 inputs and multiply them', () =>{
        const multInput = mathOperations.multiply(5,2);
        expect(multInput).toBe(10);
    })
});

// Run the test in your terminal
// using npm test

// Observe the test results and coverage from your test cases
// using npm test -- --coverage