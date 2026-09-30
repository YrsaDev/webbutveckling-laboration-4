// Uppgift 8 - Objekt
// Jeanette Räisänen

"use strict";
// Object containing information about a book
const book = {
    title: "The Shining",
    author: "Stephen King",
    publicationYear: 1977
};
// Prints information about a book
function printBookInfo(book) {
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}
// Calls the function with the book object
printBookInfo(book);