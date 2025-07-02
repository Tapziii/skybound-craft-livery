
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.geometric-background');
        if (background) {
            background.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add hover effects to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '20';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = 'auto';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Function to scroll to contact section
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to handle project start
function startProject() {
    // You can customize this function to handle form submission
    // or redirect to a contact form
    alert('Ready to start your project! Please contact me at your preferred method.');
    scrollToContact();
}

// Add some interactive animations
function addInteractiveEffects() {
    // Rotate elements slightly on hover
    const rotatableElements = document.querySelectorAll('.service-content, .stat, .request-block');
    rotatableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const currentTransform = this.style.transform || '';
            const rotation = Math.random() * 4 - 2; // Random rotation between -2 and 2 degrees
            this.style.transform = currentTransform + ` rotate(${rotation}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset to original transform
            this.style.transform = this.style.transform.replace(/rotate\([^)]*\)/g, '');
        });
    });
}

// Initialize interactive effects when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveEffects);

// Add some chaos to the background elements
function animateBackgroundElements() {
    const shapes = document.querySelectorAll('.shape, .triangle, .dot');
    shapes.forEach((shape, index) => {
        // Random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
            
            // Reset position after some time
            setTimeout(() => {
                shape.style.transform = shape.style.transform.replace(/translate\([^)]*\)/g, '');
            }, 2000);
        }, 5000 + index * 1000);
    });
}

// Start background animations
document.addEventListener('DOMContentLoaded', animateBackgroundElements);
