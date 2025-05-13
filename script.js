// Dark mode toggle
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
