var maxScore = Number(prompt("What are you playing to?"));

var score = document.querySelector('h1');
var playingTo = document.querySelector('p');
playingTo.innerHTML = "Playing to " + maxScore;

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var reset = document.getElementById('reset');

var p1Score = 0;
var p2Score = 0;

p1.addEventListener("click", function() {
	p1Score++;
	score.innerHTML = p1Score + " to " + p2Score;

	if (p1Score === maxScore) {
		alert("Game over! Player 1 wins.");
	}
})

p2.addEventListener("click", function() {
	p2Score++;
	score.innerHTML = p1Score + " to " + p2Score;

	if (p2Score === maxScore) {
		alert("Game over! Player 2 wins.");
	}
})

reset.addEventListener("click", function() {
	p1Score = 0;
	p2Score = 0;
	score.innerHTML = p1Score + " to " + p2Score;
})