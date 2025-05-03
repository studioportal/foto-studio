/**
 * Foto Estudio Mario - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the contact form
    initContactForm();
    
    // Initialize gallery filtering
    initGalleryFilter();
});

/**
 * Initialize the contact form with validation and submission handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            // In a real implementation, you would send the form data to a server
            // For this static site, we'll just show a success message
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
}

/**
 * Initialize gallery filtering functionality
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * Smooth scrolling for navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== '#' && document.querySelector(targetId)) {
            e.preventDefault();
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Navbar scroll behavior - add background on scroll
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});
