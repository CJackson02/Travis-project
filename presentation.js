// presentation.js
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 100);
  }
});