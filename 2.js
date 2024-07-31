// Write a program to take a number from the user and print that number as Odd or Even.

const input = require("readline-sync");

let number = input.questionInt("enter the number");

if(number % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }

