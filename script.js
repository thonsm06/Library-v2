const body = document.querySelector('body');
const mainContainer = document.createElement('div'); //holds everything inside the body
const header = document.createElement('div');
const library = document.createElement('div');       //holds main content

mainContainer.classList.toggle('main-container');
header.classList.toggle('header');
library.classList.toggle('library');

let myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(title, author, page, read) {
    const book = new Book(title, author, page, read);
    myLibrary.push(book);
}

addBookToLibrary('Think Like a Programmer', 'V. Anton Spraul', '233', 'true');
addBookToLibrary('Lord of the Rings', 'J.R.R. Tolkien', '1178', 'false');
addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '309', 'false');

myLibrary.forEach(book => {
    const bookContainer = document.createElement('div'); //hold individual book contents
    const title = document.createElement('p');
    const author = document.createElement('p');
    const page = document.createElement('p');
    const read = document.createElement('p');

    bookContainer.classList.toggle('book');
    title.classList.toggle('title');
    author.classList.toggle('author');
    page.classList.toggle('page');
    read.classList.toggle('read');
    
    title.textContent = book.title;
    author.textContent = book.author;
    page.textContent = book.page;

    bookContainer.append(title, author, page, read);

    library.appendChild(bookContainer);
})

const addButton = document.createElement('button');
addButton.classList.toggle('addBtn');
addButton.style.cssText = 'background-color: #44CF85; color: white; border: none; border-radius: 40px; font-size: 3rem; padding: 0 40px';
addButton.textContent = '+';

addButton.addEventListener('click', event => {
    const form = document.createElement('form');
    const labelTitle = document.createElement('label');
    const inputTitle = document.createElement('input');
    const labelAuthor = document.createElement('label');
    const inputAuthor = document.createElement('input');
    const labelPage = document.createElement('label');
    const inputPage = document.createElement('input');
    const labelRead = document.createElement('label');
    const inputRead = document.createElement('input');
    const submitButton = document.createElement('button');

    labelTitle.textContent = 'Title: ';
    labelAuthor.textContent = 'Author: ';
    labelPage.textContent = 'Page Number: ';
    labelRead.textContent = 'Read?';
    submitButton.textContent = 'ADD';

    labelTitle.htmlFor = 'title';
    labelAuthor.htmlFor = 'author';
    labelPage.htmlFor = 'page';
    labelRead.htmlFor = 'read';

    inputTitle.type = 'text';
    inputAuthor.type = 'text';
    inputPage.type = 'text';
    inputRead.type = 'checkbox';
    submitButton.type = 'submit';

    inputTitle.id = 'title';
    inputAuthor.id = 'author';
    inputPage.id = 'page';
    inputRead.id = 'read';

    inputTitle.name = 'title';
    inputAuthor.name = 'author';
    inputPage.name = 'page';
    inputRead.name = 'read';

    form.append(labelTitle, inputTitle, labelAuthor, inputAuthor, labelPage, inputPage, labelRead, inputRead, submitButton);
    body.appendChild(form);

    event.preventDefault();
})


header.appendChild(addButton);
mainContainer.append(header, library);
body.appendChild(mainContainer);
