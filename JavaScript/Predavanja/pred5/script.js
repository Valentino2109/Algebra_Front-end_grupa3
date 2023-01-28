`use strict`;

const addBtn = document.querySelector("#btn-add");
const input = document.getElementById(`new-item`);
const resultList = document.querySelector(`#list`);

const handleDelete = (e) => {
  // idi na parenta koji je p i ukloni ga tako da sve nestane (input, text, button)
  const clickedBtn = e.target;
  const paragraphForDeletion = clickedBtn.parentElement;
  paragraphForDeletion.remove();
};

const handleStrikeToogle = (e) => {
  const changedCheckbox = e.target;
  const spanTextElement = changedCheckbox.nextElementSibling;
  spanTextElement.classList.toggle(`striked`);
};

// Funkcija
const handleItemAdd = () => {
  // dohvati text iz input-a
  // PAZI
  // 1. - da nije prazan text
  // 2. - da nisu samo razmaci i slicno
  const newItemText = input.value.trim();
  if (newItemText.length === 0) {
    alert(`Wrong input!`);
    return;
  }

  // pravimo: <input type="checkbox" />
  const checkbox = document.createElement(`input`);
  checkbox.setAttribute(`type`, `checkbox`);
  checkbox.addEventListener(`change`, handleStrikeToogle);

  // pravimo: <span>{TEXT}</span>
  const textSpan = document.createElement(`button`);
  textSpan.innerText = newItemText;

  // pravimo: <button>X</button>
  const deleteBtn = document.createElement(`button`);
  deleteBtn.innerText = `X`;
  deleteBtn.addEventListener(`click`, handleDelete);

  const newParagraph = document.createElement(`p`);
  newParagraph.appendChild(checkbox);
  newParagraph.appendChild(textSpan);
  newParagraph.appendChild(deleteBtn);

  resultList.appendChild(newParagraph);

  input.value = ``;
};

addBtn.addEventListener(`click`, handleItemAdd);
