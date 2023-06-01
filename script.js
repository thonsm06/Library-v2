const body = document.querySelector('body');
const library = document.createElement('div');

library.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 20%)); gap: 32px;';

body.appendChild(library);

let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    myLibrary.push(book);
}

addBookToLibrary('Think Like a Programmer', 'V. Anton Spraul');
addBookToLibrary('Lord of the Ring', 'J. R. R. Tolkien');

myLibrary.forEach(book => {
    const bookContainer = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');

    bookContainer.style.cssText = 'background-color: rgb(0, 0, 0, 0.2); border: 3px solid black; border-radius: 10px; text-align: center';
    title.style.cssText = 'color: white; font-size: 24px;';
    author.style.cssText = 'color: white; font-size: 18px;';

    title.textContent = book.title;
    author.textContent = book.author;

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    library.appendChild(bookContainer);
})

console.log(myLibrary)