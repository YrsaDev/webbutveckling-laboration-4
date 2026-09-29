// Uppgift 8 - Objekt
// Jeanette Räisänen

"use strict";

const book = {
    title: "The Shining",
    author: "Stephen King",
    publicationYear: 1977
};

function printBookInfo(book) {
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.publicationYear);
}

printBookInfo(book);