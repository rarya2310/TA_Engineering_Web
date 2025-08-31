// TA Engineering Website - Main JavaScript
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

    // Sliding text bar animation
    const slidingContent = document.querySelector('.sliding-text-content');
    if (slidingContent) {
        const messages = slidingContent.querySelectorAll('p');
        const totalMessages = messages.length;
        let currentMessageIndex = 0;
        const messageHeight = 24;

        slidingContent.style.transition = 'transform 0.5s ease-in-out';

        const slideMessages = () => {
            currentMessageIndex++;
            slidingContent.style.transform = `translateY(-${currentMessageIndex * messageHeight}px)`;

            // Reset to beginning when we reach the end
            if (currentMessageIndex === totalMessages - 1) {
                setTimeout(() => {
                    slidingContent.style.transition = 'none';
                    slidingContent.style.transform = 'translateY(0px)';
                    currentMessageIndex = 0;
                    slidingContent.offsetHeight; // Force reflow
                    slidingContent.style.transition = 'transform 0.5s ease-in-out';
                }, 500);
            }
        };

        setInterval(slideMessages, 1500);
    }

    // Reveal-on-scroll animation for cards
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    console.log('Found reveal elements:', revealElements.length);
    
    if (revealElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('Revealing element:', entry.target);
                    
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
});

// === IMAGE CAROUSEL FUNCTIONALITY === 
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel every 5 seconds (optional)
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}
