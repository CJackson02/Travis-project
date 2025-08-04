

// Fade-in container on page load
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 1.5s ease-in';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 100);
  }

  // Typewriter effect on h1 title
  const title = document.querySelector('h1');
  if (title && title.textContent) {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }
    typeWriter();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});