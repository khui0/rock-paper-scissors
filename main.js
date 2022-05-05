var gameMode = document.querySelector(`input[name="mode"]:checked`).value;

var p1Selection = document.querySelector(`input[name="p1-selection"]:checked`).value;
var p2Selection = document.querySelector(`input[name="p2-selection"]:checked`).value;

var p1Submit = document.getElementById("p1-submit");
var p2Submit = document.getElementById("p2-submit");

document.querySelectorAll(`input[type="radio"]`).forEach(input => {
    input.addEventListener("input", () => {
        gameMode = document.querySelector(`input[name="mode"]:checked`).value;
        p1Selection = document.querySelector(`input[name="p1-selection"]:checked`).value;
        p2Selection = document.querySelector(`input[name="p2-selection"]:checked`).value;
        if (gameMode == 0) {
            document.querySelector("#p2>form").style.display = "none";
            p1Submit.style.display = "none";
            p2Submit.style.display = "none";
        }
        else if (gameMode == 1) {
            document.querySelector("#p2>form").style.display = "block";
            p1Submit.style.display = "inline-block";
            p2Submit.style.display = "inline-block";
        }
    })
});

p1Submit.addEventListener("click", () => {
    document.querySelector("#p1>form").style.display = "none";
    p1Submit.style.display = "none";
})

p2Submit.addEventListener("click", () => {
    document.querySelector("#p2>form").style.display = "none";
    p2Submit.style.display = "none";
})