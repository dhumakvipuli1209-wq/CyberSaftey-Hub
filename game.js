const challenges = [
    {
        question: "🎁 You receive a message saying: 'Congratulations! You won ₹50,000. Click this link to claim your prize.' What should you do?",
        options: [
            "Click the link immediately",
            "Share the message with friends",
            "Ignore it and verify the offer through an official source",
            "Enter your bank details"
        ],
        answer: 2,
        explanation: "✅ Correct! Unexpected prizes and suspicious links are common scam signs."
    },

    {
        question: "📱 Someone calls you and asks for your OTP to 'verify your bank account'. What should you do?",
        options: [
            "Give the OTP",
            "Give only the last 3 digits",
            "Refuse and contact the bank through an official channel",
            "Ask them for their OTP"
        ],
        answer: 2,
        explanation: "✅ Correct! Never share your OTP with anyone."
    },

    {
        question: "📦 An unknown person sends you an APK and says you will get a reward after installing it. What should you do?",
        options: [
            "Install it",
            "Forward it to friends",
            "Do not install it and verify the source",
            "Give the sender your phone password"
        ],
        answer: 2,
        explanation: "✅ Correct! Unknown APK files can contain harmful software."
    },

    {
        question: "🤖 You receive a voice message that sounds like your friend asking for money urgently. What should you do?",
        options: [
            "Send money immediately",
            "Share your UPI PIN",
            "Verify your friend's identity using another method",
            "Forward the voice message"
        ],
        answer: 2,
        explanation: "✅ Correct! AI can be used to imitate voices, so verify unexpected requests."
    }
];

let currentQuestion = 0;
let score = 0;

function loadChallenge() {

    const challenge = challenges[currentQuestion];

    document.getElementById("question").textContent =
        challenge.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    challenge.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function () {
            checkAnswer(index);
        };

        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";

    document.getElementById("score").textContent =
        "Challenge " + (currentQuestion + 1) +
        " of " + challenges.length;
}


function checkAnswer(selectedAnswer) {

    const challenge = challenges[currentQuestion];

    const feedback =
        document.getElementById("feedback");

    if (selectedAnswer === challenge.answer) {

        score++;

        feedback.textContent =
            challenge.explanation;

        feedback.style.color = "#16a34a";

    } else {

        feedback.textContent =
            "❌ Not the safest choice. Think about verification and privacy.";

        feedback.style.color = "#dc2626";
    }

    const buttons =
        document.querySelectorAll("#options button");

    buttons.forEach(button => {
        button.disabled = true;
    });
}


function nextQuestion() {

    if (currentQuestion < challenges.length - 1) {

        currentQuestion++;

        loadChallenge();

    } else {

        document.getElementById("question").textContent =
            "🎉 Cyber Detective Challenge Completed!";

        document.getElementById("options").innerHTML = "";

        document.getElementById("feedback").textContent =
            "Your Score: " + score + " / " + challenges.length;

        document.getElementById("score").textContent =
            "Great job! Keep learning about cyber safety. 🛡️";

        document.getElementById("nextButton").style.display =
            "none";
    }
}


loadChallenge();