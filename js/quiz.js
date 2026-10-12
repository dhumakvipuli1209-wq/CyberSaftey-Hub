const quizQuestions = [

{
    question: "Should you share your OTP with someone who calls claiming to be from your bank?",

    options: [
        "Yes",
        "No",
        "Only sometimes",
        "If they know my name"
    ],

    answer: 1
},

{
    question: "What is phishing?",

    options: [
        "A type of computer game",
        "A technique used to trick people into revealing information",
        "A backup method",
        "A type of antivirus"
    ],

    answer: 1
},

{
    question: "Which is the strongest password?",

    options: [
        "12345678",
        "password",
        "Vipuli2006",
        "A unique long password with mixed characters"
    ],

    answer: 3
},

{
    question: "What should you do before clicking an unknown link?",

    options: [
        "Click immediately",
        "Verify the link and sender",
        "Forward it",
        "Enter your password"
    ],

    answer: 1
}

];

let quizIndex = 0;
let quizScore = 0;

const question = document.getElementById("quizQuestion");
const options = document.getElementById("quizOptions");
const result = document.getElementById("quizResult");
const next = document.getElementById("quizNext");

function loadQuiz() {

    const q = quizQuestions[quizIndex];

    question.textContent = q.question;

    options.innerHTML = "";
    result.textContent = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.addEventListener("click", () => {

            checkQuizAnswer(index);

        });

        options.appendChild(button);
    });

    next.style.display = "none";
}

function checkQuizAnswer(selected) {

    const q = quizQuestions[quizIndex];

    document.querySelectorAll("#quizOptions .option")
        .forEach(button => button.disabled = true);

    if (selected === q.answer) {

        quizScore++;

        result.textContent = "✅ Correct!";

    } else {

        result.textContent = "❌ Incorrect. Try to learn from this question.";

    }

    next.style.display = "inline-block";
}

next.addEventListener("click", () => {

    quizIndex++;

    if (quizIndex < quizQuestions.length) {

        loadQuiz();

    } else {

        question.textContent = "🎉 Quiz Completed!";

        options.innerHTML = "";

        result.textContent =
            `Your Score: ${quizScore}/${quizQuestions.length}`;

        next.textContent = "Restart Quiz";

        next.onclick = () => {

            quizIndex = 0;
            quizScore = 0;

            next.textContent = "Next Question";
            next.onclick = null;

            loadQuiz();
        };
    }

});

loadQuiz();
