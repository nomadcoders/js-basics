const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    // If the color is same as the initial one
    title.style.color = OTHER_COLOR;
  } else {
    // If the color has changed,
    // we make it into the initial one again
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClick);
init();
