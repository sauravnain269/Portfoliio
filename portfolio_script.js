document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust this value to align with your fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active link in navbar based on scroll position
window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;

    // Get sections by their IDs and calculate their offset from the top
    document.querySelectorAll('section').forEach((section, index) => {
        const offsetTop = section.offsetTop - document.querySelector('nav').offsetHeight;
        const offsetBottom = offsetTop + section.offsetHeight;

        // Highlight the link in the navbar that corresponds to the current section
        if (scrollDistance >= offsetTop && scrollDistance < offsetBottom) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            document.querySelectorAll('nav a')[index].classList.add('active');
        }
    });
});