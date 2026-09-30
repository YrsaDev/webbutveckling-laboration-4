// Uppgift 2 - Operatorer och beräkningar
// Jeanette Räisänen

"use strict";

// Variables for price, quantity, total and VAT
const price = 100;
const quantity = 3;
const total = price * quantity;
const totalWithVat = total + total * 0.25;
// Prints price, quantity and totals
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + total + " kr");
console.log("Totalt inklusive moms: " + totalWithVat + " kr");