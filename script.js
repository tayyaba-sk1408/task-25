
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const bestScoreDisplay = document.getElementById("bestScore");
const numberDisplay = document.getElementById("numberDisplay");
const playAgainButton = document.getElementById("playAgain");
const progressBar = document.getElementById("progressBar");

let targetNumber;
let attempts;
let gameOver;
let bestScore = null;

try {
    const savedScore = localStorage.getItem("numberQuestBestScore");
    if (savedScore !== null) {
        const parsedScore = Number(savedScore);
        if (Number.isInteger(parsedScore) && parsedScore > 0) {
            bestScore = parsedScore;
        }
    }
} catch {
    bestScore = null;
}

function updateBestScore() {
    bestScoreDisplay.textContent = bestScore === null ? "--" : bestScore;
}

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = attempts;
    numberDisplay.textContent = "?";
    message.textContent = "Make your first guess to begin.";
    message.style.color = "#22d3ee";
    progressBar.style.width = "0%";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    playAgainButton.hidden = true;
    guessInput.focus();

    updateBestScore();
}

function showFeedback(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function checkGuess(event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    if (guessInput.value.trim() === "" || !Number.isInteger(guess) || guess < 1 || guess > 100) {
        showFeedback("Please enter a whole number from 1 to 100.", "#fbbf24");
        guessInput.focus();
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;
    progressBar.style.width = `${Math.min(attempts * 5, 100)}%`;

    numberDisplay.classList.remove("pop");
    void numberDisplay.offsetWidth;
    numberDisplay.classList.add("pop");

    if (guess === targetNumber) {
        numberDisplay.textContent = targetNumber;
        showFeedback(`🎉 Correct! You guessed it in ${attempts} ${attempts === 1 ? "attempt" : "attempts"}!`, "#34d399");
        gameOver = true;
        guessInput.disabled = true;
        guessButton.disabled = true;
        playAgainButton.hidden = false;

        if (bestScore === null || attempts < bestScore) {
            bestScore = attempts;
            try {
                localStorage.setItem("numberQuestBestScore", String(bestScore));
            } catch {
                bestScore = attempts;
            }
            updateBestScore();
            showFeedback(`🏆 New best score! You won in ${attempts} ${attempts === 1 ? "attempt" : "attempts"}!`, "#34d399");
        }

        return;
    }

    if (guess < targetNumber) {
        showFeedback("📈 Too low! Try a higher number.", "#22d3ee");
    } else {
        showFeedback("📉 Too high! Try a lower number.", "#c4b5fd");
    }

    guessInput.value = "";
    guessInput.focus();
}

guessForm.addEventListener("submit", checkGuess);
playAgainButton.addEventListener("click", startGame);

startGame();
