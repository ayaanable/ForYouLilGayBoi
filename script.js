// PLAY MUSIC BUTTON
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
    bgMusic.play().catch(() => {});
    musicBtn.innerText = "🎵 Playing";
});

// AUTO-PLAY ON SCROLL
document.addEventListener("scroll", () => {
    bgMusic.play().catch(() => {});
}, { once: true });

// CONFETTI EFFECT
document.getElementById("confettiBtn").addEventListener("click", () => {
    for (let i = 0; i < 60; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.style.setProperty("--hue", Math.random());
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
});
