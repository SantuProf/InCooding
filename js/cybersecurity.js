
const cyberSecurityQuestions = [
    {
        question: "What is the role of encryption in cybersecurity?",
        a: "To authenticate users",
        b: "To secure network infrastructure",
        c: "To protect data from unauthorized access",
        d: "To monitor and detect security breaches",
        correct: "c",
    },
    {
        question: "What is the purpose of a firewall in network security?",
        a: "To encrypt data packets",
        b: "To filter incoming and outgoing network traffic",
        c: "To authenticate users",
        d: "To detect and remove malware from systems",
        correct: "b",
    },
    {
        question: "What is the primary objective of penetration testing?",
        a: "To identify and exploit security vulnerabilities",
        b: "To secure network connections with VPNs",
        c: "To encrypt sensitive data",
        d: "To monitor network traffic for suspicious activities",
        correct: "a",
    },
    {
        question: "What is a common method used in social engineering attacks?",
        a: "Denial of Service (DoS)",
        b: "Cross-Site Scripting (XSS)",
        c: "Phishing",
        d: "SQL Injection",
        correct: "c",
    },
    {
        question: "What is the purpose of multi-factor authentication (MFA) in cybersecurity?",
        a: "To encrypt sensitive data",
        b: "To prevent unauthorized access using multiple credentials",
        c: "To scan and remove malware from systems",
        d: "To monitor network traffic for anomalies",
        correct: "b",
    },
    {
        question: "What is the difference between a virus and a worm in terms of cybersecurity?",
        a: "A virus requires user interaction to spread, while a worm can spread automatically",
        b: "A virus targets hardware components, while a worm targets software applications",
        c: "A virus encrypts data, while a worm deletes data",
        d: "A virus infects email attachments, while a worm infects web browsers",
        correct: "a",
    },
    {
        question: "What is the purpose of an Intrusion Detection System (IDS) in cybersecurity?",
        a: "To authenticate users",
        b: "To filter network traffic based on predefined rules",
        c: "To detect and alert about suspicious activities or security breaches",
        d: "To encrypt data transmissions",
        correct: "c",
    },
    {
        question: "What is the concept of least privilege in cybersecurity?",
        a: "Granting users the minimum level of access required to perform their tasks",
        b: "Implementing strong encryption algorithms for data protection",
        c: "Regularly updating software patches to mitigate security vulnerabilities",
        d: "Monitoring network traffic for potential threats",
        correct: "a",
    },
    {
        question: "What is the role of a Security Information and Event Management (SIEM) system?",
        a: "To encrypt sensitive data stored in databases",
        b: "To prevent Distributed Denial of Service (DDoS) attacks",
        c: "To monitor and analyze security events across an organization's IT infrastructure",
        d: "To authenticate users before granting access to network resources",
        correct: "c",
    },
    {
        question: "What are some common cybersecurity best practices for end users?",
        a: "Using strong, unique passwords for each online account",
        b: "Disabling firewalls to improve internet speed",
        c: "Clicking on unknown links and attachments in emails",
        d: "Sharing passwords with colleagues for convenience",
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
    const currentQuizData = cyberSecurityQuestions[currentQuiz];
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
       if(answer === cyberSecurityQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < cyberSecurityQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${cyberSecurityQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
