const form = document.querySelector('[data-js="form"]');
const inputQuestion = document.querySelector('[data-js="your-question"]');
const inputAnswer = document.querySelector('[data-js="your-answer"]');

const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);
const main = document.querySelector('[data-js="form-main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const formElements = event.target.elements;
  formElements.yourQuestion.focus();
});

// Characters Left counting

function handleTextFieldInput(event, charactersLeftQuestion) {
  charactersLeftQuestion.textContent =
    event.target.getAttribute("maxlength") - event.target.value.length;
}

inputQuestion.addEventListener("input", (event) => {
  handleTextFieldInput(event, charactersLeftQuestion);
});

inputAnswer.addEventListener("input", (event) => {
  handleTextFieldInput(event, charactersLeftAnswer);
});

// Create new Card

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("sanity check");

  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.setAttribute("data-js", "card");

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("bookmark", "bookmark-selected");
  newBookmarkButton.setAttribute("data-js", "bookmark1");
  newBookmarkButton.innerHTML = `
  <img
  src="assets/lightning-297608.svg"
  alt="lighting bolt"
  data-js="img1"/>
  `;

  const newImg = newBookmarkButton.querySelector("img");
  newBookmarkButton.addEventListener("click", () => {
    newImg.classList.toggle("bookmark-selected");
    if (newImg.classList.contains("bookmark-selected")) {
      newImg.src = "assets/lightning-303595.svg";
    } else {
      newImg.src = "assets/lightning-297608.svg";
    }
  });
  newCard.append(newBookmarkButton);

  const newQuestionID = "new-question-";

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("question-fonts");
  newQuestion.textContent = inputQuestion.value;
  newCard.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer", "visible");
  newAnswer.textContent = inputAnswer.value;
  newCard.append(newAnswer);

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("button");
  newAnswerButton.textContent = "SHOW ANSWER";
  newCard.append(newAnswerButton);

  // newAnswerButton.addEventListener("click", () => {
  //   const answer = newAnswerButton.previousElementSibling;
  //   answer.classList.toggle("visible");
  //   answer.classList.toggle("answer");
  //   if (answer.classList.contains("visible")) {
  //     answerButton.textContent = "HIDE ANSWER";
  //   } else {
  //     answerButton.textContent = "SHOW ANSWER";
  //   }

  main.append(newCard);

  inputQuestion.value = "";
  inputAnswer.value = "";
});
