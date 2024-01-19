// Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// DOM elements
let newForm = document.getElementById("newForm");
let titleInputElement = document.getElementById("title");
let authorInputElement = document.getElementById("author");
let pagesInputElement = document.getElementById("pages");
let readInputElement = document.getElementById("read");

newForm.addEventListener("submit", getInputDetail);

function getInputDetail(event) {
  event.preventDefault();
  let title = titleInputElement.value;
  let author = authorInputElement.value;
  let pages = pagesInputElement.value;
  let read = readInputElement.value;
  getNewObject(title, author, pages, read);
  newForm.reset();
}

function getNewObject(title, author, pages, read) {
  let newObject = new Book(title, author, pages, read);
  console.log(newObject);
}
