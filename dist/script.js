"use script";
const menuBtn = document.querySelector(".menu");
const menuClose = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");
const contacBtn = document.querySelector(".contact-btn");
const contacSection = document.getElementById("contact-info");
const getAge = document.querySelector(".get-age");
const calculateAge = document.querySelector(".calculate-section");
const calculateClose = document.querySelector(".calculate-close");
const calculateText = document.querySelector(".calculate-text");
const checkAge = document.querySelector(".check");
const age = document.querySelector(".age");
const overlay = document.querySelector(".overlay");
const year = new Date().getFullYear();

// Web functions
// Menu open
const openMenu = function () {
  nav.classList.remove("sm:hidden");
  menuBtn.classList.add("hidden");
};

// Menu close
const closeMenu = function () {
  nav.classList.add("sm:hidden");
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

// Calculate age
const calcAge = function () {
  const input = document.querySelector(".calculate-input").value;
  const ageValue = year - input;
  if (ageValue > 100) {
    age.textContent = `Don't cap (${ageValue})🧢`;
  } else if (ageValue > 80) {
    age.textContent = `Amazing (${ageValue})👴`;
  } else if (ageValue > 60) {
    age.textContent = `Woah (${ageValue})🧓`;
  } else if (ageValue > 30) {
    age.textContent = `Adult (${ageValue})👨`;
  } else if (ageValue > 18) {
    age.textContent = `Young adult (${ageValue})💪`;
  } else if (ageValue > 15) {
    age.textContent = `Almost an adult (${ageValue})🤭`;
  } else if (ageValue > 8) {
    age.textContent = `Happy growing (${ageValue})🧒`;
  } else if (ageValue > 0) {
    age.textContent = `I'm suprised (${ageValue})👶`;
  } else if (isNaN(ageValue)) {
    age.textContent = `please input a number`;
  }
  calculateText.textContent = "Thanks for inputing😁";
};

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
getAge.addEventListener("click", calculatorOpen);
calculateClose.addEventListener("click", calculatorClose);
checkAge.addEventListener("click", calcAge);
