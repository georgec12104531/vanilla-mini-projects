// DOM Elements

// Button
let button = document.querySelector("button");

let closeButton = document.querySelector(".close");

// Modal
let modal = document.querySelector(".modal-overlay");

// Events
button.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
