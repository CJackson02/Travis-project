

// Fade in elements when they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Select elements to observe
document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});

// Optional floating title animation
document.querySelectorAll('.main-heading').forEach((el) => {
  el.style.animation = 'floatTitle 4s ease-in-out infinite';
});

// Parallax background effect on scroll
window.addEventListener('scroll', () => {
  const main = document.querySelector('.content-section');
  const offset = window.scrollY * 0.3;
  if (main) {
    main.style.backgroundPosition = `center ${offset}px`;
  }
});