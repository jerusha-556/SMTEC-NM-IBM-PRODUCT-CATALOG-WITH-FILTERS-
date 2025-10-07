const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    price: 199,
    image: "https://via.placeholder.com/200x150?text=Smartphone"
  },
  {
    id: 2,
    name: "Laptop",
    category: "electronics",
    price: 599,
    image: "https://via.placeholder.com/200x150?text=Laptop"
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    image: "https://via.placeholder.com/200x150?text=T-Shirt"
  },
  {
    id: 4,
    name: "Jeans",
    category: "clothing",
    price: 60,
    image: "https://via.placeholder.com/200x150?text=Jeans"
  },
  {
    id: 5,
    name: "Novel",
    category: "books",
    price: 15,
    image: "https://via.placeholder.com/200x150?text=Book"
  },
  {
    id: 6,
    name: "Headphones",
    category: "electronics",
    price: 85,
    image: "https://via.placeholder.com/200x150?text=Headphones"
  }
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(productsToShow) {
  productGrid.innerHTML = "";

  if (productsToShow.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  productsToShow.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

function filterProducts() {
  const category = categoryFilter.value;
  const price = priceFilter.value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (price !== "all") {
    const [min, max] = price.split("-").map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  displayProducts(filtered);
}

// Initial load
displayProducts(products);

// Event listeners
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);