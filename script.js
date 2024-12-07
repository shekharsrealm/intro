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
    left: -200, // Adjust scroll distance
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  slider.scrollBy({
    left: 200, // Adjust scroll distance
    behavior: 'smooth'
  });
});

