let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    myLibrary[0] = book;
}

addBookToLibrary('lotr', 'j.r.r token');

console.log(myLibrary);