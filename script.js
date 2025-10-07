const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, image: "https://via.placeholder.com/200x150?text=Smartphone" },
  { id: 2, name: "Laptop", category: "electronics", price: 799, image: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 3, name: "T-shirt", category: "fashion", price: 25, image: "https://via.placeholder.com/200x150?text=T-shirt" },
  { id: 4, name: "Jeans", category: "fashion", price: 50, image: "https://via.placeholder.com/200x150?text=Jeans" },
  { id: 5, name: "Book: JS Basics", category: "books", price: 15, image: "https://via.placeholder.com/200x150?text=JS+Book" },
  { id: 6, name: "Book: CSS Tricks", category: "books", price: 20, image: "https://via.placeholder.com/200x150?text=CSS+Book" },
];

const productsContainer = document.getElementById("products");
const categorySelect = document.getElementById("category");
const priceInput = document.getElementById("price");
const filterBtn = document.getElementById("filterBtn");

// Display products
function displayProducts(items) {
  productsContainer.innerHTML = "";
  if (items.length === 0) {
    productsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
    productsContainer.appendChild(card);
  });
}

// Filter products
function filterProducts() {
  const category = categorySelect.value;
  const maxPrice = parseFloat(priceInput.value);

  const filtered = products.filter(p => {
    return (category === "all" || p.category === category) &&
           (isNaN(maxPrice) || p.price <= maxPrice);
  });

  displayProducts(filtered);
}

// Initial display
displayProducts(products);

filterBtn.addEventListener("click", filterProducts);