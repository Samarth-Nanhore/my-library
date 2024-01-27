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
  getNewCardUI(validLibrary);
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

let createCard = (title, author, pages, read, idValue) => {
  oneCard = document.createElement("div");
  oneCard.classList.add("card"); // from style css
  oneCard.id = idValue;
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
  readValue.id = idValue;
  readContainer.appendChild(readValue);

  titleValue.textContent = `${title}`;
  authorValue.textContent = `${author}`;
  pageValue.textContent = `${pages} Pages`;
  readValue.textContent = `${read}`;

  createRemoveBtn(idValue);
  createStatusBtn(idValue);
};

const getNewCardUI = (libraryArray) => {
  let title = libraryArray[libraryArray.length - 1].title;
  let author = libraryArray[libraryArray.length - 1].author;
  let pages = libraryArray[libraryArray.length - 1].pages;
  let read = libraryArray[libraryArray.length - 1].read;
  let idValue = libraryArray[libraryArray.length - 1].id;

  createCard(title, author, pages, read, idValue);
};

const createRemoveBtn = (idValue) => {
  let removeBtn = document.createElement("div");
  removeBtn.textContent = "Remove";
  removeBtn.id = `${idValue}`;
  btnContainer.appendChild(removeBtn);
  removeBtn.addEventListener("click", getRemoveElement);
};

const createStatusBtn = (idValue) => {
  let statusBtn = document.createElement("div");
  statusBtn.textContent = "Change Status";
  statusBtn.id = `${idValue}`;
  btnContainer.appendChild(statusBtn);
  statusBtn.addEventListener("click", changeStatus);
};

function getRemoveElement(event) {
  let elementId = event.target.id;
  let everyCardsElements = document.querySelectorAll(
    "div.cards-container > div.card"
  );

  everyCardsElements.forEach((card) => {
    if (card.id === elementId) {
      card.remove();
    }
  });
}

function changeStatus(event) {
  let elementId = event.target.id;
  let everyRead = document.querySelectorAll(
    "div.cards-container > div.card > div:nth-child(4) > p:nth-child(2)"
  ); // select values of read

  everyRead.forEach((read) => {
    if (read.id === elementId) {
      if (read.textContent === "Yes") {
        read.textContent = "No";
      } else if (read.textContent === "No") {
        read.textContent = "Yes";
      }
    }
  });
}
