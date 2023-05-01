import guardarDb from './guardarDb.js';

export const addBook = (book) => {
  let arrayOfBooks = [];
  if (localStorage.getItem('arrayOfBooks')) {
    arrayOfBooks = JSON.parse(localStorage.getItem('arrayOfBooks'));
  }
  arrayOfBooks.push(book);
  guardarDb(arrayOfBooks);
};

export default addBook;