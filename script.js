const products = [
  {
    id: 1,
    name: "Smartphone X",
    category: "electronics",
    price: 299,
    image: "https://via.placeholder.com/250x180?text=Smartphone"
  },
  {
    id: 2,
    name: "Laptop Pro",
    category: "electronics",
    price: 899,
    image: "https://via.placeholder.com/250x180?text=Laptop"
  },
  {
    id: 3,
    name: "Men's Jacket",
    category: "fashion",
    price: 79,
    image: "https://via.placeholder.com/250x180?text=Jacket"
  },
  {
    id: 4,
    name: "Home Lamp",
    category: "home",
    price: 35,
    image: "https://via.placeholder.com/250x180?text=Lamp"
  },
  {
    id: 5,
    name: "Sneakers",
    category: "fashion",
    price: 59,
    image: "https://via.placeholder.com/250x180?text=Sneakers"
  },
  {
    id: 6,
    name: "Smart TV",
    category: "electronics",
    price: 499,
    image: "https://via.placeholder.com/250x180?text=Smart+TV"
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(p => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-details">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <p>Category: ${p.category}</p>
      </div>
    `;
    productList.appendChild(productDiv);
  });
}

function filterProducts() {
  const category = categoryFilter.value;
  const searchText = searchBox.value.toLowerCase();

  const filtered = products.filter(p => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
searchBox.addEventListener("input", filterProducts);

displayProducts(products);