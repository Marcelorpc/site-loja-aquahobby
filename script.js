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

// Lógica do carrinho de compras
const cart = {};

function addToCart(productName) {
  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }

  renderCart();
}

function renderCart() {
  const cartItemsEl = document.getElementById("cart-items");
  cartItemsEl.innerHTML = "";

  for (const name in cart) {
    const li = document.createElement("li");
    li.textContent = `${name}: ${cart[name]}`;
    cartItemsEl.appendChild(li);
  }
}

function clearCart() {
  for (const key in cart) {
    delete cart[key];
  }
  renderCart();
}