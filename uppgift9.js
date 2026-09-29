// Uppgift 9 - Sammanhängande program
// Jeanette Räisänen

"use strict";

const people = [{
    name: "Lena",
    age: 71,
    city: "Gällivare"
},
{
    name: "Jessica",
    age: 51,
    city: "Södertälje"
},
{
    name: "Yosef",
    age: 11,
    city: "Tumba"
}];

function printPerson(person) {

    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig. ");
    }
    else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig. ");
    }
}

for (let i = 0; i < people.length; i = i + 1) {

    const person = people[i];
    printPerson(person);
}