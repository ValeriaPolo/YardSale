const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamburguesa = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail-aside");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMenuHamburguesa);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}

function toggleMenuHamburguesa() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productlist = [];
productlist.push({
  name: "bike",
  price: 120,
  image: "./files/pexels-photo-276517.jpeg",
});

productlist.push({
  name: "Tv",
  price: 220,
  image: "./files/pexels-photo-276517.jpeg",
});

productlist.push({
  name: "Computadora",
  price: 620,
  image: "./files/pexels-photo-276517.jpeg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("onclick", "toggleProductDetail()");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./files/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productlist);
