function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.slider-btn.left');
const rightButton = document.querySelector('.slider-btn.right');

leftButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -400, // Adjust scroll distance
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  slider.scrollBy({
    left: 400, // Adjust scroll distance
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all sections to observe
  const sections = document.querySelectorAll("section");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when section becomes visible
          entry.target.classList.add("animate-section");
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Observe each section
  sections.forEach((section) => observer.observe(section));
});
