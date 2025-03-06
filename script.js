
let bars = document.querySelectorAll('.bars .fa-bars');
let menu = document.querySelectorAll('.menu');

bars.forEach(bar =>{
    bar.addEventListener('click', () =>{
        menu.forEach(menuItem =>{
            menuItem.classList.toggle('show');
        });
    });
});

let cartIcon = document.querySelectorAll('.cart_menu .fa-cart-shopping');
let cartMenu = document.querySelectorAll('.cart_container');
let closeCart = document.querySelectorAll('.close_cart');

cartIcon.forEach(cart => {
    cart.addEventListener('click', () =>{
        cartMenu.forEach(cartItem =>{
            cartItem.classList.toggle('show_cart_menu');
        });
    });
});
closeCart.forEach(cartClose => {
    cartClose.addEventListener('click', () =>{
        cartMenu.forEach(cartItem =>{
            cartItem.classList.remove('show_cart_menu');
        });
    });
});

// About file slider

var swiper = new Swiper('.swiper' , {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:{
        delay: 2000,
    },
    loop:true,
});

// shop file mixitup

var mixer = mixitup('.shop_products');

let shopBars = document.querySelector('.shop_bars .fa-list');
let shopMenu = document.querySelector('.shop_menu_category');
let shopMenuLink = document.querySelector('.shop_menu_link');

shopMenuLink.forEach((MenuLink) =>{
    MenuLink.addEventListener('click' , () =>{
        shopMenu.classList.toggle('show_shop_menu');
    })
})

// shop page 

// // Get all the cart icons and view icons
// const cartIcons = document.querySelectorAll(".fa-cart-plus");
// const viewIcons = document.querySelectorAll(".fa-eye");

// // Array to hold cart items
// let cartItems = [];

// // Navigate to Cart Page
// function goToCartPage() {
//   // Store cart items in localStorage to persist data across pages
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
//   // Redirect to cart page
//   window.location.href = "cart.html";
// }

// // Handle "Add to Cart" functionality
// cartIcons.forEach((cartIcon) => {
//   cartIcon.addEventListener("click", (event) => {
//     const productElement = event.target.closest(".product");
    
//     // Extract product details
//     const imgSrc = productElement.querySelector(".product_img img").src;
//     const name = productElement.querySelector(".shop_product_price").textContent;
//     const price = productElement.querySelector(".price").textContent;
    
//     // Add product details to cart
//     cartItems.push({ imgSrc, name, price });
    
//     // Navigate to cart page
//     goToCartPage();
//   });
// });

// // Handle "View Product" functionality
// viewIcons.forEach((viewIcon) => {
//   viewIcon.addEventListener("click", (event) => {
//     const productElement = event.target.closest(".product");
    
//     // Extract product details
//     const imgSrc = productElement.querySelector(".product_img img").src;
//     const name = productElement.querySelector(".shop_product_price").textContent;
//     const price = productElement.querySelector(".price").textContent;
    
//     // Store product details in localStorage for viewing on the cart page
//     localStorage.setItem("viewedProduct", JSON.stringify({ imgSrc, name, price }));
    
//     // Redirect to cart page
//     window.location.href = "cart.html";
//   });
// });

// Get all the cart icons
const cartIcons = document.querySelectorAll(".fa-cart-plus");

// Navigate to Cart Page
function goToCartPage(product) {
  // Store the clicked product in localStorage
  localStorage.setItem("selectedProduct", JSON.stringify(product));

  // Redirect to cart page
  window.location.href = "cart.html";
}

// Handle "Add to Cart" functionality
cartIcons.forEach((cartIcon) => {
  cartIcon.addEventListener("click", (event) => {
    const productElement = event.target.closest(".product");

    // Extract product details
    const imgSrc = productElement.querySelector(".product_img img").src;
    const name = productElement.querySelector(".shop_product_price").textContent;
    const price = productElement.querySelector(".price").textContent;

    // Prepare product object
    const product = { imgSrc, name, price };

    // Navigate to cart page with the clicked product
    goToCartPage(product);
  });
});


// cart page

// // Retrieve cart items from localStorage
// const cartitems = JSON.parse(localStorage.getItem("cartItems")) || [];
// const viewedProduct = JSON.parse(localStorage.getItem("viewedProduct"));

// // Render Cart Items
// const cartList = document.getElementById("cart-list");
// cartItems.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerHTML = `
//     <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px;">
//     <span>${item.name}</span> - <span>${item.price}</span>
//   `;
//   cartList.appendChild(li);
// });

// // Render Viewed Product
// const viewedProductContainer = document.getElementById("viewed-product");
// if (viewedProduct) {
//   viewedProductContainer.innerHTML = `
//     <img src="${viewedProduct.imgSrc}" alt="${viewedProduct.name}" style="width: 100px;">
//     <p>${viewedProduct.name}</p>
//     <p>${viewedProduct.price}</p>
//   `;
// } else {
//   viewedProductContainer.textContent = "No product viewed yet.";
// }

// Retrieve the selected product from localStorage
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

// Render the selected product on the cart page
const cartContainer = document.getElementById("cart-container");

if (selectedProduct) {
  cartContainer.innerHTML = `
    <h2>Product Details</h2>
    <div class="cart-product">
      <img src="${selectedProduct.imgSrc}" alt="${selectedProduct.name}" style="width: 100px;">
      <p><strong>Product Name:</strong> ${selectedProduct.name}</p>
      <p><strong>Price:</strong> ${selectedProduct.price}</p>
    </div>
  `;
} else {
  cartContainer.innerHTML = "<p>No product selected.</p>";
}

document.addEventListener("DOMContentLoaded", function () {
  // Login Form Validation
  document.querySelector(".login form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      let email = this.querySelector("input[type='text']").value.trim();
      let password = this.querySelector("input[type='password']").value.trim();

      if (email === "" || password === "") {
          alert("Please enter both email and password.");
          return;
      }

      if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
      }

      alert("Login successful!");
      this.submit();
  });

  // Register Form Validation
  document.querySelector(".Register form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      let username = this.querySelector("input[type='text']").value.trim();
      let email = this.querySelector("input[type='email']").value.trim();
      let password = this.querySelector("input[type='password']").value.trim();

      if (username === "" || email === "" || password === "") {
          alert("All fields are required.");
          return;
      }

      // Email format validation
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
      }

      alert("Registration successful!");
      this.submit();
  });
});


