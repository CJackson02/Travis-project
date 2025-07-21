// Fade-in the entire summary container
window.addEventListener('DOMContentLoaded', () => {
  // Section: Container Fade-in
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 1.5s ease';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 150);
  }

  // Section: Word-by-word title animation
  const title = document.querySelector('h1');
  if (title && title.textContent) {
    const words = title.textContent.split(' ');
    title.innerHTML = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = 0;
      span.style.transition = 'opacity 0.6s ease';
      setTimeout(() => {
        span.style.opacity = 1;
      }, 300 * i);
      title.appendChild(span);
    });
  }

  // Section: Paragraph fade-in with horizontal rules
  const paragraphs = document.querySelectorAll('.container p');
  paragraphs.forEach((p, i) => {
    p.style.opacity = 0;
    p.style.transition = 'opacity 1s ease, transform 1s ease';
    p.style.transform = 'translateY(10px)';
    setTimeout(() => {
      p.style.opacity = 1;
      p.style.transform = 'translateY(0)';
    }, 400 * (i + 1));

    // Insert horizontal rule after every 2nd paragraph
    if ((i + 1) % 2 === 0 && p.parentNode) {
      const hr = document.createElement('hr');
      hr.style.borderTop = '1px solid #ccc';
      hr.style.margin = '2em 0';
      p.parentNode.insertBefore(hr, p.nextSibling);
    }
  });
});