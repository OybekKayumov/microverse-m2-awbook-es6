export default class Books {
  constructor() {
    this.list = localStorage.getItem('booksList')
      ? localStorage.getItem('booksList')
      : [];
  }

  addBook(book) {
    this.list.push(book);

    localStorage.setItem('bookList', JSON.stringify(this.list));
  }

  removeBook(title) {
    this.list = this.list.filter((book) => book.title !== title);

    localStorage.setItem('bookList', JSON.stringify(this.list));
  }
}
