// Uppgift 9 - Sammanhängande program
// Jeanette Räisänen

"use strict";
// Array containing person objects
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
// Prints person information and checks if the person is an adult
function printPerson(person) {

    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig. ");
    }
    else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig. ");
    }
}
// Loops through the array and calls the function for each person
for (let i = 0; i < people.length; i = i + 1) {

    const person = people[i];
    printPerson(person);
}