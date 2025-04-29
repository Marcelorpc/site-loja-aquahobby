document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});