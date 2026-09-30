// Uppgift 7 - Arrayer och funktioner
// Jeanette Räisänen

"use strict";
// Array containing numbers to be summed
const numbers = [1, 9, 5, 3, 7, 9];
// Calculates and returns the sum of all numbers in an array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        sum = sum + arr[i];
    }

    return sum;
}
// Calls the function and prints the result
console.log(calculateSum(numbers));