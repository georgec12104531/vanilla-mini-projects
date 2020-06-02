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

// Close modal when the 
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    modal.style.display = "none";
  }
});
