const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyper Transfer Markup Language",
        correct: "a",
    },
    {
        question: "What is the correct sequence of HTML tags for starting a webpage?",
        a: "<head><title></title></head>",
        b: "<title><head><body>",
        c: "<html><body><head><title>",
        d: "<html><head><title></title></head><body>",
        correct: "d",
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "text-color",
        b: "color",
        c: "font-color",
        d: "fgcolor",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Colorful Style Sheets",
        d: "Creative Style Sheets",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        a: "string",
        b: "boolean",
        c: "numeric",
        d: "character",
        correct: "d",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        a: "<script href='script.js'></script>",
        b: "<script src='script.js'></script>",
        c: "<script ref='script.js'></script>",
        d: "<script name='script.js'></script>",
        correct: "b",
    },
    {
        question: "What is the output of console.log(2 + '2') in JavaScript?",
        a: "22",
        b: "4",
        c: "2",
        d: "NaN",
        correct: "a",
    },
    {
        question: "Which jQuery method is used to hide selected elements?",
        a: "display()",
        b: "hide()",
        c: "visible(false)",
        d: "hidden()",
        correct: "b",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "JavaScript Oriented Notation",
        c: "JavaScript Object Naming",
        d: "JavaScript Ordered Notation",
        correct: "a",
    },
    {
        question: "What is the purpose of the Bootstrap framework?",
        a: "Server-side scripting",
        b: "Client-side scripting",
        c: "CSS preprocessor",
        d: "Front-end development",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
