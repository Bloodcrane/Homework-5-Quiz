const questions = [
    {
        question: "What can you learn on SkillWill?",
        options: ["Cooking recipes", "Programming languages", "Meditation techniques", "Politics"],
        answer: "Programming languages"
    },
    {
        question: "Which of the following programming languages can you learn on SkillWill?",
        options: ["JavaScript", "Polish", "French", "Binary"],
        answer: "JavaScript"
    },
    {
        question: "Does SkillWill have a mobile app?",
        options: ["Yes", "No"],
        answer: "Yes"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const messageElement = document.querySelector('.message');
const scoreElement = document.getElementById('score');
const restartButton = document.querySelector('.restart');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    if (selectedAnswer === correctAnswer) {
        messageElement.textContent = 'Correct!';
        messageElement.style.color = '#508f50';
        score++;
        scoreElement.textContent = score;
    } else {
        messageElement.textContent = 'Incorrect!';
        messageElement.style.color = '#8f5050';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.classList.add('hidden')
    optionsElement.innerHTML = '';
    messageElement.textContent = `Quiz ended. Your score is ${score}/${questions.length}.`;
    restartButton.classList.remove('hidden');
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    messageElement.textContent = '';
    restartButton.classList.add('hidden');
    questionElement.classList.remove('hidden')
    showQuestion();
});

showQuestion();
