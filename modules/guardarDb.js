import { showBooks } from './showBooks.js';

const guardarDb = (arrayOfBooks) => {
  localStorage.setItem('arrayOfBooks', JSON.stringify(arrayOfBooks));
  showBooks(JSON.parse(localStorage.getItem('arrayOfBooks')));
};

export default guardarDb;
