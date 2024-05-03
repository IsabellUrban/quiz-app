const bookmark1 = document.querySelector("[data-js=bookmark1]");
const bookmarkImg1 = document.querySelector("[data-js=img1]");

const bookmark2 = document.querySelector("[data-js=bookmark2]");
const bookmarkImg2 = document.querySelector("[data-js=img2]");

const bookmark3 = document.querySelector("[data-js=bookmark3]");
const bookmarkImg3 = document.querySelector("[data-js=img3]");

const answerButton = document.querySelector('[data-js="answerButton"]');

bookmark1.addEventListener("click", () => {
  bookmark1.classList.toggle("bookmark-selected");
  if (bookmark1.classList.contains("bookmark-selected")) {
    bookmarkImg1.src = "assets/lightning-297608.svg";
  } else {
    bookmarkImg1.src = "assets/lightning-303595.svg";
  }
});

bookmark2.addEventListener("click", () => {
  bookmark2.classList.toggle("bookmark-selected");
  if (bookmark2.classList.contains("bookmark-selected")) {
    bookmarkImg2.src = "assets/lightning-297608.svg";
  } else {
    bookmarkImg2.src = "assets/lightning-303595.svg";
  }
});

bookmark3.addEventListener("click", () => {
  bookmark3.classList.toggle("bookmark-selected");
  if (bookmark3.classList.contains("bookmark-selected")) {
    bookmarkImg3.src = "assets/lightning-297608.svg";
  } else {
    bookmarkImg3.src = "assets/lightning-303595.svg";
  }
});

answerButton.addEventListener("click", () => {
  const answer = answerButton.previousElementSibling;
  answer.classList.toggle("visible");
  answer.classList.toggle("answer");
  if (answer.classList.contains("visible")) {
    answerButton.textContent = "HIDE ANSWER";
  } else {
    answerButton.textContent = "SHOW ANSWER";
  }
});
