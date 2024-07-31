// Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

const input = require("readline-sync");

//lets take the input

let N = input.questionInt("enter the number");

if (N % 2 == 0){
    console.log(N);
} else {
    console.log(N * 2);
}