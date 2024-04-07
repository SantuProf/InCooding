
const openInnovationQuestions = [
    {
        question: "How can blockchain technology be further improved to enhance its scalability?",
        a: "Implementing sharding techniques",
        b: "Exploring alternative consensus mechanisms",
        c: "Integrating off-chain solutions",
        d: "Enhancing interoperability between different blockchains",
        correct: "a",
    },
    {
        question: "In what ways can blockchain technology contribute to supply chain management?",
        a: "Ensuring transparency and traceability of goods",
        b: "Streamlining logistics processes",
        c: "Reducing fraud and counterfeiting",
        d: "Facilitating real-time tracking of shipments",
        correct: "a",
    },
    {
        question: "How might blockchain technology revolutionize the healthcare industry?",
        a: "Improving patient data security and privacy",
        b: "Enhancing interoperability of electronic health records",
        c: "Enabling more efficient clinical trials and research",
        d: "Facilitating secure sharing of medical records among healthcare providers",
        correct: "b",
    },
    {
        question: "What potential challenges could arise from widespread adoption of blockchain technology?",
        a: "Regulatory uncertainty and compliance issues",
        b: "Scalability limitations in handling large transaction volumes",
        c: "Integration complexities with existing legacy systems",
        d: "Concerns over energy consumption and environmental impact",
        correct: "c",
    },
    {
        question: "How can blockchain technology contribute to the development of smart cities?",
        a: "Facilitating secure and efficient energy distribution",
        b: "Improving transparency and accountability in governance",
        c: "Enabling seamless management of IoT devices",
        d: "Enhancing citizen participation in decision-making processes",
        correct: "b",
    },
    {
        question: "What potential applications of blockchain technology could emerge in the field of digital identity management?",
        a: "Creating self-sovereign identity systems",
        b: "Enhancing KYC (Know Your Customer) processes",
        c: "Combating identity theft and fraud",
        d: "Enabling seamless authentication and authorization mechanisms",
        correct: "a",
    },
    {
        question: "How might blockchain technology reshape the future of the gaming industry?",
        a: "Enabling true ownership of in-game assets",
        b: "Facilitating decentralized gaming platforms",
        c: "Implementing provably fair gaming mechanisms",
        d: "Creating new monetization models through tokenization",
        correct: "d",
    },
    {
        question: "What role can blockchain technology play in enhancing electoral processes?",
        a: "Ensuring tamper-proof voting records",
        b: "Facilitating remote and secure voting",
        c: "Increasing transparency in campaign finance",
        d: "Empowering citizens to verify election results independently",
        correct: "a",
    },
    {
        question: "How might blockchain technology disrupt the traditional finance sector?",
        a: "Enabling peer-to-peer lending and crowdfunding platforms",
        b: "Reducing transaction costs and settlement times",
        c: "Enhancing financial inclusion for the unbanked population",
        d: "Transforming traditional asset tokenization and trading",
        correct: "b",
    },
    {
        question: "What challenges need to be addressed for widespread adoption of blockchain technology in real-world applications?",
        a: "Interoperability between different blockchain networks",
        b: "Scalability to handle increased transaction throughput",
        c: "Regulatory compliance and legal frameworks",
        d: "Education and awareness among stakeholders",
        correct: "c",
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
    const currentQuizData = openInnovationQuestions[currentQuiz];
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
       if(answer === openInnovationQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < openInnovationQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${openInnovationQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
