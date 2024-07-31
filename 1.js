// Write a program to take two numbers from the user and determine the greater of those two given numbers.

const input = require("readline-sync");

function greaterNumber(a,b){
    if (a>b){
        return a;
    } else {
        return b;   
    }
}

// lets put the inputs

let a = input.questionInt("enter the value");
let b = input.questionInt("enter the value");

// now we will print the values

console.log("the greatest number", greaterNumber(a,b));