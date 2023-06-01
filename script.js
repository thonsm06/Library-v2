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
    title.style.cssText = 'color: white; font-size: 2rem;';
    author.style.cssText = 'color: white; font-size: 1.5rem;';

    title.textContent = book.title;
    author.textContent = book.author;

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    library.appendChild(bookContainer);
})

const addButton = document.createElement('button');
addButton.style.cssText = 'background-color: #44CF85; color: white; border: none; border-radius: 40px; font-size: 3rem; padding: 0 40px';
addButton.textContent = '+';

addButton.addEventListener('click', () => {
    const form = document.createElement('form');
    const labelTitle = document.createElement('label');
    const inputTitle = document.createElement('input');
    const labelAuthor = document.createElement('label');
    const inputAuthor = document.createElement('input');
    const labelPage = document.createElement('label');
    const inputPage = document.createElement('input');
    const labelRead = document.createElement('label');
    const inputRead = document.createElement('input');

    labelTitle.textContent = 'Title: ';
    labelAuthor.textContent = 'Author: ';
    labelPage.textContent = 'Page Number: ';
    labelRead.textContent = 'Read?';
    
    labelTitle.htmlFor = 'title';
    labelAuthor.htmlFor = 'author';
    labelPage.htmlFor = 'page';
    labelRead.htmlFor = 'read';

    inputTitle.type = 'text';
    inputAuthor.type = 'text';
    inputPage.type = 'text';
    inputRead.type = 'checkbox';

    inputTitle.id = 'title';
    inputAuthor.id = 'author';
    inputPage.id = 'page';
    inputRead.id = 'read';

    inputTitle.name = 'title';
    inputAuthor.name = 'author';
    inputPage.name = 'page';
    inputRead.name = 'read';

    form.append(labelTitle, inputTitle, labelAuthor, inputAuthor, labelPage, inputPage, labelRead, inputRead);
    body.appendChild(form);
})

body.appendChild(addButton);