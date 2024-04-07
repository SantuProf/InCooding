
const arVrQuestions = [
    {
        question: "What is the primary difference between augmented reality (AR) and virtual reality (VR)?",
        a: "AR enhances the real world with digital overlays, while VR immerses users in a completely virtual environment.",
        b: "AR and VR both create fully immersive virtual environments, but AR uses physical devices while VR uses headsets.",
        c: "AR and VR are essentially the same technology, with different names used interchangeably.",
        d: "AR projects holographic images into the environment, while VR generates 360-degree digital environments.",
        correct: "a",
    },
    {
        question: "What hardware components are typically used in AR experiences?",
        a: "Smartphones, tablets, and wearable devices like smart glasses",
        b: "High-powered gaming PCs and virtual reality headsets",
        c: "Specialized AR goggles and motion tracking cameras",
        d: "Biometric sensors and haptic feedback devices",
        correct: "a",
    },
    {
        question: "What programming languages are commonly used in AR and VR development?",
        a: "JavaScript and HTML",
        b: "C++ and C#",
        c: "Python and Ruby",
        d: "Java and Swift",
        correct: "b",
    },
    {
        question: "How does marker-based AR differ from markerless AR?",
        a: "Marker-based AR relies on physical markers or triggers, while markerless AR uses object recognition and tracking.",
        b: "Markerless AR requires specialized hardware, while marker-based AR can run on standard smartphones.",
        c: "Marker-based AR projects holographic images, while markerless AR overlays digital content onto physical surfaces.",
        d: "Markerless AR is more immersive than marker-based AR because it tracks user movements in real-time.",
        correct: "a",
    },
    {
        question: "What are some practical applications of VR technology beyond gaming?",
        a: "Virtual tourism and travel experiences",
        b: "Training simulations for industries like healthcare and aviation",
        c: "Architectural visualization and real estate walkthroughs",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "How does AR enhance user experiences in retail and e-commerce?",
        a: "By enabling virtual try-on experiences for clothing and accessories",
        b: "By providing interactive product demonstrations and 3D visualizations",
        c: "By offering location-based promotions and personalized recommendations",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What challenges does AR/VR face in terms of user adoption and mainstream integration?",
        a: "High costs of hardware and development",
        b: "Technical limitations in rendering realistic graphics and environments",
        c: "Concerns over privacy and data security",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What role can AR/VR play in education and training?",
        a: "Enhancing classroom learning with immersive experiences and simulations",
        b: "Providing hands-on training for complex tasks and procedures",
        c: "Enabling remote collaboration and virtual classrooms",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "How might AR/VR impact the future of entertainment and media?",
        a: "Creating interactive storytelling experiences and immersive narratives",
        b: "Transforming live events and concerts with virtual attendance options",
        c: "Revolutionizing content creation and distribution platforms",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What advancements and innovations can we expect to see in the future of AR/VR technology?",
        a: "Improved hardware capabilities and form factors",
        b: "Integration with emerging technologies like AI and 5G",
        c: "Expansion of AR/VR applications into industries like healthcare and manufacturing",
        d: "All of the above",
        correct: "d",
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
    const currentQuizData = arVrQuestions[currentQuiz];
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
       if(answer === arVrQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < arVrQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${arVrQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
