const player1Name = "Player 1";
const player2Name = "Player 2";

const p1Icon = document.querySelector("#p1>p");
const p2Icon = document.querySelector("#p2>p");
const p1Submit = document.getElementById("p1-submit");
const p2Submit = document.getElementById("p2-submit");
const actionButton = document.getElementById("action");

const icons = ["💎", "🧻", "🔪"];

var gameMode = document.querySelector(`input[name="mode"]:checked`).value;
var p1Selection = document.querySelector(`input[name="p1-selection"]:checked`).value;
var p2Selection = document.querySelector(`input[name="p2-selection"]:checked`).value;

resetGame();

document.querySelectorAll(`input[name="mode"]`).forEach(input => {
    input.addEventListener("input", () => {
        gameMode = document.querySelector(`input[name="mode"]:checked`).value;
        resetGame();
    })
})

document.querySelectorAll(`input[type="radio"]`).forEach(input => {
    input.addEventListener("input", () => {
        p1Selection = document.querySelector(`input[name="p1-selection"]:checked`).value;
        p2Selection = document.querySelector(`input[name="p2-selection"]:checked`).value;
        if (gameMode == 0) {
            p1Icon.textContent = icons[p1Selection];
        }
    })
})

p1Submit.addEventListener("click", () => {
    document.querySelector("#p1>form").style.display = "none";
    p1Submit.style.display = "none";
})

p2Submit.addEventListener("click", () => {
    document.querySelector("#p2>form").style.display = "none";
    p2Submit.style.display = "none";
})

function resetGame() {
    document.querySelector("#p1>h2").textContent = player1Name;
    document.querySelector("#p2>h2").textContent = player2Name;
    p1Icon.textContent = "💭"
    p2Icon.textContent = "💭"
    // Singleplayer
    if (gameMode == 0) {
        document.querySelector("#p1>form").style.display = "block";
        document.querySelector("#p2>form").style.display = "none";
        p1Submit.style.display = "none";
        p2Submit.style.display = "none";
    }
    // Pass and play
    else if (gameMode == 1) {
        document.querySelector("#p1>form").style.display = "block";
        document.querySelector("#p2>form").style.display = "block";
        p1Submit.style.display = "inline-block";
        p2Submit.style.display = "inline-block";
    }
}