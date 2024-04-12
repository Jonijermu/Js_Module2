'use strict'

const dogs = []

for (let i = 0; i < 6; i++) {
    const dog = prompt(`Koiran ${i+1} nimi on`);
    dogs.push(dog);
}
console.log(dogs);

dogs.sort();
dogs.reverse();

const ol = document.createElement('ol');

for (let j= 0; j < dogs.length; j++) {
    const li = document.createElement('li');
    li.textContent = dogs[j];
    ol.appendChild(li);
}

document.body.appendChild(ol);