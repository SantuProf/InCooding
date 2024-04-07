const cryptoQuestions = [
    {
        question: "What is the purpose of cryptographic hashing in blockchain technology?",
        a: "Encrypting user data for secure storage",
        b: "Verifying data integrity and creating unique digital fingerprints",
        c: "Generating public and private key pairs for secure transactions",
        d: "Optimizing mining algorithms for faster block validation",
        correct: "b",
    },
    {
        question: "How does asymmetric encryption differ from symmetric encryption?",
        a: "Asymmetric encryption uses the same key for both encryption and decryption, while symmetric encryption uses different keys.",
        b: "Asymmetric encryption requires a single key for both encryption and decryption, while symmetric encryption uses separate public and private keys.",
        c: "Asymmetric encryption is faster and more efficient than symmetric encryption.",
        d: "Asymmetric encryption is used for encrypting data at rest, while symmetric encryption is used for encrypting data in transit.",
        correct: "a",
    },
    {
        question: "What is a 'nonce' in the context of blockchain mining?",
        a: "A cryptographic hash function used for verifying block integrity",
        b: "A unique identifier assigned to each block in the blockchain",
        c: "An arbitrary number used only once in a cryptographic communication",
        d: "A consensus algorithm used to validate transactions in a decentralized network",
        correct: "c",
    },
    {
        question: "How does a distributed ledger ensure data integrity in a blockchain network?",
        a: "By encrypting data using advanced cryptographic algorithms",
        b: "By distributing copies of the ledger across multiple nodes and consensus mechanisms for validating transactions",
        c: "By implementing access control mechanisms to restrict unauthorized access to the ledger",
        d: "By periodically backing up the ledger data to secure cloud storage",
        correct: "b",
    },
    {
        question: "What is the purpose of a digital signature in blockchain transactions?",
        a: "To encrypt sensitive transaction data for secure transmission",
        b: "To verify the authenticity and integrity of transaction messages",
        c: "To generate unique wallet addresses for sending and receiving cryptocurrency",
        d: "To automate smart contract execution based on predefined conditions",
        correct: "b",
    },
    {
        question: "How does a Proof of Stake (PoS) consensus mechanism differ from Proof of Work (PoW)?",
        a: "PoS requires miners to solve complex mathematical puzzles to validate transactions, while PoW relies on stakeholder voting.",
        b: "PoS relies on the amount of cryptocurrency held by a miner to validate transactions, while PoW requires computational power and energy expenditure.",
        c: "PoS allows any node to validate transactions, while PoW requires specialized mining hardware.",
        d: "PoS is more energy-efficient and scalable than PoW, making it the preferred choice for most blockchain networks.",
        correct: "b",
    },
    {
        question: "What is the role of a public key in asymmetric cryptography?",
        a: "To encrypt data for secure transmission to the recipient",
        b: "To decrypt data encrypted by the corresponding private key",
        c: "To generate digital signatures for verifying message authenticity and integrity",
        d: "To verify the authenticity and integrity of digital certificates issued by certificate authorities",
        correct: "a",
    },
    {
        question: "What is the main purpose of Zero-Knowledge Proofs (ZKPs) in blockchain transactions?",
        a: "To ensure transaction anonymity and privacy without revealing sensitive data",
        b: "To enhance transaction throughput and scalability of blockchain networks",
        c: "To optimize mining algorithms for faster block validation and confirmation",
        d: "To prevent double-spending attacks and ensure consensus among network nodes",
        correct: "a",
    },
    {
        question: "What are some potential security risks associated with quantum computing in blockchain technology?",
        a: "Increased vulnerability to 51% attacks due to faster transaction validation",
        b: "Exposure of private keys and compromise of cryptographic security protocols",
        c: "Loss of transaction privacy and anonymity due to quantum-enabled surveillance",
        d: "Impact on mining profitability and energy consumption in blockchain networks",
        correct: "b",
    },
    {
        question: "How might blockchain technology enhance cybersecurity in the digital age?",
        a: "By providing immutable records of cybersecurity incidents and threat intelligence",
        b: "By enabling real-time threat detection and automated incident response",
        c: "By decentralizing security controls and eliminating single points of failure",
        d: "By implementing biometric authentication mechanisms for secure access to digital assets",
        correct: "a",
    }
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
    const currentQuizData = cryptoQuestions[currentQuiz];
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
       if(answer === cryptoQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < cryptoQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${cryptoQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
