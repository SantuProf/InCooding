
const appDevelopmentQuestions = [
    {
        question: "What are the key components of a mobile application architecture?",
        a: "User Interface (UI) and User Experience (UX)",
        b: "Frontend, Backend, and Database",
        c: "APIs, Libraries, and Frameworks",
        d: "Cloud Storage and Hosting",
        correct: "b",
    },
    {
        question: "What is the purpose of responsive design in mobile app development?",
        a: "To optimize app performance for different screen sizes and resolutions",
        b: "To implement interactive and engaging user interfaces",
        c: "To integrate social media sharing features",
        d: "To enhance app security and data encryption",
        correct: "a",
    },
    {
        question: "What role does version control play in collaborative app development?",
        a: "Ensuring consistent user experience across different platforms",
        b: "Tracking changes to source code and facilitating collaboration among developers",
        c: "Optimizing app performance through code optimization techniques",
        d: "Managing app deployment and release cycles",
        correct: "b",
    },
    {
        question: "What are the benefits of using cross-platform development frameworks like React Native and Flutter?",
        a: "Reduced development time and cost by sharing code across multiple platforms",
        b: "Enhanced app performance and native user experience",
        c: "Improved security and data encryption",
        d: "Simplified app maintenance and updates through centralized codebase",
        correct: "a",
    },
    {
        question: "What is the role of APIs (Application Programming Interfaces) in mobile app development?",
        a: "Facilitating communication between different software components and services",
        b: "Enhancing app security through data encryption and authentication mechanisms",
        c: "Optimizing app performance through caching and data compression techniques",
        d: "Enabling offline functionality and local data storage",
        correct: "a",
    },
    {
        question: "What are some common strategies for monetizing mobile applications?",
        a: "In-app purchases and subscriptions",
        b: "Advertising and sponsorship deals",
        c: "Freemium model with premium features",
        d: "Affiliate marketing and referral programs",
        correct: "a",
    },
    {
        question: "How can user feedback and analytics data be utilized to improve mobile app performance?",
        a: "Identifying usability issues and optimizing user interfaces",
        b: "Enhancing app security through vulnerability assessment and penetration testing",
        c: "Implementing gamification features to increase user engagement",
        d: "Optimizing backend infrastructure for scalability and reliability",
        correct: "a",
    },
    {
        question: "What are some best practices for ensuring mobile app security?",
        a: "Implementing secure authentication mechanisms like OAuth and JWT",
        b: "Encrypting sensitive data both in transit and at rest",
        c: "Regularly updating app dependencies and libraries to patch security vulnerabilities",
        d: "Conducting thorough security audits and penetration testing",
        correct: "a",
    },
    {
        question: "What role does cloud computing play in mobile app development?",
        a: "Providing scalable infrastructure for hosting and backend services",
        b: "Optimizing app performance through edge computing and content delivery networks",
        c: "Facilitating collaborative app development through version control and continuous integration",
        d: "Enhancing app user experience through personalized recommendations and data analytics",
        correct: "a",
    },
    {
        question: "What are some emerging trends in mobile app development?",
        a: "Integration of artificial intelligence and machine learning capabilities",
        b: "Adoption of progressive web apps for cross-platform compatibility",
        c: "Increased focus on privacy and data protection regulations like GDPR",
        d: "Rise of augmented reality and virtual reality applications",
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
    const currentQuizData = appDevelopmentQuestions[currentQuiz];
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
       if(answer === appDevelopmentQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < appDevelopmentQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${appDevelopmentQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
