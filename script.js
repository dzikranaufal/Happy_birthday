function verify() {
    const input = document.getElementById("input").value;

    if (input === "conan") {
        const container = document.querySelector(".container");
        const next = document.querySelector(".second-screen");

        container.style.display = "none";
        next.style.display = "block";
        next.classList.add("fade-up");
        next.addEventListener("click", showThirdScreen);
    } else {
        alert("Jawaban salah, coba lagi!");
    }
}

function showThirdScreen() {
    const next = document.querySelector(".second-screen");
    const third = document.querySelector(".third-screen");

    next.style.display = "none";
    third.style.display = "block";
    third.classList.add("fade-up");
}

function showfourthscreen() {
    const third = document.querySelector(".third-screen");
    const fourth = document.querySelector(".fourth-screen");
    
    document.body.style.padding = '0';
    third.style.display = "none";
    fourth.style.display = "flex";
    fourth.classList.add("fade-up");
    
    setTimeout(() => {
        const video = document.querySelector(".chat-video");
        if (video) {
            video.muted = false;
            video.play().catch(e => console.log("Auto-play prevented:", e));
        }
    }, 19000); 
    
    setTimeout(animateChatBubbles, 300);
}

function showfifthscreen() {
    const next = document.querySelector(".fourth-screen");
    const fifth = document.querySelector(".fifth-screen");

    next.style.display = "none";
    fifth.style.display = "block";
    fifth.classList.add("fade-up");
}

function animateChatBubbles() {
    const infoText = document.querySelector('.info-text');
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    if (infoText) {
        infoText.style.opacity = '1';
    }
    
    chatBubbles.forEach((bubble, index) => {
        bubble.style.setProperty('--i', index); 
        bubble.style.animationDelay = `${1.5 + (index * 1.6)}s`;
    });
}

