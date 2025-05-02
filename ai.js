const textElement = document.getElementById("typing");
const messages = [
  "Your AI Copilot for Productivity.",
  "Generate content in seconds.",
  "Automate your tasks with smart tools.",
  "Make better decisions with data."
];

let index = 0;
let charIndex = 0;
let currentMessage = "";
let isDeleting = false;

function typeEffect() {
  if (index >= messages.length) index = 0;
  currentMessage = messages[index];

  if (isDeleting) {
    charIndex--;
    textElement.innerHTML = currentMessage.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  } else {
    charIndex++;
    textElement.innerHTML = currentMessage.substring(0, charIndex);
    if (charIndex === currentMessage.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 30 : 70);
}

typeEffect();
