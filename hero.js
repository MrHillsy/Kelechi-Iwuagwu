document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    // Auto-slide every 5 seconds
    setInterval(changeSlide, 5000);

    // GSAP Animation for Hero Text
    gsap.to(".hero-content h1", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".hero-content p", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });
    gsap.to(".hero-content .btn", { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Empowering Growth Through Knowledge";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

document.addEventListener("DOMContentLoaded", function() {
    // Lock scrolling on page load
    document.body.classList.add("locked");

    // Select the "Learn More" button
    const learnMoreBtn = document.querySelector(".btn");

    // When the button is clicked
    learnMoreBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default button behavior

        // Unlock scrolling
        document.body.classList.remove("locked");

        // Show the About section properly
        const aboutSection = document.querySelector("#about");
        aboutSection.style.opacity = "1";
        aboutSection.style.visibility = "visible";
        aboutSection.style.transform = "translateY(0)"; // Reset position for smooth animation

        // Smoothly scroll to the About section
        setTimeout(() => {
          // Adjust scroll position for full visibility
setTimeout(() => {
    window.scrollTo({
        top: aboutSection.offsetTop - 50, // Adjusts the scroll to avoid cutting the section title
        behavior: "smooth"
    });
}, 200);
        }, 200); // Slight delay to ensure it appears first

        // Optional: Remove the fixed hero section so it's not stuck
        setTimeout(() => {
            document.getElementById("hero").style.position = "relative";
        }, 1000);
    });
});
