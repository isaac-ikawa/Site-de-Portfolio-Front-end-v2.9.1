/* Desenvolvedor Isaac Ikawa */

document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo");

    /* ==================================================
       ESCONDER MENU — SOMENTE NA HOME
    ================================================== */
    if (document.body.classList.contains("home-page") && nav && logo) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                nav.classList.add("hidden");
                logo.classList.add("hidden");
            } else {
                nav.classList.remove("hidden");
                logo.classList.remove("hidden");
            }
        });
    }

    /* ==================================================
       PARTÍCULAS DO MOUSE
    ================================================== */
    const particleContainer = document.querySelector(".particle-container");

    if (particleContainer) {
        document.addEventListener("mousemove", (e) => {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;

            particleContainer.appendChild(particle);

            setTimeout(() => particle.remove(), 500);
        });
    }

    /* ==================================================
       EFEITO DE DIGITAÇÃO (SÓ SE EXISTIR)
    ================================================== */
    const typingSpan = document.querySelector(".typing-text span");

    if (typingSpan) {
        const words = ["Desenvolvedor", "Programador", "Front-end"];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                typingSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentWord.length) {
                    setTimeout(() => isDeleting = true, 1500);
                }
            } else {
                typingSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? 60 : 100);
        }

        typeEffect();
    }
});
