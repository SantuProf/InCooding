const cloudDevelopmentQuestions = [
    {
        question: "What are some key advantages of cloud computing for software development?",
        a: "Scalability, flexibility, and cost-efficiency",
        b: "Enhanced security, data privacy, and regulatory compliance",
        c: "Improved collaboration, version control, and continuous integration",
        d: "Faster development cycles, automated testing, and deployment",
        correct: "a",
    },
    {
        question: "How does cloud-native development differ from traditional software development?",
        a: "It leverages cloud services and technologies for building and deploying applications",
        b: "It focuses on monolithic architectures and on-premises infrastructure",
        c: "It emphasizes offline development and manual deployment processes",
        d: "It relies on legacy systems and proprietary software solutions",
        correct: "a",
    },
    {
        question: "What are some common challenges associated with cloud application development?",
        a: "Vendor lock-in, data security, and compliance risks",
        b: "Limited scalability, resource constraints, and performance bottlenecks",
        c: "High latency, network congestion, and reliability issues",
        d: "Lack of skilled personnel, training resources, and technical support",
        correct: "a",
    },
    {
        question: "What role do microservices play in cloud-native application architecture?",
        a: "They enable modular, decoupled components that can be independently deployed and scaled",
        b: "They facilitate centralized control and management of application resources",
        c: "They provide low-level access to cloud infrastructure for fine-grained configuration",
        d: "They automate deployment pipelines and orchestrate containerized workloads",
        correct: "a",
    },
    {
        question: "How can serverless computing benefit cloud application development?",
        a: "By abstracting infrastructure management, reducing operational overhead, and scaling automatically",
        b: "By optimizing network performance, improving data throughput, and minimizing latency",
        c: "By integrating with legacy systems, supporting hybrid cloud deployments, and ensuring data sovereignty",
        d: "By enforcing strict access controls, encrypting data at rest, and implementing multi-factor authentication",
        correct: "a",
    },
    {
        question: "What are some best practices for securing cloud-native applications?",
        a: "Implementing identity and access management (IAM), encryption, and least privilege access controls",
        b: "Regularly auditing and monitoring application activity, detecting anomalies, and responding to incidents",
        c: "Performing vulnerability assessments, penetration testing, and compliance audits",
        d: "Enforcing secure coding practices, patch management, and secure configuration of cloud services",
        correct: "a",
    },
    {
        question: "How does DevOps culture and practices contribute to successful cloud application development?",
        a: "By promoting collaboration, automation, and continuous delivery across development and operations teams",
        b: "By enforcing strict change management procedures, release schedules, and service level agreements (SLAs)",
        c: "By optimizing infrastructure provisioning, resource utilization, and cost management",
        d: "By standardizing development environments, tools, and workflows for consistency and reproducibility",
        correct: "a",
    },
    {
        question: "What are some strategies for optimizing cloud application performance?",
        a: "Utilizing content delivery networks (CDNs), caching mechanisms, and edge computing",
        b: "Implementing load balancing, auto-scaling, and traffic management techniques",
        c: "Optimizing database queries, indexing, and data partitioning for efficient data access",
        d: "Applying machine learning algorithms for predictive analytics, anomaly detection, and optimization",
        correct: "a",
    },
    {
        question: "How can cloud-based analytics and monitoring tools enhance cloud application management?",
        a: "By providing real-time insights into application performance, resource utilization, and user behavior",
        b: "By automating infrastructure provisioning, configuration management, and deployment pipelines",
        c: "By integrating with development frameworks, IDEs, and version control systems for seamless workflows",
        d: "By facilitating collaboration, code review, and knowledge sharing among distributed development teams",
        correct: "a",
    },
    {
        question: "What are some emerging trends in cloud application development?",
        a: "Adoption of serverless architectures, event-driven programming, and edge computing technologies",
        b: "Integration of artificial intelligence (AI), machine learning (ML), and natural language processing (NLP) capabilities",
        c: "Focus on serverless computing, Kubernetes orchestration, and containerization for scalable, portable deployments",
        d: "Rise of hybrid cloud solutions, multi-cloud strategies, and cloud-native development frameworks",
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
    const currentQuizData = cloudDevelopmentQuestions[currentQuiz];
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
       if(answer === cloudDevelopmentQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < cloudDevelopmentQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${cloudDevelopmentQuestions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
