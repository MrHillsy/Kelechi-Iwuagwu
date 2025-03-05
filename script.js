// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCircle(entry.target);
              observer.unobserve(entry.target); // Stop observing after animation starts
          }
      });
  }, { threshold: 0.5 });
  
  document.querySelectorAll(".circle").forEach(circle => observer.observe(circle));
  
  function animateCircle(circle) {
      const percentage = parseInt(circle.getAttribute("data-percentage"), 10);
      let currentPercentage = 0;
      const interval = setInterval(() => {
          if (currentPercentage >= percentage) {
              clearInterval(interval);
              return;
          }
          currentPercentage++;
          circle.style.setProperty("--percentage", currentPercentage);
          circle.querySelector("span").textContent = `${currentPercentage}%`;
      }, 20);
  }
  

    // See More button functionality
    const seeMoreButton = document.getElementById("see-more");
    const hiddenCards = document.querySelectorAll(".photo-card.hidden");

    if (!seeMoreButton || hiddenCards.length === 0) {
        console.error("See More button or hidden cards are missing from the DOM.");
        return;
    }

    seeMoreButton.addEventListener("click", () => {
        hiddenCards.forEach(card => {
            card.classList.toggle("hidden");
        });

        if (seeMoreButton.textContent === "See More") {
            const firstRevealedCard = hiddenCards[0];
            if (firstRevealedCard) {
                firstRevealedCard.scrollIntoView({ behavior: "smooth" });
            }
        }

        seeMoreButton.textContent = seeMoreButton.textContent === "See More" ? "See Less" : "See More";
        console.log(`See More button clicked: ${seeMoreButton.textContent}`); // Debugging log
    });

    // Hero Section Animations
    gsap.to(".hero-content h1", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".hero-content p", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });
    gsap.to(".hero-content .btn", { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" });
});

// Ensure GSAP is correctly included and no errors are present
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  // Move the slides
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);



