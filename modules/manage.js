const renderBooks = (booksList) => {
  const listItem = document.querySelector('.books-list');
  listItem.innerHTML = '';

  booksList.list.forEach((book) => {
    listItem.innerHTML += `
        <li>
          <p>
            "<span class="title">${book.title}</span>" by ${book.author}
          </p>
          <button class="remBtn">Remove</button>
        </li>

    `;
  });

  const remBtns = document.querySelectorAll('.remBtn');
  remBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const elem = btn.parentNode;
      const bookTitle = elem.querySelector('.title').textContent;
      booksList.removeBook(bookTitle);
      elem.remove();
    });
  });
};

export default renderBooks;