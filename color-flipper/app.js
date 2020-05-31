let automatic = false;
let interval;

// DOM Elements
let button = document.querySelector(".button"),
  background = document.querySelector(".main-container"),
  color = document.querySelector("#color"),
  auto = document.querySelector("#auto");

// Events
button.addEventListener("click", () => {
  if (automatic) {
    backgroundGeneratorTimer();
  }
  setNewBackgroundColor();
});

auto.addEventListener("click", () => {
  backgroundGeneratorTimer();
});

// Functions
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setNewBackgroundColor() {
  let newBackgroundColor = getRandomColor();
  background.style.backgroundColor = newBackgroundColor;
  color.textContent = newBackgroundColor;
}

function backgroundGeneratorTimer() {
  if (!automatic) {
    automatic = true;
    interval = setInterval(() => {
      setNewBackgroundColor();
    }, 1000);
    interval();
  } else {
    automatic = false;
    clearInterval(interval);
  }
}
