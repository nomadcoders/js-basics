const title = document.querySelector("#title");

function handleClick(event) {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
