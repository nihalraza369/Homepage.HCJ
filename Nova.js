// GSAP entrance
gsap.from(".content h1", { duration: 1.5, y: 100, opacity: 0, ease: "expo.out" });
gsap.from(".content p", { duration: 1.5, y: 80, opacity: 0, delay: 0.3, ease: "expo.out" });
gsap.from(".btn", { duration: 1.2, scale: 0, delay: 0.6, ease: "back.out(1.7)" });

// Typewriter
const typingEl = document.querySelector(".typing");
const phrases = ["Design that Speaks.", "Creativity Meets Code.", "Your Brand. Elevated."];
let current = 0, char = 0, deleting = false;

function typeLoop() {
  typingEl.textContent = phrases[current].substring(0, char);
  if (!deleting && char < phrases[current].length) {
    char++;
    setTimeout(typeLoop, 100);
  } else if (deleting && char > 0) {
    char--;
    setTimeout(typeLoop, 50);
  } else {
    deleting = !deleting;
    if (!deleting) current = (current + 1) % phrases.length;
    setTimeout(typeLoop, 1000);
  }
}
typeLoop();
