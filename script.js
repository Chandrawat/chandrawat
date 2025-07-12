document.addEventListener('DOMContentLoaded', function() {
    // Toggle Navbar for mobile
    let menuBtn = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .navbar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    // Remove navbar on scroll (if active)
    window.onscroll = () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    };

    // Typing Animation (similar to the example portfolio)
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Technical Lead", "Java Developer", "Microservices Expert", "Cloud Engineer"]; // Customize these!
    const typingDelay = 100; // milliseconds per character
    const erasingDelay = 50; // milliseconds per character
    const newTextDelay = 2000; // milliseconds before typing new text

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start the typing animation when the page loads
    if (typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }
});
