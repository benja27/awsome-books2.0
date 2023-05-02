// import variables
import { addBook } from './modules/addBook.js';
import { showBooks } from './modules/showBooks.js';
import { deleteBook } from './modules/deleteBook.js';
import { dateTime } from './modules/setDateTime.js';
import { spa } from './modules/spa.js';

// general variables
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
  };
  addBook(book);
  form.reset();
});

window.document.addEventListener('DOMContentLoaded', () => {
  spa();
  dateTime();

  setInterval(() => {
    dateTime();
  }, 1000);

  let arrayOfBooks = [];
  if (localStorage.getItem('arrayOfBooks')) {
    arrayOfBooks = JSON.parse(localStorage.getItem('arrayOfBooks'));
  }
  showBooks(arrayOfBooks);
});

document.getElementById('container').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const { id } = e.target.dataset;
    deleteBook(id);
  }
});
