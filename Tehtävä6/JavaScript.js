'use strict'

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