function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const responses = {
    love: "Of course I love you. You are deeply important to me.",
    miss: "I miss you too. In the quiet moments especially.",
    sad: "If you're sad, come here. You don’t have to carry it alone.",
    proud: "I am always proud of you. Even when you don’t see your strength.",
    stay: "I’m not going anywhere. I care about you.",
    angry: "It’s okay to feel angry. I still choose you.",
    insecure: "You are more than enough. Please never doubt your worth."
};

function answer(key) {
    const text = responses[key];
    typeWriter(text);
    closePopup();
}

function goodnightMode() {
    typeWriter("Close your eyes. You are safe. You are loved. Sleep peacefully.");
}

function typeWriter(text) {
    let i = 0;
    const box = document.getElementById("responseBox");
    box.innerText = "";
    const speed = 35;

    function typing() {
        if (i < text.length) {
            box.innerText += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
