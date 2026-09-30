// Uppgift 3 - Villkor
// Jeanette Räisänen

"use strict";

const age = 71;
// Checks the age and prints the corresponding age group
if (age < 18) {
    console.log("Barn");
}
else if (age < 65) {
    console.log("Vuxen");
}
else {
    console.log("Pensionär");
}