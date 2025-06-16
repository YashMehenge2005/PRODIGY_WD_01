// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Highlight active menu item on click and hover
const navLinks = document.querySelectorAll('.nav-item a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active');
    });
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
}); 