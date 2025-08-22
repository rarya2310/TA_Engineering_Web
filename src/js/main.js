// Shared JS for all pages (add page-specific logic as needed)
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logoText = document.querySelector('.logo-text');

    // Skip homepage animation logic on inner pages entirely
    const isInnerPage = body.classList.contains('inner-page');

    if (logoText && !isInnerPage) {
        const startColor = [255, 255, 255];
        const endColor = [17, 24, 39];
        const animationEndScroll = 250;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                body.classList.add('scrolled');
            } else {
                body.classList.remove('scrolled');
            }

            const progress = Math.min(scrollY / animationEndScroll, 1);
            const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
            const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
            const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
            logoText.style.setProperty('--logo-color', `rgb(${r}, ${g}, ${b})`);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }

    const slidingContent = document.querySelector('.sliding-text-content');
    if (slidingContent) {
        const messages = slidingContent.querySelectorAll('p');
        const totalMessages = messages.length;
        let currentMessageIndex = 0;
        const messageHeight = 24;

        slidingContent.style.transition = 'transform 0.5s ease-in-out';

        setInterval(() => {
            currentMessageIndex++;
            slidingContent.style.transform = `translateY(-${currentMessageIndex * messageHeight}px)`;

            if (currentMessageIndex === totalMessages - 1) {
                setTimeout(() => {
                    slidingContent.style.transition = 'none';
                    slidingContent.style.transform = 'translateY(0px)';
                    currentMessageIndex = 0;
                    // force reflow
                    // eslint-disable-next-line no-unused-expressions
                    slidingContent.offsetHeight;
                    slidingContent.style.transition = 'transform 0.5s ease-in-out';
                }, 500);
            }
        }, 1500);
    }

    // Explore Us: wire hover overlay text from a single source
    const sourceP = document.querySelector('#explore-detail-text');
    if (sourceP) {
        const detail = sourceP.textContent.trim();
        document.querySelectorAll('.explore-image-card .hover-text').forEach(el => {
            const p = el.querySelector('p');
            if (p) p.textContent = detail;
        });
    }

    // Reveal-on-scroll: unblur and fade up when cards enter viewport
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

        revealEls.forEach((el) => observer.observe(el));
    }
});
