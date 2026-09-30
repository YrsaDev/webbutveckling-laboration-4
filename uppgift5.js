// Uppgift 5 - Arrayer
// Jeanette Räisänen

"use strict";

const food = ["halloumipasta", "bönburgare", "bönsallad", "quornlasagne", "pizza"];
// Prints the array, first element and last element
console.log(food);
console.log(food[0]);
console.log(food[4]);
// Adds a new dish and removes the first dish
food.push("falafel");
food.shift();
// Prints the updated array
console.log(food);