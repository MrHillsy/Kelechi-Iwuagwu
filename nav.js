document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Change navbar background on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });

  // Mobile Menu Toggle
  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
  });

  // Close menu when a nav link is clicked (on mobile)
  navLinks.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
      }
  });
});
