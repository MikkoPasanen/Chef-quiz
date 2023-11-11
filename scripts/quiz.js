/*
TODO:

Värimaailma
Kaikkiin kysymyksiin kuvat
Lisää 4 kysymystä
Aloitusruutu
Lopetusruutu
Mobile first
Lajittele scss tiedostot paremmin
Lajittele js tiedostot paremmin
*/

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
const questionImage = document.getElementById("question-image");

// Apply eventlisteners for the buttons
nextButton.addEventListener("click", showQuestion);
hintButton.addEventListener("click", applyHint);

// Get all answer buttons and convert them into a normal array from nodelist using spread
let answerButtonsNode = document.querySelectorAll(".answer");
let answerButtons = [...answerButtonsNode];

// Create a shuffled copy of the questions array
let shuffledQuestions = shuffleArray(questions);

//-----------------------------------------------------------//

function showQuestion() {
    // Remove the next question button at the start of each question
    nextButton.style.display = "none";

    // Remove styling from buttons from the previous questions
    answerButtons.forEach((button) => {
        button.classList.remove("correct", "incorrect");
        button.classList.remove("hint-used");
        button.removeEventListener("click", clickHandler);
    });

    // Get the current question and display it
    if (currentQuestionIndex < questions.length / 2) {
        let currentQuestion = shuffledQuestions[currentQuestionIndex];
        let questionNumber = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

        // Change the questions image based on the question
        questionImage.src = currentQuestion.img;

        // Display all the possible answers and add eventlistener to each button
        for (let i = 0; i < 4; i++) {
            answerButtons[i].innerHTML = currentQuestion.answers[i].text;
            answerButtons[i].addEventListener("click", clickHandler);
        }

        currentQuestionIndex++;
    } else {
        // All questions have been asked
        questionElement.innerHTML = "All questions have been asked!";
    }
}

function checkAnswer(selectedIndex, currentQuestion) {
    // If the answer is correct
    if (currentQuestion.answers[selectedIndex].correct === "true") {
        score++;
        answerButtons[selectedIndex].classList.add("correct");

        // If the answer is incorrect
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");

        // Display the correct answer if the chosen answer was wrong
        for (let i = 0; i < 4; i++) {
            if (currentQuestion.answers[i].correct === "true") {
                answerButtons[i].classList.add("correct");
                break;
            }
        }
    }

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
                Math.random() * currentQuestion.answers.length
            );

            // Get random answer from the current question
            const randomAnswer = currentQuestion.answers[randomIndex];

            // If the answer is not in the array yet and it is incorrect answer, then store it
            if (!answersToRemove.includes(randomIndex)) {
                if (randomAnswer.correct === "false") {
                    answersToRemove.push(randomIndex);
                }
            }
        }

        // Loop trough the array of incorrect answers and remove 2 answers
        for (let i = 0; i < answersToRemove.length; i++) {
            let removeAnswerIndex = answersToRemove[i];

            answerButtons[removeAnswerIndex].classList.add("hint-used");
        }

        hintsUsed++;
        hintsLeft--;

        // Display the current status of the hints
        hintButton.innerHTML = `💡Hints left: ${hintsLeft}`;
    }
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
