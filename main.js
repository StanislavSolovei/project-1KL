document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('accordion-content');
      });
    });
  
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      });
    }
  
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(img => {
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 1000;
  
        const full = document.createElement('img');
        full.src = img.src;
        full.style.maxWidth = '90%';
        full.style.maxHeight = '90%';
        modal.appendChild(full);
  
        modal.addEventListener('click', () => document.body.removeChild(modal));
        document.body.appendChild(modal);
      });
    });
  });
  