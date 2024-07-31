/*Write a program to take three numbers from the user and print the greater number of the three numbers. */

const input = require("readline-sync");

// lets enter the inputs

let num1 = input.questionInt("enter the input=");
let num2 = input.questionInt("enter the input=");
let num3 = input.questionInt("enter the input=");

if (num2 > num1)
{
    l = num2;
    s = num1;
} 
else 
{
    l = num1;
    s = num2;
}
if (num3 > l)
{
    console.log(num3);
}
else {
    console.log(l);
}