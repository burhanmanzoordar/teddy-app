const questions = {
    "Do you love me?": "I love you more than words can explain. You matter to me deeply.",
    "Are you proud of me?": "Always. Even on days you doubt yourself, I see your strength.",
    "What if I'm sad?": "Come here. You don’t have to handle sadness alone. I'm with you.",
    "Do you miss me?": "Every day. But in a soft way that reminds me how lucky I am.",
    "Will you stay with me?": "As long as I breathe, I care for you."
};

const goodnightMessages = [
    "Close your eyes. You’re safe and loved.",
    "Let today rest. Tomorrow will be gentle with you.",
    "Sleep peacefully. I’m right here in spirit.",
    "You did enough today. I’m proud of you.",
    "Drift slowly into dreams. I care about you."
];

function askTeddy() {
    let list = Object.keys(questions);
    let selected = prompt("Choose one:\n\n" + list.join("\n"));
    
    if (questions[selected]) {
        document.getElementById("responseBox").innerText = questions[selected];
    } else {
        document.getElementById("responseBox").innerText = "I'm always here for you.";
    }
}

function goodnightMode() {
    const random = goodnightMessages[Math.floor(Math.random() * goodnightMessages.length)];
    document.getElementById("responseBox").innerText = random;
}


