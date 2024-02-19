"use script";
const menuBtn = document.querySelector(".menu");
const menuClose = document.querySelector(".close-menu");
const nav = document.querySelector(".nav");

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

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
