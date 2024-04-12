'use strict'

const participants = parseInt(prompt('how many partícipants?'));

const names = [];

for (let i = 0; i < participants; i++) {
    const name = prompt('name of the participant');
    names.push(name);
}
console.log(names)

names.sort();

const ol = document.createElement('ol');

for (let j= 0; j < names.length; j++) {
    const li = document.createElement('li');
    li.textContent = names[j];
    ol.appendChild(li);
}

document.body.appendChild(ol);
