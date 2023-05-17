const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

let cart = [];

function createProductElement(product) {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;
  div.querySelector('button').addEventListener('click', () => addToCart(product));
  return div;
}

function addToCart(product) {
  cart.push(product);
}

function createCartItemElement(product) {
  const div = document.createElement('div');
  div.className = 'cart-item';
  div.innerHTML = `
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
  `;
  return div;
}

function showCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';
  cart.forEach(product => {
    cartContainer.appendChild(createCartItemElement(product));
  });
  cartContainer.style.display = 'block';
}

const productContainer = document.getElementById('product-container');
products.forEach(product => {
  productContainer.appendChild(createProductElement(product));
});

document.getElementById('view-cart').addEventListener('click', showCart);
