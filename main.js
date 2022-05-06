const playerOneTitle = "You";
const playerTwoTItle = "COM";
const icons = ["🎳", "🧻", "🔪"];

const playerOneIcon = document.querySelector("#player-one>p");
const playerTwoIcon = document.querySelector("#player-two>p");
const actionButton = document.getElementById("action");

var playerOneSelection = 0;
var playerTwoSelection = 0;
var score = [0, 0];

playerOneIcon.textContent = icons[playerOneSelection];
playerTwoIcon.textContent = icons[playerTwoSelection];
document.querySelector("#player-one>h2").textContent = `${playerOneTitle}: ${score[0]}`;
document.querySelector("#player-two>h2").textContent = `${playerTwoTItle}: ${score[1]}`;

document.querySelectorAll(`input[name="selection"]`).forEach(input => {
    input.addEventListener("input", () => {
        playerOneSelection = document.querySelector(`input[name="selection"]:checked`).value;
        playerOneIcon.textContent = icons[playerOneSelection];
    })
});

actionButton.addEventListener("click", () => {
    let randomSelection = Math.floor(Math.random() * 3);
    playerTwoSelection = randomSelection;
    playerTwoIcon.textContent = icons[playerTwoSelection];

    if (playerOneSelection != playerTwoSelection) {
        if (playerOneSelection > playerTwoSelection || playerOneSelection == playerTwoSelection) {
            score[0]++;
            document.querySelector("#player-one>h2").textContent = `${playerOneTitle}: ${score[0]}`;
        }
        else {
            score[1]++;
            document.querySelector("#player-two>h2").textContent = `${playerTwoTItle}: ${score[1]}`;
        }
    }
});