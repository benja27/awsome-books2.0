import guardarDb from './guardarDb.js';

export const deleteBook = (id) => {
  const arrayOfBooks = JSON.parse(localStorage.getItem('arrayOfBooks'));
  arrayOfBooks.splice(id, 1);
  guardarDb(arrayOfBooks);
};

export default deleteBook;