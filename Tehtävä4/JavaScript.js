'use strict'

const numbers = [];

let num;
do {
    num = parseInt(prompt('Anna numeroita. numero 0 lopettaa kyselyn'));
    numbers.push(num);
} while (num !== 0);

numbers.sort((a, b) => b -a);
console.log(numbers);



