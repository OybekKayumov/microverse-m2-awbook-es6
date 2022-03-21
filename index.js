import { DateTime } from './node_modules/luxon/build/es6/luxon.js';
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

const timePara = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');
document.querySelector('.date').textContent = timePara;

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.classList.contains('active')) return;

    navLinks.forEach((a) => {
      a.classList.remove('active');

      link.classList.add('active');

      document.querySelector('.flex').classList.remove('flex');

      document.querySelector(`.${link.id}`).classList.add('flex');
    });
  });
});
