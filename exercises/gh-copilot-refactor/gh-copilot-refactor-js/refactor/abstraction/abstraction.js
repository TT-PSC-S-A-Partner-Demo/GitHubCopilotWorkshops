class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

const books = [];

function addBook(book) {
  books.push(book);
}

function getBook(id) {
  return books.find((book) => book.id === id) || null;
}

function getAllBooks() {
  return books;
}

addBook(new Book(1, "Book 1", "Author 1"));
addBook(new Book(2, "Book 2", "Author 2"));

console.log(getAllBooks());
console.log(getBook(1));
