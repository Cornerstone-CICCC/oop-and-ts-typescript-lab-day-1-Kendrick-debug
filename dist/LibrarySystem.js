"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["Romance"] = 1] = "Romance";
    BookGenre[BookGenre["SciFi"] = 2] = "SciFi";
    BookGenre[BookGenre["Thriller"] = 3] = "Thriller";
    BookGenre[BookGenre["Drama"] = 4] = "Drama";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre) {
    var newBook = {
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: true
    };
    library.push(newBook);
    return newBook;
}
function borrowBook(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return "Book not found";
    bookFound.isAvailable = false;
    return "".concat(bookFound.title, " has been borrowed");
}
function returnBook(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return "Book not found";
    bookFound.isAvailable = true;
    return "".concat(bookFound.title, " has been returned");
}
function checkAvailability(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return false;
    return bookFound.isAvailable;
}
function removeBook(bookId) {
    var bookIndex = library.findIndex(function (book) { return book.bookId == bookId; });
    if (bookIndex === -1)
        return "Book not found";
    var removedBook = library.splice(bookIndex, 1)[0];
    return "".concat(removedBook.title, " has been removed from the library");
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
