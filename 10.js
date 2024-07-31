/* Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill */

const input = require('readline-sync');

let unit = input.questionInt("enter the unit :");

if (unit <= 50) 
{
    A = unit * 0.5
    SC = A * 20 / 100
    BILL = A + SC
}
else if (unit <= 150)
{
    A = 50 * 0.5
    q = unit - 50 * 0.75
    A = p + q
    SC = A * 20 / 100
    BILL = A + SC
}
else if (unit <= 250)
{
    p = 50 * 0.5
    q = 100 * 0.75
    r = (unit - 150) * 1.2
    A = p + q + r
    SC = A * 20 / 100
    BILL = A + SC
}
else 
{
    p = 50 * 0.5
    q = 100 * 1.2
    r = 100 * 1.2
    s = (u - 250) * 1.5
    A = p + q + r + s
    SC = A * 20 / 100
    BILL = A + SC
} 
{
    console.log(BILL);
}