'use strict'

//Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and
// stops its operation and then prints all the given numbers to the console in ascending order.

const numbers = [];
let num;
do {
    num = parseInt(prompt('Sama numero lopettaa kyselyn'));
    if (numbers.includes(num)) {
        alert('Numero on jo annettu')
        break;
}
numbers.push(num);
} while (true);

numbers.sort((a, b) => a - b);
console.log(numbers);

