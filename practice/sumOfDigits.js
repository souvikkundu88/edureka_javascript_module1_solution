/*
Sum of the digits
We want to write a program that takes an input number and displays the sum of its digits. We assume the user will enter a positive number up to four digits
*/

// sum set to 0
// take input number from user and convert to int (parseInt)
// check if number is within the range of 0 to 9999

// solution

"use strict"
const prompt = require("prompt-sync")({sigint: true});

// set sum to zero

let sum = 0;
// take a four digit input from the user, convert to int
let number = parseInt(prompt("Enter a number within the range of 0 to 9999: "));
// check if the number is within the range of 0 to 9999
if (number > 0 && number <= 9999) {
    // 1st
    sum = sum + (number % 10); // adding remainder to variable sum
    number = parseInt(number / 10); // adding quotient to the number
    // checking the remaining digits in the number
    // 2nd
    if (number > 0) {
        sum = sum + (number % 10); // adding remainder to variable sum
        number = parseInt(number / 10); // adding quotient to the number
    }
    // 3rd
    if (number > 0) {
        sum = sum + (number % 10); // adding remainder to variable sum
        number = parseInt(number / 10); // adding quotient to the number
    }
    // 4th
    if (number > 0) {
        sum = sum + (number % 10); // adding remainder to variable sum
        number = parseInt(number / 10); // adding quotient to the number
    }
console.log("Sum of digits is " + sum);
} else {
    console.log("you have entered an invalid number!");
}