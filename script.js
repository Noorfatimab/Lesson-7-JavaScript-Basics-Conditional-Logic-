// Existing button functionality
const myButton = document.getElementById("clickMeBtn");
const displayParagraph = document.getElementById("displayText");
let newText = "I just learned to change myself!";

function updateText() {
    displayParagraph.textContent = newText;
}

myButton.addEventListener("click", updateText);

// New conditional logic functionality
const decisionButton = document.getElementById("decisionBtn");
let likesJavaScript = true;

function makeChoice() {
    if (likesJavaScript) {
        displayParagraph.textContent = "I love JavaScript! 🌟";
    } else {
        displayParagraph.textContent = "I need to practice more. 😅";
    }
}

decisionButton.addEventListener("click", makeChoice);
