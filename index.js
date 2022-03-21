import Books from './modules/class.js';
import renderBooks from './modules/manage.js';

const form = document.querySelector('.form');

const booksList = new Books();

renderBooks(booksList);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;

  form.title.value = '';
  form.author.value = '';

  booksList.addBook({ title, author });
  renderBooks(booksList);
});
