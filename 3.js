// Write a program to take a number from the user and output whether that number is negative, positive or zero.
const input = require('readline-sync');

let N = input.questionInt("enter the number");

if (N > 0){
    console.log("positive");
} else if (N == 0){
    console.log("zero");
} else {
    console.log("negetive")
}