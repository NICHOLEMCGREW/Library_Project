console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

// Book
// const title = document.querySelector("bookTitle");
// const author = document.querySelector("boodAuthor");
// const releaseDate = document.querySelector("bookReleaseDate");
// const form = document.querySelector("form");
// CLASSES
//book

class Book {
   // properties: title, author, release date, in stock, has been read
    constructor(id, title, author, releaseDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
        this.inStock = true;
        this.isRead = false;
    }
}

// Library
class Library {
    // properties: how many books, list of books
    constructor() {
        // DOM SELECTIONS
        this.DOM = {
        bookContainer: document.querySelector("#library-container"),
        form: {
            self: document.querySelector("form"),
            title: document.querySelector("#bookTitle"),
            author: document.querySelector("#bookAuthor"),
            releaseDate: document.querySelector("#bookReleaseDate"),
        },
        };
        this.nextId = 0;
        this.count = 0;
        this.books = [];

        // EVENT LISTENERS
        this.DOM.form.self.addEventListener("submit", (e) =>
        this.handleFormSubmission(e)
        );
    }
  // actions: add new book, update stock, remove book  
  addBook(title, author, releaseDate) {
      let newBook = new Book(this.nextId++, title, author, releaseDate);
      this.books.unshift(newBook);
      this.count++;
      console.log(this.book);
      this.displayBooks();
  }

  handleFormSubmission(event) {
      event.preventDefault();
      console.log(this);
      this.addBook(
          this.DOM.form.title.value,
          this.DOM.form.author.value,
          this.DOM.form.releaseDate.value

      );
        // Clear input values
      this.DOM.form.title.value = "";
      this.DOM.form.author.value = "";
      this.DOM.form.releaseDate.value = "";
  }

  updatedStock(id) {}

  removeBook(id) {}

 displayBooks() {
     this.DOM.bookContainer.innerHTML = "";
     this.books.forEach((book) => {
     const card = document.createElement("div");
     card.classList.add("card");
     const h2 = document.createElement("h2");
     h2.textContent = book.title;
     const h3 = document.createElement("h3");
     h3.textContent = book.author;
     const small = document.createElement("small");
     small.textContent = book.releaseDate;
     card.append(h2, h3, small);
     this.DOM.bookContainer.appendChild(card);
 });
}
}

let Library = new Library();