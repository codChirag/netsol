// cart.js

function getCart() {
  const cart = localStorage.getItem('shopEaseCart');
  return cart ? JSON.parse(cart) : [];
}

function setCart(cart) {
  localStorage.setItem('shopEaseCart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  setCart(cart);
  alert('Added to cart!');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  setCart(cart);
  renderCartIfPresent();
}

function changeQuantity(productId, delta) {
  let cart = getCart();
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    setCart(cart);
    renderCartIfPresent();
  }
}

function clearCart() {
  localStorage.removeItem('shopEaseCart');
  updateCartCount();
  renderCartIfPresent();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = count;
  });
}

// If we are on the cart page, rerender
function renderCartIfPresent() {
  if (typeof renderCart === 'function') {
    renderCart();
  }
}

// On page load, update cart count in all pages
document.addEventListener('DOMContentLoaded', updateCartCount);
