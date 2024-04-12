'use strict'

//Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.(2p)
//Save the numbers to an array, then use for-loop to iterate in reverse order.
//Do not use array.reverse() function.

const num1 = parseInt(prompt('Anna numero: '));
const num2 = parseInt(prompt('Anna numero: '));
const num3 = parseInt(prompt('Anna numero: '));
const num4 = parseInt(prompt('Anna numero: '));
const num5 = parseInt(prompt('Anna numero: '));

let numbers = [num1, num2, num3, num4, num5];
console.log(numbers);

for (let i = numbers.length -1; i >= 0; i--) {
    console.log(numbers[i]);
}