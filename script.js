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

function sendForm(event) {
  event.preventDefault();
  showModal("Email enviado com sucesso!")
  event.target.reset();
}

// Função para exibir modal de mensagens
function showModal(message) {
  const modal = document.getElementById('modal');
  const messageElement = document.getElementById('modal-message');
  const closeButton = document.getElementById('close-modal');

  messageElement.textContent = message;
  modal.classList.remove('hidden');

  closeButton.onclick = () => {
    modal.classList.add('hidden');
  };
}