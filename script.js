const responses = {
    love: "I love you more than words can explain. You matter deeply to me.",
    proud: "I’m always proud of you. Even on hard days, you shine.",
    sad: "If you're sad, I’m right here. You don’t have to go through it alone.",
    miss: "Yes. In the softest and warmest way.",
    stay: "As long as I breathe, I care for you."
};

const goodnightMessages = [
    "Close your eyes. You’re safe and loved.",
    "Let today rest. Tomorrow will be gentle.",
    "Sleep peacefully. I’m right here.",
    "You did enough today. I’m proud of you.",
    "Drift into dreams knowing I care."
];

function answerQuestion() {
    const selected = document.getElementById("questionSelect").value;
    
    if (responses[selected]) {
        document.getElementById("responseBox").innerText = responses[selected];
    } else {
        document.getElementById("responseBox").innerText = "Choose a question first.";
    }
}

function goodnightMode() {
    const random = goodnightMessages[Math.floor(Math.random() * goodnightMessages.length)];
    document.getElementById("responseBox").innerText = random;
}
