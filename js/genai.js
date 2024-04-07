const quizData = [
    {
        question: "What is artificial intelligence (AI)?",
        a: "A branch of computer science",
        b: "A type of robotic technology",
        c: "A programming language",
        d: "An advanced form of machine learning",
        correct: "a",
    },
    {
        question: "Who coined the term 'artificial intelligence'?",
        a: "Elon Musk",
        b: "Alan Turing",
        c: "John McCarthy",
        d: "Jeff Bezos",
        correct: "c",
    },
    {
        question: "What is machine learning?",
        a: "A method for computers to learn from data",
        b: "A type of human-computer interaction",
        c: "A process of designing robots",
        d: "A subset of artificial intelligence",
        correct: "a",
    },
    {
        question: "What is deep learning?",
        a: "A type of artificial intelligence",
        b: "A process of learning through neural networks with multiple layers",
        c: "An advanced form of reinforcement learning",
        d: "A technique for unsupervised learning",
        correct: "b",
    },
    {
        question: "Which programming language is commonly used in AI development?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "JavaScript",
        correct: "b",
    },
    {
        question: "What is the Turing Test?",
        a: "A benchmark for evaluating a machine's ability to exhibit intelligent behavior",
        b: "A test for assessing human cognitive abilities",
        c: "A method for measuring machine learning performance",
        d: "A type of programming challenge",
        correct: "a",
    },
    {
        question: "What is reinforcement learning?",
        a: "A machine learning technique based on reward feedback",
        b: "A method for supervised learning",
        c: "An approach for data preprocessing",
        d: "A type of natural language processing",
        correct: "a",
    },
    {
        question: "What is computer vision?",
        a: "A field of artificial intelligence focused on enabling computers to interpret visual information",
        b: "A technique for securing computer networks",
        c: "A type of virtual reality technology",
        d: "An approach for quantum computing",
        correct: "a",
    },
    {
        question: "What is natural language processing (NLP)?",
        a: "A branch of linguistics",
        b: "A method for analyzing human behavior",
        c: "A subset of artificial intelligence focused on interaction between computers and humans using natural language",
        d: "A type of programming language",
        correct: "c",
    },
    {
        question: "What is a neural network?",
        a: "A network of biological neurons",
        b: "A mathematical model inspired by the human brain",
        c: "A type of computer network",
        d: "A form of deep learning",
        correct: "b",
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
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
