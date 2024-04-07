const quizData = [
    {
        question: "What is data analysis?",
        a: "A process of collecting data",
        b: "A method of interpreting data",
        c: "A statistical tool",
        d: "A programming language",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a data analysis technique?",
        a: "Regression analysis",
        b: "Sentiment analysis",
        c: "Data visualization",
        d: "Algorithmic trading",
        correct: "d",
    },
    {
        question: "What is the primary goal of data preprocessing?",
        a: "To remove outliers",
        b: "To clean and transform data",
        c: "To analyze data patterns",
        d: "To build predictive models",
        correct: "b",
    },
    {
        question: "Which programming language is widely used for data analysis?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Ruby",
        correct: "b",
    },
    {
        question: "What is the purpose of exploratory data analysis (EDA)?",
        a: "To test hypotheses",
        b: "To summarize the main characteristics of data",
        c: "To predict future trends",
        d: "To build machine learning models",
        correct: "b",
    },
    {
        question: "Which statistical measure describes the central tendency of a dataset?",
        a: "Variance",
        b: "Standard deviation",
        c: "Mean",
        d: "Median",
        correct: "c",
    },
    {
        question: "What is the role of data visualization in data analysis?",
        a: "To make data more difficult to understand",
        b: "To hide patterns in data",
        c: "To communicate insights effectively",
        d: "To increase data complexity",
        correct: "c",
    },
    {
        question: "What is machine learning?",
        a: "A type of statistical analysis",
        b: "A method of training computers to learn from data",
        c: "A data visualization technique",
        d: "An algorithm for data encryption",
        correct: "b",
    },
    {
        question: "Which of the following is a supervised learning algorithm?",
        a: "K-means clustering",
        b: "Decision tree",
        c: "Principal component analysis",
        d: "Apriori algorithm",
        correct: "b",
    },
    {
        question: "What is the objective of clustering analysis?",
        a: "To classify data into predefined categories",
        b: "To discover hidden patterns in data",
        c: "To reduce dimensionality of data",
        d: "To predict numerical outcomes",
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
