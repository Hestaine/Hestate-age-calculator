const menuBtn = document.querySelector(".menuBtn");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");
const contacBtn = document.querySelector(".contact-btn");
const contacSection = document.getElementById("contact-info");
const getAge = document.querySelector(".get-age");
const calculateAge = document.querySelector(".calculate-section");
const calculateClose = document.querySelector(".calculate-close");
const calculateText = document.querySelector(".calculate-text");
const input = document.querySelector(".calculate-input");
const age = document.querySelector(".age");
const overlay = document.querySelector(".overlay");

// Web functions
// Menu open
const openMenu = function () {
  nav.classList.remove("hidden");
  menuBtn.classList.add("hidden");
};
// Menu close
const closeMenu = function () {
  nav.classList.add("hidden");
  menuBtn.classList.remove("hidden");
};
// Calculator open
const calculatorOpen = function () {
  calculateAge.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Calculator close
const calculatorClose = function () {
  calculateAge.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
getAge.addEventListener("click", calculatorOpen);
calculateClose.addEventListener("click", calculatorClose);
