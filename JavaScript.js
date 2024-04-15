'use strict'

function randomRandit(side) {
    return  Math.floor(Math.random()*side)+  1;

}

const side = parseInt(prompt('Anna nopan sovujen määrä'));

const results = [];
let result;

do {
    result = randomRandit(side);
    results.push(result);
} while (result !== side);


const ul = document.createElement('ul');

for (let j= 0; j < results.length; j++) {
    const li = document.createElement('li');
    li.textContent = `Heitto ${j+1}: tulos: ${results[j]}`
    ul.appendChild(li);
}

document.body.appendChild(ul);