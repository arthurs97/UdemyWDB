var toggle = false;

var button = document.querySelector("button");

function changeColor() {
	button.style.backgroundColor = toggle ? "white" : "purple";
	toggle = !toggle;
}

button.addEventListener("click", changeColor);