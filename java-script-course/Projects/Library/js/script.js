let bookList = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = (read === true || read === "true");

}

function addBooktoLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  bookList.push(newBook);
  return newBook;
}

function displayBooks() {

  const container = document.getElementById("book-display-container");
  const ul = document.createElement("ul");
  container.innerHTML ="";
  bookList.map( (book) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>ID ${book.id}:</strong>  // ${book.title} ${book.author} ${book.read}
      `;
    ul.appendChild(li);
  })
  
  container.appendChild(ul);
}
let button = document.querySelector("button")
button.addEventListener("click", () => {
    let newBookData = prompt("tilte, author, pages, read").split(", ");
    addBooktoLibrary(...newBookData);
    displayBooks();
});

let theHobbit = addBooktoLibrary("The Hobbit", "J.R.R. Tolkien", 456, true);
let atomicHabits = addBooktoLibrary("Atomic Habits", "James Clear", 400, true);
let classroomOfTheElite = addBooktoLibrary("Classroom of the Elite", "Kinugasa", 360, true);

console.log(bookList);

displayBooks();
