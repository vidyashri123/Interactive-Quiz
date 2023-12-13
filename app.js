const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the largest mammal?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Whale Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which programming language is known for building dynamic web pages?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Who developed the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false }
        ]
    }
    // Add more questions as needed
];

const questionsLimit = 5; // Set the number of questions to display

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    resetAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    showNextButton();
}

function showNextButton() {
    nextButton.classList.remove("hide");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsLimit) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add("hide");
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = `You completed the quiz! Your score is ${score} out of ${questionsLimit}.`;
    resetAnswerButtons();
}

startQuiz();
