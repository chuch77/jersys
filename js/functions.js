document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const closeIcon = document.querySelector(".close-icon");
  
    menuIcon.addEventListener("click", function () {
      menu.classList.add("open");
    });
  
    closeIcon.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  
    const cartIcon = document.querySelector(".cart-icon");
    const cart = document.querySelector(".cart");
    const closeCartIcon = document.querySelector(".close-cart");
    const cartBadge = document.querySelector(".badge");
  
    cartIcon.addEventListener("click", function () {
      cart.classList.add("open-cart");
    });
  
    closeCartIcon.addEventListener("click", function () {
      cart.classList.remove("open-cart");
    });
  
    let cartCount = 0;
    const addToCartButtons = document.querySelectorAll(".add-btn");
  
    const addProductToCart = (parent) => {
      const name = parent.querySelector("h3").textContent;
      const price = parent.querySelector("p").textContent;
      const imgSrc = parent.querySelector("img").src;
  
      const cartItem = document.createElement("div");
  
      cartItem.innerHTML = `
                    <img src=${imgSrc} alt="" />
                    <p>${name}</p>
                    <p>${price}</p>
                    <i><img src="/img/basurero.png" alt="Icono Quitar" class="delete-icon"/></i>
            `;
  
      cart.appendChild(cartItem);
  
      cartCount++;
      cartBadge.textContent = cartCount;
  
      const deleteIcon = cartItem.querySelector(".delete-icon");
  
      deleteIcon.addEventListener("click", () => {
        cartItem.remove();
        cartCount--;
        cartBadge.textContent = cartCount;
      });
    };
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const parent = button.parentElement;
        addProductToCart(parent);
      });
    });
  });
  

