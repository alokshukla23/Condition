// Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

const input = require("readline-sync");

let a = input.questionInt("enter the input :");
let b = input.questionInt("enter the input :");
let c = input.questionInt("enter the input :");
let d = input.questionInt("enter the input :");

if (a > b)
{
    max = a;
    min = b;
}
else 
{
    max = b;
    min = a;
}
if (c > d)
{
    max1 = c;
    min1 = d;
}
else
{
    max1 = d;
    min1 = c;
}
if (max > max1)
{
    max2 = max;
    min2 = max1;
}
else
{
    max2 = max1;
    min2 = max;
    
}
if (min1 > min)
{
    max3 = min1;
    min3= min;
}
else
{
   max3 = min;
   min3 = min1; 
}
if(max3>min3)
{
    console.log(max3);
}
else
{
    console.log(min3);
}