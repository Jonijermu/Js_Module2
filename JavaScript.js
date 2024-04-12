'use strict'

//Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice, which is asked from the user at the beginning.

function randomRandit() {
    return Math.floor(Math.random()*6)+  1;

}

console.log(randomRandit());

const results = [];
let result;

do {
    result = randomRandit();
    results.push(result);
} while (result !== 6);


const ul = document.createElement('ul');

for (let j= 0; j < results.length; j++) {
    const li = document.createElement('li');
    li.textContent = `Heitto ${j+1}: tulos: ${results[j]}`
    ul.appendChild(li);
}

document.body.appendChild(ul);