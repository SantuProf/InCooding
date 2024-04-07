const quizData = [
    {
        question: "What is blockchain ?",
        a: "A decentralized ledger",
        b: "A centralized database",
        c: "A programming language",
        d: "A type of cryptographic algorithm",
        correct: "a",
    },
    {
        question: "Which cryptocurrency was the first to utilize blockchain technology?",
        a: "Bitcoin",
        b: "Ethereum",
        c: "Ripple",
        d: "Litecoin",
        correct: "a",
    },
    {
        question: "What is a 'block' in a blockchain?",
        a: "A type of encryption algorithm",
        b: "A cryptographic hash function",
        c: "A unit of computer storage",
        d: "A group of transactions",
        correct: "d",
    },
    {
        question: "What is the purpose of mining in a blockchain network?",
        a: "To create new cryptocurrency coins",
        b: "To validate and confirm transactions",
        c: "To encrypt data stored in blocks",
        d: "To prevent double-spending",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a characteristic of blockchain technology?",
        a: "Transparency",
        b: "Immutability",
        c: "Centralized control",
        d: "Decentralization",
        correct: "c",
    },
    {
        question: "What consensus mechanism is used in the Bitcoin blockchain?",
        a: "Proof of Work (PoW)",
        b: "Proof of Stake (PoS)",
        c: "Delegated Proof of Stake (DPoS)",
        d: "Byzantine Fault Tolerance (BFT)",
        correct: "a",
    },
    {
        question: "What is a 'smart contract' in the context of blockchain?",
        a: "An advanced encryption algorithm",
        b: "A specialized mining computer",
        c: "A legally binding agreement executed on a blockchain",
        d: "A type of cryptocurrency wallet",
        correct: "c",
    },
    {
        question: "What role do 'nodes' play in a blockchain network?",
        a: "They perform mining operations",
        b: "They store and maintain a copy of the blockchain",
        c: "They execute smart contracts",
        d: "They facilitate peer-to-peer transactions",
        correct: "b",
    },
    {
        question: "Which term describes the process of adding a new block to the blockchain?",
        a: "Verification",
        b: "Validation",
        c: "Confirmation",
        d: "Mining",
        correct: "d",
    },
    {
        question: "What does 'DLT' stand for in the context of blockchain technology?",
        a: "Distributed Logic Technology",
        b: "Decentralized Ledger Technology",
        c: "Digital Ledger Transfer",
        d: "Data Localization Tool",
        correct: "b",
    },
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})