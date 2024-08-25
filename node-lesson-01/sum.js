/* ‘Simple mathematics’ program in node.js */
console.log("Assignment1: Sum of two numbers in Node.js"+"\n");

//fetch arguments passed to CLI
 const myArgv = process.argv.slice(2);
// console.log(myArgv);

//Store args in vars
var numOne = parseInt(myArgv[0]);
var numTwo = parseInt(myArgv[1]);

//sum the vars
 var sum = numOne + numTwo;

//print to console answer

//using double quotes
console.log(numOne +" plus " + numTwo + " is " + sum + " :D"+"\n");

//using backticks
console.log(`${numOne} plus ${numTwo} is ${sum} :D`);