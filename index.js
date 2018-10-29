const title = document.querySelector("#title");

const CLICK_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICK_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
