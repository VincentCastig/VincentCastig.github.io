

// script.js
const typewriterElement = document.getElementById("typewriter");

// The phrases to display
const phrases = [
  "\nSoftware Developer",
  "\nSolutions Engineer",
  "\nSales Engineer",
  "\nGym Addict"
];

// Typing settings
const typingSpeed = 100; // Speed of typing
const backspaceSpeed = 50; // Speed of backspacing
const pauseBetweenPhrases = 1000; // Pause before backspacing starts

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  const displayedText = currentPhrase.slice(0, charIndex);
  typewriterElement.innerHTML = displayedText.replace(/\n/g, "<span></span>");

  if (!isDeleting && charIndex < currentPhrase.length) {
    // Continue typing
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    // Continue backspacing
    charIndex--;
    setTimeout(typeWriter, backspaceSpeed);
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause before backspacing
    setTimeout(() => {
      isDeleting = true;
      typeWriter();
    }, pauseBetweenPhrases);
  } else if (isDeleting && charIndex === 0) {
    // Move to the next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to the first phrase
    setTimeout(typeWriter, typingSpeed);
  }
}

// Start the typing effect on page load
window.onload = typeWriter();

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".hero, .about-content, .skills-container");

  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile
  const observerOptions = {
    threshold: isMobile ? 0.1 : 0.5, // Use smaller threshold for mobile
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add 'visible' class when in view
        } else {
          entry.target.classList.remove("visible"); // Remove 'visible' class when out of view
        }
      });
    },
    observerOptions
  );

  sections.forEach((section) => observer.observe(section));
});

