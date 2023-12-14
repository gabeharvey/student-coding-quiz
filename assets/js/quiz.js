const question = document.getElementById("question");
const select = Array.from(document.getElementsByClassName("select-text"));
const MAX_QUESTIONS = 5;
const INCORRECT_DED = 10;

let currentQuestion = {}
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        select1: "Strings",
        select2: "Booleans",
        select3: "Alerts",
        select4: "Numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        select1: "Quotes",
        select2: "Curly Brackets",
        select3: "Parenthesis",
        select4: "Square Brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        select1: "Numbers and Strings",
        select2: "Other Arrays",
        select3: "Booleans",
        select4: "All of the Above",
        answer: 4
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        select1: "Commas",
        select2: "Curly Brackets",
        select3: "Quotes",
        select4: "Parenthesis",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        select1: "JavaScript",
        select2: "Terminal/Bash",
        select3: "for Loops",
        select4: "console.log",
        answer: 4
    },

]

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [... questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionPool = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionPool];
    question.innerText = currentQuestion.question;
    select.forEach(select => {
        const number = select.dataset["number"];
        select.innerText = currentQuestion["select" + number];
    });
    availableQuestions.splice(questionPool, 1);
    acceptAnswers = true;
};

select.forEach(select => {
    select.addEventListener("click", e => {
        if(!acceptAnswers) return;
        acceptAnswers = false;
        const selectedSelect = e.target;
        const selectedAnswer = selectedSelect.dataset["number"];
        getNewQuestion();
    });
})

startGame();