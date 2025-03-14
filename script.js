"use strict";

const closeXpopup = document.getElementById("x-close-popup");
const closeArrowMenu = document.getElementById("arrow-close-menu");
const popup = document.querySelector(".popup");
const hamburger = document.querySelector(".hamburger-icon");
const offScreenMenu = document.querySelector(".off-screen-menu");
const wrapper = document.querySelector(".wrapper");
const btnOpen = document.querySelectorAll(".btn--open-popup");
const btnMobileMenu = document.querySelector(".btn--mobile-menu");

// ---------- FORM ----------- //

const contactForm = document.querySelector(".contact-form");
const orderForm = document.getElementById("cakeOrderForm");

const hideElements = function (e) {
  e.style.display = "none";
};

const showElements = function (e) {
  e.style.display = "flex";
};

// Popup close

[closeXpopup, wrapper].forEach((e) => {
  e.addEventListener("click", function () {
    hideElements(popup);
    hideElements(wrapper);
  });
});

// Mobile menu open

hamburger.addEventListener("click", function () {
  wrapper.style.display = "flex";
  offScreenMenu.classList.toggle("active");
  offScreenMenu.classList.add("fade-in-left");
});

// Mobile menu close

[closeArrowMenu, wrapper].forEach((e) => {
  e.addEventListener("click", function () {
    offScreenMenu.classList.add("fade-out-right");
    setTimeout(function () {
      wrapper.style.display = "none";
      offScreenMenu.classList.toggle("active");
      offScreenMenu.classList.remove("fade-in-left");
      offScreenMenu.classList.remove("fade-out-right");
    }, 500);
  });
});

// Close mobile menu -> Open popup

btnMobileMenu.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
  offScreenMenu.classList.remove("fade-in-left");
});

/////////////////////////

btnOpen.forEach((button) => {
  button.addEventListener("click", function () {
    wrapper.style.display = "flex";
    popup.style.display = "flex";
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideElements(popup);
    hideElements(wrapper);
  }
});

///////////////////////////////////

// contactForm.addEventListener("submit", function (event) {
//   setTimeout(() => {
//     event.target.reset();
//   }, 2000);
// });

// orderForm.addEventListener("submit", function (event) {
//   setTimeout(() => {
//     event.target.reset();
//   }, 2000);
// });
