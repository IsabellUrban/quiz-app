const form = document.querySelector('[data-js="form"]');
const inputQuestion = document.querySelector('[data-js="your-question"]');
const inputAnswer = document.querySelector('[data-js="your-answer"]');

const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const formElements = event.target.elements;
  formElements.yourQuestion.focus();
});

// Characters Left counting

inputQuestion.addEventListener("input", (event) => {
  const numberOfCharsEntered = event.target.value.length;
  charactersLeftQuestion.textContent = 150 - numberOfCharsEntered;
});

inputAnswer.addEventListener("input", (event) => {
  const numberOfCharsEntered = event.target.value.length;
  charactersLeftAnswer.textContent = 150 - numberOfCharsEntered;
});
