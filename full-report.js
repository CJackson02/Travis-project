

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 100);
  }

  // Animate each section (h2, h3) and paragraphs
  const animateIn = (el, delay = 0) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, delay);
  };

  // Animate headings and paragraphs on load
  const elements = document.querySelectorAll('.container h2, .container h3, .container p, .container ul');
  elements.forEach((el, i) => {
    animateIn(el, 150 * i);
  });

  // Optional: add scroll-based effect for visibility if user scrolls quickly
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});