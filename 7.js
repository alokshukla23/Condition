/*
Imagine you and your friends are exploring the concept of leap years. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400. In simpler terms, it's a special year with an extra day in February (February 29th). You're curious to know whether a particular year is a leap year or not.
Test Case1:
Input:
1800
Output:
No*/
const input = require("readline-sync");
let y = input.questionInt("enter the year:")

if (y % 100 != 0){
    if (y % 4 == 0) {
        console.log("Yes");
    }
     else
     {
        console.log("No");
     }
}
else if (y % 400 == 0){
    console.log("Yes");
}
else
{
    console.log("No");
}