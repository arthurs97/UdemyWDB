var squares = document.getElementsByClassName("square");

function randomColor() {
    var colorString = "rgb(";
    colorString += Math.floor(Math.random() * 256) + ", ";
    colorString += Math.floor(Math.random() * 256) + ", ";
    colorString += Math.floor(Math.random() * 256)+ ")";

    return colorString;
}

var winningIndex = Math.floor(Math.random() * 6);
var winningColor = "";

for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = randomColor();
    if (i === winningIndex) {
        squares[i].classList.add("winner");
        winningColor = squares[i].style.backgroundColor;
    } else {
        squares[i].classList.add("loser");
    }
}

document.querySelector(".winner").addEventListener("click", function() {
    console.log("That's correct!");
});

var losers = document.querySelectorAll(".loser");

for (let i = 0; i < losers.length; ++i ) {
    losers[i].addEventListener("click", function() {
        console.log("That's incorrect!");
    });
}

var prompt = document.querySelector("p");
prompt.innerHTML = "Which square is " + winningColor + "?";
