// Write a program to take four numbers from the user and print the greater number of the four numbers. 

const input = require("readline-sync");

// lets enter the inputs

let num1 = input.questionInt("enter the input:");
let num2 = input.questionInt("enter the input:");
let num3 = input.questionInt("enter the input:");
let num4 = input.questionInt("enter the input:");

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

if (num3 > num4)
{
    l1 = num3;
    s1 = num4;
} 
else
{
    l1 = num4;
    s1 = num3;
}
if ( l>l1)
{
    console.log(l);
}
else
{
    console.log(l1);
}