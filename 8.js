//Write a program to take 3 numbers from the user and output the second max of 3 numbers.

const input = require("readline-sync");
let a = input.questionInt("enter the number:")
let b = input.questionInt("enter the number:")
let c = input.questionInt("enter the number:")

if (a > b)
{
    l = a;
    s = b;
}
else
{
    l = b;
    s = a;
}
if (l > c)
{
    l1 = l;
    s1 = c;
}
else 
{
    l1 = c;
    s1 = l;
}
if (s > s1)
{
    console.log("2max",s);
}
else 
{
    console.log("2max",s1);
}