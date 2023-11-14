
import { questions } from "./questions.js";
import { shuffleArray } from "./shuffle.js";

let score = 0;
let currentQuestionIndex = 0;
const hintsCount = 2;
let hintsUsed = 0;
let hintsLeft = 2;

// Get html elements and store them
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-question");
const hintButton = document.getElementById("hint");
const startQuizButton = document.getElementById("start-game");
const playAgainButton = document.getElementById("play-again");
const questionImage = document.getElementById("question-image");
const resultsScreen = document.getElementById("results-container");
const quizGame = document.getElementsByClassName("quiz-container")[0];
const startingScreen = document.getElementById("starting-container");

quizGame.style.display = "none";
resultsScreen.style.display = "none";

// Apply eventlisteners for the buttons
nextButton.addEventListener("click", showQuestion);
hintButton.addEventListener("click", applyHint);
playAgainButton.addEventListener("click", playAgain);
startQuizButton.addEventListener("click", startGame);


// Get all answer buttons and convert them into a normal array from nodelist using spread
let answerButtonsNode = document.querySelectorAll(".answer");
let answerButtons = [...answerButtonsNode];

// Create a shuffled copy of the questions array
let shuffledQuestions;

//-----------------------------------------------------------//

function showQuestion() {
    // Remove the next question button at the start of each question
    nextButton.style.display = "none";

    // Remove styling from buttons from the previous questions
    answerButtons.forEach((button) => {
        button.classList.remove("correct", "incorrect");
        button.classList.remove("hint-used");
        button.removeEventListener("click", clickHandler);
        button.style.pointerEvents = "auto";
    });

    // Get the current question and display it
    if (currentQuestionIndex < questions.length / 2) {

        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        let questionNumber = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

        // Randomize the current questions answers so they arent always the same
        currentQuestion.shuffledAnswers = shuffleArray(currentQuestion.answers);

        // Change the questions image based on the question
        questionImage.src = currentQuestion.img;

        // Display all the possible answers and add eventlistener to each button
        for (let i = 0; i < 4; i++) {
            answerButtons[i].innerHTML = currentQuestion.shuffledAnswers[i].text;
            answerButtons[i].addEventListener("click", clickHandler);
        }

        currentQuestionIndex++;
    } else {
        // Retrieve the high score from localStorage
        let highScore = localStorage.getItem("highScore");

        if (highScore === null) {
            // Store the score in localStorage
            localStorage.setItem("highScore", score);
        } else if(score > highScore) {
            localStorage.setItem("highScore", score);
        }

        highScore = localStorage.getItem("highScore");

        quizGame.style.display = "none";
        resultsScreen.style.display = "block";

        document.getElementById("highscore").innerHTML = `🏆Your highscore: ${highScore}`;
        document.getElementById("score").innerHTML = `Your score was ${score}/10`;
        const skillText = document.getElementById("skill");

        if (score <= 4) {
            skillText.innerHTML =
                "Seems like you still have some learning to do!";
        } else if (score >= 5 && score <= 8) {
            skillText.innerHTML =
                "You seem to know your way around the kitchen!";
        } else {
            skillText.innerHTML = "Good job chef!";
        }
    }
}

function checkAnswer(selectedIndex, currentQuestion) {

    // Get the selected answer's text
    const selectedAnswerText = answerButtons[selectedIndex].innerHTML;

    // Find the correct answer among the shuffled answers
    const correctAnswer = currentQuestion.answers.find(
        (answer) => answer.correct === "true"
    );

    // If the answer is correct
    if (selectedAnswerText === correctAnswer.text) {
        score++;
        answerButtons[selectedIndex].classList.add("correct");

        // If the answer is incorrect
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");

        // Display the correct answer if the chosen answer was wrong
        for (let i = 0; i < 4; i++) {
            if (answerButtons[i].innerHTML === correctAnswer.text) {
                answerButtons[i].classList.add("correct");
                break;
            }
        }
    }

    // Disable all the answer buttons so they cant be clicked after the answer
    // has been given
    answerButtons.forEach((button) => {
        button.style.pointerEvents = "none";
    });

    // Display the next question button after the answer has been given
    nextButton.style.display = "block";
}

function applyHint() {
    if (hintsUsed < hintsCount) {
        // Get the current question
        const currentQuestion = shuffledQuestions[currentQuestionIndex - 1];

        // An empty array to store the incorrect answers
        const answersToRemove = [];

        //  While arrays length is less than 2, generate random index
        while (answersToRemove.length < 2) {
            const randomIndex = Math.floor(
                Math.random() * currentQuestion.shuffledAnswers.length
            );

            // If the answer is not in the array yet and it is incorrect answer, then store it
            if (!answersToRemove.includes(randomIndex)) {
                if (currentQuestion.shuffledAnswers[randomIndex].correct === "false") {
                    answersToRemove.push(randomIndex);
                }
            }
        }

        // Loop trough the array of incorrect answers and remove 2 answers
        for (let i = 0; i < answersToRemove.length; i++) {
            let removeAnswerIndex = answersToRemove[i];

            answerButtons[removeAnswerIndex].classList.add("hint-used");
            answerButtons[removeAnswerIndex].style.pointerEvents = "none";
        }

        hintsUsed++;
        hintsLeft--;

        // Display the current status of the hints
        hintButton.innerHTML = `💡Hints left: ${hintsLeft}`;
    }
}

function playAgain() {
    score = 0;
    hintsLeft = 2;
    hintsUsed = 0;
    currentQuestionIndex = 0;
    hintButton.innerHTML = `💡Hints left: ${hintsLeft}`;


    quizGame.style.display = "block";
    resultsScreen.style.display = "none";
    shuffledQuestions = shuffleArray(questions);
    showQuestion();
}

function startGame() {
    quizGame.style.display = "block";
    startingScreen.style.display = "none";
    shuffledQuestions = shuffleArray(questions);
    showQuestion();
}

// Own function for the answer clicking so that evenlisteners work as they should
function clickHandler() {
    // Get the index of the button that was pressed
    const selectedIndex = answerButtons.indexOf(event.target);
    // Get the current question
    const currentQuestion = shuffledQuestions[currentQuestionIndex - 1];
    // Call checkAnswer with previous information
    checkAnswer(selectedIndex, currentQuestion);
}
