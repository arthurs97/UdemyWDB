function randomColor() {
    var colorString = "rgb(";
    colorString += Math.floor(Math.random() * 256) + ", ";
    colorString += Math.floor(Math.random() * 256) + ", ";
    colorString += Math.floor(Math.random() * 256)+ ")";

    return colorString;
}

function correct() {
    console.log("That's correct!");
}

function incorrect() {
    console.log("That's incorrect!");
}

document.querySelector("#replay").addEventListener("click", function() {
    console.clear();
    generate();
});

function generate() {
    var winningIndex = Math.floor(Math.random() * 6);
    var winningColor = "";

    var squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; ++i) {
        squares[i].removeEventListener("click", correct);
        squares[i].removeEventListener("click", incorrect);
        squares[i].classList.remove("winner");
        squares[i].classList.remove("loser");

        squares[i].style.backgroundColor = randomColor();
        if (i === winningIndex) {
            squares[i].classList.add("winner");
            winningColor = squares[i].style.backgroundColor;
        } else {
            squares[i].classList.add("loser");
        }
    }

    var prompt = document.querySelector("p");
    prompt.innerHTML = "Which square is " + winningColor + "?";

    document.querySelector(".winner").addEventListener("click", correct);
    var losers = document.querySelectorAll(".loser");

    for (let i = 0; i < losers.length; ++i ) {
        losers[i].addEventListener("click", incorrect);
    }
}