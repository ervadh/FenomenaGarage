document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Gallery Modal
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-bs-img');
            const modalImage = galleryModal.querySelector('#galleryModalImage');
            modalImage.src = imgSrc;
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add animation class when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// WhatsApp function
function sendWhatsApp() {
    const phone = '6281298623199';
    const message = 'Halo Fenomena Garage, saya ingin bertanya tentang...';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}