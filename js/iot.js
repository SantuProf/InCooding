
const internetOfThingsQuestions = [
    {
        question: "What is the primary purpose of IoT (Internet of Things) technology?",
        a: "To connect physical devices and enable data exchange over the internet",
        b: "To develop immersive virtual reality experiences",
        c: "To automate software development processes",
        d: "To enhance cybersecurity measures and protect against online threats",
        correct: "a",
    },
    {
        question: "What are some examples of IoT applications in smart home technology?",
        a: "Smart thermostats for temperature control",
        b: "Virtual reality gaming consoles",
        c: "Augmented reality navigation systems",
        d: "Blockchain-based cryptocurrency wallets",
        correct: "a",
    },
    {
        question: "How does IoT contribute to industrial automation and manufacturing?",
        a: "By enabling predictive maintenance of machinery and equipment",
        b: "By providing secure cloud storage solutions",
        c: "By optimizing search engine algorithms",
        d: "By implementing blockchain technology for supply chain management",
        correct: "a",
    },
    {
        question: "What role does data analytics play in IoT systems?",
        a: "Analyzing large volumes of sensor data to derive meaningful insights",
        b: "Creating virtual reality simulations for training purposes",
        c: "Implementing decentralized finance (DeFi) solutions",
        d: "Developing mobile applications for remote monitoring",
        correct: "a",
    },
    {
        question: "How can IoT contribute to environmental sustainability?",
        a: "By optimizing energy usage and reducing carbon emissions",
        b: "By enhancing cybersecurity measures to protect sensitive data",
        c: "By implementing blockchain technology for identity management",
        d: "By developing artificial intelligence algorithms for predictive modeling",
        correct: "a",
    },
    {
        question: "What are some challenges associated with the widespread adoption of IoT technology?",
        a: "Security vulnerabilities and risks of cyberattacks",
        b: "Lack of compatibility and interoperability between different IoT devices",
        c: "Limited availability of high-speed internet connectivity in remote areas",
        d: "Concerns over data privacy and user consent",
        correct: "a",
    },
    {
        question: "How can IoT be utilized in healthcare and medical applications?",
        a: "Remote patient monitoring and telemedicine services",
        b: "Developing virtual reality gaming experiences for rehabilitation",
        c: "Optimizing supply chain management in pharmaceutical industry",
        d: "Creating decentralized autonomous organizations (DAOs) for healthcare administration",
        correct: "a",
    },
    {
        question: "What role does edge computing play in IoT systems?",
        a: "Performing data processing and analysis closer to the data source",
        b: "Developing virtual private networks (VPNs) for secure communication",
        c: "Enhancing user experience through personalized recommendations",
        d: "Implementing distributed ledger technology (DLT) for data storage",
        correct: "a",
    },
    {
        question: "How can IoT technology improve transportation and logistics?",
        a: "Optimizing route planning and fleet management",
        b: "Creating decentralized social media platforms for travelers",
        c: "Facilitating peer-to-peer car sharing services",
        d: "Implementing blockchain technology for digital identity verification",
        correct: "a",
    },
    {
        question: "What are some emerging trends in IoT development?",
        a: "Integration of artificial intelligence and machine learning algorithms",
        b: "Adoption of quantum computing for secure data encryption",
        c: "Increasing use of augmented reality for IoT device management",
        d: "Development of decentralized finance (DeFi) protocols",
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
    const currentQuizData = internetOfThingsQuestions[currentQuiz];
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
       if(answer === internetOfThingsQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < internetOfThingsQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${internetOfThingsQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
