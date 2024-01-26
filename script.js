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
let library = [];

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
  addNewObjectInArray(newObject);
}

function addNewObjectInArray(object) {
  library.push(object); // array
  let validLibrary = updateObject(library);
  console.log(validLibrary);
}

let updateObject = (arr) => {
  return arr.map((book, index) => {
    return { id: index + 1, ...book };
  });
};

//DOM target variable
const cardContainerElement = document.querySelector("div.cards-container");

// DOM createElement variable
let oneCard;
let titleContainer;
let authorContainer;
let pageContainer;
let readContainer;
let btnContainer;

let titleValue;
let authorValue;
let pageValue;
let readValue;

let createCard = () => {
  oneCard = document.createElement("div");
  oneCard.classList.add("card"); // from style css
  cardContainerElement.appendChild(oneCard);

  titleContainer = document.createElement("div");
  authorContainer = document.createElement("div");
  pageContainer = document.createElement("div");
  readContainer = document.createElement("div");
  btnContainer = document.createElement("div");
  btnContainer.classList.add("card-btn");

  oneCard.appendChild(titleContainer);
  oneCard.appendChild(authorContainer);
  oneCard.appendChild(pageContainer);
  oneCard.appendChild(readContainer);
  oneCard.appendChild(btnContainer);

  titleContainer.innerHTML = "<p>Title:</p>";
  titleValue = document.createElement("p");
  titleContainer.appendChild(titleValue);

  authorContainer.innerHTML = "<p>Author:</p>";
  authorValue = document.createElement("p");
  authorContainer.appendChild(authorValue);

  pageContainer.innerHTML = "<p>Pages:</p>";
  pageValue = document.createElement("p");
  pageContainer.appendChild(pageValue);

  readContainer.innerHTML = "<p>Have you read it?</p>";
  readValue = document.createElement("p");
  readContainer.appendChild(readValue);
};
