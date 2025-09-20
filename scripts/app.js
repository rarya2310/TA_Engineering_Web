// T.A. Engineering Website - Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logoText = document.querySelector('.logo-text');
    const isInnerPage = body.classList.contains('inner-page');

    // Homepage scroll effects (logo color transition and scroll detection)
    if (logoText && !isInnerPage) {
        const startColor = [255, 255, 255];
        const endColor = [17, 24, 39];
        const animationEndScroll = 250;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (scrollY > 50) {
                body.classList.add('scrolled');
            } else {
                body.classList.remove('scrolled');
            }

            // Animate logo color from white to dark
            const progress = Math.min(scrollY / animationEndScroll, 1);
            const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
            const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
            const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
            logoText.style.setProperty('--logo-color', `rgb(${r}, ${g}, ${b})`);
        };

        handleScroll(); // Initialize
        window.addEventListener('scroll', handleScroll);
    }

    // Reveal-on-scroll animation for cards
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    // Handle transition delays properly
                    const delay = entry.target.style.transitionDelay || '0ms';
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, parseFloat(delay) || 0);
                    
                    observer.unobserve(entry.target); // Stop observing once revealed
                }
            });
        }, { 
            root: null, 
            rootMargin: '0px 0px -50px 0px', 
            threshold: 0.1 
        });

        revealElements.forEach((element) => {
            console.log('Observing element:', element);
            observer.observe(element);
        });
    }
    // === IMAGE CAROUSEL FUNCTIONALITY ===
    // Guard to avoid duplicate declarations on pages without a carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    if (slides.length > 0 && dots.length > 0) {
        let currentSlideIndex = 0;

        window.showSlide = function (index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            if (slides[index]) {
                slides[index].classList.add('active');
                dots[index].classList.add('active');
            }
        };

        window.nextSlide = function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            window.showSlide(currentSlideIndex);
        };

        window.previousSlide = function () {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            window.showSlide(currentSlideIndex);
        };

        window.currentSlide = function (index) {
            currentSlideIndex = index - 1;
            window.showSlide(currentSlideIndex);
        };

        // Initialize first slide
        window.showSlide(currentSlideIndex);

        // Auto-advance carousel every 5 seconds (optional)
        setInterval(window.nextSlide, 5000);
    }
});
