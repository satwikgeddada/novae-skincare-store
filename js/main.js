/**
 * NOVAÉ — Premium Micro-Interactions
 * Style: Slow, Elegant, Subtle
 * All animations respect prefers-reduced-motion
 */

// ─────────────────────────────────────────────
// 1. Scroll-triggered Fade-in (IntersectionObserver)
// ─────────────────────────────────────────────
(function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Fire once only
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    // Observe every major section and card
    document.querySelectorAll([
        '.section',
        '.product-card',
        '.concern-card',
        '.ingredient-item',
        '.testimonial-card',
        '.story-grid',
        '.banner-content',
        '.newsletter-container',
        '.pdp-top',
        '.pdp-full-desc',
        '.cart-layout',
        '.empty-cart',
    ].join(', ')).forEach((el, i) => {
        el.classList.add('fade-in-target');
        // Stagger cards in a grid
        if (el.classList.contains('product-card') ||
            el.classList.contains('testimonial-card') ||
            el.classList.contains('ingredient-item') ||
            el.classList.contains('concern-card')) {
            const siblings = el.parentElement.children;
            const index = Array.from(siblings).indexOf(el);
            el.style.transitionDelay = `${index * 80}ms`;
        }
        observer.observe(el);
    });
})();

// ─────────────────────────────────────────────
// 2. Wishlist Heart Burst Animation
// ─────────────────────────────────────────────
(function patchWishlistAnimation() {
    const original = window.toggleWishlist;
    if (!original) return;

    window.toggleWishlist = function(productId, btnElement) {
        original(productId, btnElement);

        const icon = btnElement.querySelector('i');
        // Only animate when adding (icon has ph-fill now)
        if (icon && icon.classList.contains('ph-fill')) {
            btnElement.classList.remove('heart-burst');
            // Reflow to restart animation
            void btnElement.offsetWidth;
            btnElement.classList.add('heart-burst');
            btnElement.addEventListener('animationend', () => {
                btnElement.classList.remove('heart-burst');
            }, { once: true });
        }
    };
})();

// ─────────────────────────────────────────────
// 3. Mobile Menu — slide down transition
// ─────────────────────────────────────────────
(function patchMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLeft   = document.querySelector('.nav-left');
    if (!mobileBtn || !navLeft) return;

    // Remove the existing click handler set in products.js by cloning the node
    const newBtn = mobileBtn.cloneNode(true);
    mobileBtn.parentNode.replaceChild(newBtn, mobileBtn);

    newBtn.addEventListener('click', () => {
        const isOpen = navLeft.classList.contains('open');
        if (isOpen) {
            navLeft.classList.add('closing');
            navLeft.addEventListener('animationend', () => {
                navLeft.classList.remove('open', 'closing');
            }, { once: true });
        } else {
            navLeft.classList.add('open');
        }
        // Animate icon
        newBtn.querySelector('i').className = isOpen
            ? 'ph ph-list'
            : 'ph ph-x';
    });

    // Close menu when a nav link is clicked
    navLeft.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLeft.classList.add('closing');
            navLeft.addEventListener('animationend', () => {
                navLeft.classList.remove('open', 'closing');
            }, { once: true });
            newBtn.querySelector('i').className = 'ph ph-list';
        });
    });
})();

// ─────────────────────────────────────────────
// 4. Smooth Product Image Swap (PDP)
// ─────────────────────────────────────────────
(function patchImageSwap() {
    const original = window.changeImage;
    if (!original) return;

    window.changeImage = function(thumbEl, src) {
        const mainImg = document.getElementById('mainImage');
        if (!mainImg) { original(thumbEl, src); return; }

        // Fade out
        mainImg.style.opacity = '0';
        mainImg.style.transform = 'scale(1.03)';

        setTimeout(() => {
            original(thumbEl, src);
            // Fade in
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1)';
        }, 200);
    };
})();

// ─────────────────────────────────────────────
// 5. Announcement bar subtle scroll fade
// ─────────────────────────────────────────────
(function announcementFade() {
    const bar = document.querySelector('.announcement-bar');
    if (!bar) return;
    bar.classList.add('fade-in-target', 'is-visible');
})();
