document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Services - Fade In from Left
    gsap.from("#services", {
        opacity: 0,
        x: -50, // Moves in from the left
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#services",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // Contribution to Society - Fade In from Right
    gsap.from("#contribution", {
        opacity: 0,
        x: 50, // Moves in from the right
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contribution",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // Notable People - Zoom In
    gsap.from("#notable", {
        opacity: 0,
        scale: 0.8, // Zoom effect
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#notable",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // Testimonials - Fade In Up
    gsap.from("#testimonials", {
        opacity: 0,
        y: 50, // Moves up from below
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(section => {
        gsap.to(section, {
            opacity: 1,
            visibility: "visible", // Ensures it fully appears
            y: 0, // Moves it back to normal position
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%", // Triggers when 85% in view
                toggleActions: "play none none none"
            }
        });
    });
});
