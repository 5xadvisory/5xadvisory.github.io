/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for Slide-Up Animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const slideUpElements = document.querySelectorAll(".slide-up");
    slideUpElements.forEach(el => observer.observe(el));

    // 2. Smooth Scrolling for anchor links (if added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
