const lovingResponses = [
    "I love you more than you even know.",
    "I'm so proud of you.",
    "You are safe with me.",
    "No matter what happens, I'm here.",
    "You mean so much to me.",
    "Even on your worst days, you're amazing.",
    "You deserve all the happiness in the world."
];

const goodnightResponses = [
    "Close your eyes. I'm right here with you.",
    "Let the world rest. You’ve done enough today.",
    "Sleep peacefully. I’m watching over you.",
    "You are loved. You are safe. Goodnight.",
    "Tomorrow is another beautiful day for you."
];

function askTeddy() {
    const random = lovingResponses[Math.floor(Math.random() * lovingResponses.length)];
    document.getElementById("responseBox").innerText = random;
}

function goodnightMode() {
    const random = goodnightResponses[Math.floor(Math.random() * goodnightResponses.length)];
    document.getElementById("responseBox").innerText = random;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
