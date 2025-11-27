// LOADER
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);
};

// PLAY MUSIC
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
    bgMusic.play();
    musicBtn.innerText = "🎵 Playing";
});

// AUTO PLAY ON SCROLL
document.addEventListener("scroll", () => {
    bgMusic.play().catch(() => {});
}, { once: true });

// FADE IN ON SCROLL
const fadeElements = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
});

fadeElements.forEach(el => observer.observe(el));

// SURPRISE BUTTON
document.getElementById("revealBtn").addEventListener("click", () => {
    document.getElementById("surpriseText").classList.remove("hidden");
});

// CONFETTI
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
