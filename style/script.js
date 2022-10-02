"use strict";

// ========== Slider ==========//

let index = 0;

function slider() {
  if (index > $a(".slide-item").length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = $a(".slide-item").length - 1;
  }

  $(".slide-list").style.transform = `translateX(-${index * 712}px)`;
}

$(".next").addEventListener("click", () => {
  index++;
  slider();
});

$(".prev").addEventListener("click", () => {
  index--;
  slider();
});

setInterval(() => {
  index++;
  slider();
}, 5000);

// ============= Modal window ==========//

$(".cart").addEventListener("click", () => {
  $(".modal-window").classList.toggle("active");
});

$("#close-btn").addEventListener("click", () => {
  $(".modal-window").classList.toggle("active");
  window.print()
});

$(".calculator-btn").addEventListener("click", () => {
  $(".modal-window").classList.toggle("active");
});

$("#delete-icon").addEventListener("click", () => {
  const newModalText = "Your cart is empty";
  $(".modal-text").innerHTML = newModalText;
});

const sneaker = {
  price: 125,
  amount: 0,
  total: 0,
};

function addToCart() {
  const costProduct = sneaker.price;
  let amountProduct = 1;
  $(".plus").addEventListener("click", () => {
    const amount = sneaker.amount++;
    // const totalCost = sneaker.total + 125 + "$";
    $(".total-cost").innerHTML = costProduct * amount + 125;
    $(".number").innerHTML = amount + 1;
    $(".cart-number").innerHTML = amount + 1;
  });
}

function minusToCart() {
  const costProduct = sneaker.price - 125;
  if (sneaker.amount <= 0) {
    $(".minus").addEventListener("click", () => {
      sneaker.amount--;
      $(".total-cost").innerHTML = costProduct;
      $(".number").innerHTML = sneaker.amount;
      $(".cart-number").innerHTML = sneaker.amount;
    });
  }
}

addToCart();
minusToCart();

$(".dark-mode").addEventListener("click", () => {
  $("body").classList.toggle("dark-mode-active");
  if ("dark-mode-active") {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
});
