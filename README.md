
# Day 25 Internship Task: Number Quest

## Project Overview

Number Quest is an interactive number guessing game developed using HTML5, CSS3, and JavaScript. The player tries to guess a randomly generated number between 1 and 100 and receives hints after each attempt.

## Objectives

- Practice JavaScript random number generation.
- Understand conditional statements and logical operations.
- Track the number of attempts.
- Validate user input.
- Update webpage elements dynamically using DOM manipulation.
- Improve UI design and responsive web development skills.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage

## Features

- Random target number between 1 and 100.
- Higher and lower hints.
- Attempt counter.
- Input validation.
- Success message when the correct number is guessed.
- Best score tracking using Local Storage.
- Play Again button.
- Responsive design for desktop and mobile screens.
- Modern dark theme with gradients and animations.

## Project Structure

```text
day25-number-guessing-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Create a folder named `day25-number-guessing-game`.
2. Create the four files listed above.
3. Paste the appropriate code into each file.
4. Save all files.
5. Open `index.html` in a web browser.
6. Enter a number between 1 and 100.
7. Follow the hints until you guess the correct number.
8. Click Play Again to start another round.

## How the Game Works

1. JavaScript generates a random integer between 1 and 100.
2. The player enters a guess.
3. The application validates the input.
4. The attempt counter increases for each valid guess.
5. The game displays a higher or lower hint.
6. When the player guesses correctly, the game displays a success message.
7. The lowest number of attempts is saved as the best score in Local Storage.

## Learning Outcomes

- Using `Math.random()` and `Math.floor()`.
- Handling form submission events.
- Implementing conditional logic.
- Validating numerical input.
- Updating HTML elements with JavaScript.
- Using Local Storage to save a score.
- Creating responsive layouts with CSS media queries.

## Future Enhancements

- Add difficulty levels.
- Include a countdown timer.
- Add sound effects.
- Introduce hints with smaller number ranges.
- Create a leaderboard.
- Add a limited number of attempts.

## Conclusion

The Number Quest project provides practical experience with HTML, CSS, and JavaScript. It demonstrates random number generation, input validation, conditional logic, attempt tracking, and dynamic DOM updates through an interactive game.
