document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
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
  