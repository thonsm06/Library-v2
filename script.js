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
    const temp_title = title.toLowerCase();
    let match = false;
    for(let i = 0; i < myLibrary.length; i++) {
        if (temp_title !== myLibrary[i].title.toLowerCase()) {
            continue; //keep running the loop until the end
        } else {return match = true};
    }
    if(match === false){                                  //if match stays false after the loop
        const book = new Book(title, author, page, read); //create the book object
        myLibrary.push(book);                             //add to library array
        createBookContainer(book);                        //create book DOM
    }
}

function createBookContainer(book) {
    const bookContainer = document.createElement('div'); //hold individual book contents
    const title = document.createElement('p');
    const author = document.createElement('p');
    const page = document.createElement('p');
    const read = document.createElement('p');
    const removeButton = document.createElement('button');

    bookContainer.classList.toggle('book');
    removeButton.classList.toggle('button-remove');
    title.classList.toggle('title');
    author.classList.toggle('author');
    page.classList.toggle('page');
    read.classList.toggle('read');

    title.textContent = book.title;
    author.textContent = book.author;
    page.textContent = book.page;
    removeButton.textContent = "x";

    removeButton.addEventListener('click', event => {
        bookContainer.remove();
    })

    bookContainer.append(title, author, page, read, removeButton);

    library.appendChild(bookContainer);
}

const addButton = document.createElement('button');
addButton.classList.toggle('add-button');
addButton.textContent = '+';

let formOpen = false;
addButton.addEventListener('click', event => {
    if (formOpen === false) {
        formOpen = true;
        const form = document.createElement('form');
        const divTitle = document.createElement('div');
        const labelTitle = document.createElement('label');
        const inputTitle = document.createElement('input');
        const divAuthor = document.createElement('div');
        const labelAuthor = document.createElement('label');
        const inputAuthor = document.createElement('input');
        const divPage = document.createElement('div');
        const labelPage = document.createElement('label');
        const inputPage = document.createElement('input');
        const divRead = document.createElement('div');
        const labelRead = document.createElement('label');
        const inputRead = document.createElement('input');

        form.classList.toggle('form');

        labelTitle.textContent = 'Title ';
        labelAuthor.textContent = 'Author ';
        labelPage.textContent = 'Page Number ';
        labelRead.textContent = 'Read';

        labelTitle.htmlFor = 'title';
        labelAuthor.htmlFor = 'author';
        labelPage.htmlFor = 'page';
        labelRead.htmlFor = 'read';

        inputTitle.required = true;
        
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

        inputTitle.focus();
        inputTitle.select();
        console.log(inputTitle);
        const divButton = document.createElement('div');
        const submitForm = document.createElement('button');
        submitForm.textContent = 'ADD';
        submitForm.type = 'submit';
        submitForm.addEventListener('click', event => {
            if (inputTitle.value != "") {
                addBookToLibrary(inputTitle.value, inputAuthor.value, inputPage.value, inputRead.value);
                inputTitle.value = '';
                inputAuthor.value = '';
                inputPage.value = '';
                inputRead.checked = false;
                
            }
            event.preventDefault();
        });

        const resetForm = document.createElement('button');
        resetForm.textContent = 'Reset';
        resetForm.type = 'reset';
        resetForm.addEventListener('click', event => {
            
        })

        divTitle.append(labelTitle, inputTitle);
        divAuthor.append(labelAuthor, inputAuthor);
        divPage.append(labelPage, inputPage);
        divRead.append(labelRead, inputRead);
        divButton.append(submitForm, resetForm);
        form.append(divTitle, divAuthor, divPage, divRead, divButton);
        header.appendChild(form);
    } else {
        formOpen = false;
        const form = document.querySelector('form');
        form.remove();
    }

})

/* body.addEventListener('click', () => {
    if (formOpen === true) {
        formOpen = false;
        const form = document.querySelector('form');
        form.remove();
    }
}) */

header.appendChild(addButton);
mainContainer.append(header, library);
body.appendChild(mainContainer);

addBookToLibrary('Think Like a Programmer', 'V. Anton Spraul', '233', 'true');
addBookToLibrary('Lord of the Rings', 'J.R.R. Tolkien', '1178', 'false');
addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '309', 'false');

