function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}
document.getElementById('hero-carousel').setAttribute('data-bs-interval', '3000');

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".changecontent", {
        strings: ["Luxury", "Adventure", "Relaxation", "Serenity", "Beauty"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    });
});

