// NOVAÉ Mock Product Database
// This data can be used across the homepage, shop, product, and cart pages.

const products = [
    {
        id: '1',
        name: 'Dew Drop Hydrating Serum',
        category: 'Serums',
        price: 1499,
        originalPrice: 1899,
        rating: 4.9,
        reviewCount: 428,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop',
        shortDescription: 'Intense hydration for a dewy, glass-skin finish.',
        description: 'Our Dew Drop Hydrating Serum features multi-molecular weight Hyaluronic Acid to penetrate multiple layers of the skin, delivering instant and long-lasting hydration. Enhanced with botanical extracts to soothe and plump the skin.',
        ingredients: ['Hyaluronic Acid', 'Centella Asiatica', 'Glycerin', 'Panthenol'],
        benefits: ['Deep Hydration', 'Plumps Skin', 'Repairs Barrier'],
        concern: ['Dryness', 'Dullness'],
        badge: 'Bestseller'
    },
    {
        id: '2',
        name: 'Cloud Milk Cleanser',
        category: 'Cleansers',
        price: 899,
        originalPrice: 1099,
        rating: 4.7,
        reviewCount: 315,
        image: 'images/cloud_milk_cleanser.jpg',
        shortDescription: 'Gentle, pH-balanced cleansing milk.',
        description: 'A deeply comforting and milky cleanser that melts away makeup, SPF, and daily impurities without stripping the skin of its natural moisture. Leaves skin feeling soft like a cloud.',
        ingredients: ['Oat Milk Extract', 'Ceramides', 'Squalane', 'Aloe Vera'],
        benefits: ['Gentle Cleansing', 'Maintains pH Balance', 'Soothes Redness'],
        concern: ['Sensitive Skin', 'Redness'],
        badge: ''
    },
    {
        id: '3',
        name: 'Calm Skin Moisturizer',
        category: 'Moisturizers',
        price: 1299,
        originalPrice: 1499,
        rating: 4.8,
        reviewCount: 275,
        image: 'images/moisturizer.jpeg',
        shortDescription: 'A lightweight, cooling gel-cream moisturizer.',
        description: 'Formulated specifically for easily irritated skin, this lightweight moisturizer immediately cools and calms on contact. It absorbs instantly, providing lasting moisture without a greasy finish.',
        ingredients: ['Niacinamide', 'Green Tea Extract', 'Allantoin', 'Licorice Root'],
        benefits: ['Reduces Inflammation', 'Oil Control', 'Lightweight Hydration'],
        concern: ['Sensitive Skin', 'Acne-Prone'],
        badge: 'Award Winner'
    },
    {
        id: '4',
        name: 'Sun Veil SPF 50',
        category: 'Sun Care',
        price: 999,
        originalPrice: null,
        rating: 4.6,
        reviewCount: 512,
        image: 'images/SunveilSunscreenCream.jpeg',
        shortDescription: 'Invisible, weightless broad-spectrum protection.',
        description: 'Our next-generation SPF 50 provides robust broad-spectrum protection with zero white cast. This silky, serum-like sunscreen doubles as a makeup primer while protecting against UVA/UVB rays and blue light.',
        ingredients: ['Zinc Oxide', 'Vitamin E', 'Red Algae', 'Meadowfoam Seed Oil'],
        benefits: ['Broad Spectrum Protection', 'No White Cast', 'Blue Light Defense'],
        concern: ['Sun Protection', 'Aging'],
        badge: 'Must Have'
    },
    {
        id: '5',
        name: 'Botanical Glow Toner',
        category: 'Toners',
        price: 799,
        originalPrice: 999,
        rating: 4.7,
        reviewCount: 198,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop',
        shortDescription: 'A refreshing, balancing essence toner.',
        description: 'Infused with organic rose water and natural botanicals, this essence toner preps the skin to better absorb serums and creams. It refines pores and leaves a subtle, healthy glow.',
        ingredients: ['Rose Water', 'Witch Hazel', 'Cucumber Extract', 'Chamomile'],
        benefits: ['Balances Skin', 'Refines Pores', 'Refreshes'],
        concern: ['Dullness', 'Uneven Texture'],
        badge: ''
    },
    {
        id: '6',
        name: 'Night Bloom Face Oil',
        category: 'Face Oils',
        price: 1899,
        originalPrice: 2299,
        rating: 4.9,
        reviewCount: 156,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
        shortDescription: 'Antioxidant-rich overnight repair oil.',
        description: 'Wake up to transformed skin. This luxurious, nutrient-dense face oil is packed with potent antioxidants and essential fatty acids to repair the skin barrier and lock in moisture overnight.',
        ingredients: ['Rosehip Oil', 'Marula Oil', 'Vitamin C', 'Evening Primrose'],
        benefits: ['Overnight Repair', 'Brightens', 'Improves Elasticity'],
        concern: ['Aging', 'Dryness', 'Hyperpigmentation'],
        badge: 'Luxury'
    },
    {
        id: '7',
        name: 'Soft Reset Exfoliant',
        category: 'Exfoliants',
        price: 1199,
        originalPrice: null,
        rating: 4.5,
        reviewCount: 210,
        image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop',
        shortDescription: 'Gentle AHA/BHA liquid exfoliant.',
        description: 'A mild yet effective liquid exfoliant that gently sloughs away dead skin cells, unclogs pores, and evens out skin tone. Designed to be gentle enough for regular use without causing irritation.',
        ingredients: ['Lactic Acid (AHA)', 'Salicylic Acid (BHA)', 'Mugwort', 'Sodium Hyaluronate'],
        benefits: ['Unclogs Pores', 'Evens Skin Tone', 'Smooths Texture'],
        concern: ['Uneven Texture', 'Acne-Prone'],
        badge: 'New'
    },
    {
        id: '8',
        name: 'Barrier Cream',
        category: 'Moisturizers',
        price: 1599,
        originalPrice: 1999,
        rating: 4.8,
        reviewCount: 389,
        image: 'images/barrier_cream.jpeg',
        shortDescription: 'Rich, restorative cream for compromised skin barriers.',
        description: 'A thick, buttery cream designed as a rescue treatment for over-exfoliated, dry, or irritated skin. It creates a protective seal over the skin, allowing it to heal and rebuild its natural defense system.',
        ingredients: ['Ceramide NP', 'Shea Butter', 'Cholesterol', 'Colloidal Oatmeal'],
        benefits: ['Deeply Restores Barrier', 'Intense Moisture', 'Soothes Irritation'],
        concern: ['Sensitive Skin', 'Dryness', 'Compromised Barrier'],
        badge: 'Bestseller'
    }
];

// Utility functions that could be used across the app
function getProducts() {
    return products;
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

// --- Global Cart Service ---
const CartService = {
    getCart() {
        return JSON.parse(localStorage.getItem('novae_cart')) || [];
    },
    saveCart(cart) {
        localStorage.setItem('novae_cart', JSON.stringify(cart));
        this.updateNavCount();
    },
    addToCart(productId, quantity = 1) {
        const cart = this.getCart();
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += parseInt(quantity);
        } else {
            cart.push({ id: productId, qty: parseInt(quantity) });
        }
        this.saveCart(cart);
    },
    updateNavCount() {
        const count = this.getCart().reduce((sum, item) => sum + item.qty, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            // Badge pop animation
            el.classList.remove('pop');
            void el.offsetWidth;
            el.classList.add('pop');
        });
    },
    clearCart() {
        localStorage.removeItem('novae_cart');
        this.updateNavCount();
    }
};

// --- Global Wishlist Service ---
const WishlistService = {
    getWishlist() {
        return JSON.parse(localStorage.getItem('novae_wishlist')) || [];
    },
    toggle(productId) {
        let list = this.getWishlist();
        const index = list.indexOf(String(productId));
        let added = false;
        if (index > -1) {
            list.splice(index, 1);
        } else {
            list.push(String(productId));
            added = true;
        }
        localStorage.setItem('novae_wishlist', JSON.stringify(list));
        return added;
    },
    has(productId) {
        return this.getWishlist().includes(String(productId));
    }
};

window.toggleWishlist = function(productId, btnElement) {
    const isAdded = WishlistService.toggle(productId);
    const icon = btnElement.querySelector('i');
    
    if (isAdded) {
        icon.classList.add('ph-fill');
        icon.style.color = '#e74c3c';
        showGlobalToast('Added to wishlist.');
    } else {
        icon.classList.remove('ph-fill');
        icon.style.color = 'inherit';
        showGlobalToast('Removed from wishlist.');
    }
};

window.showGlobalToast = function(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ph ph-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    void toast.offsetWidth;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

window.initializeWishlistButtons = function() {
    document.querySelectorAll('.wishlist-btn[data-product-id]').forEach(btn => {
        const id = btn.getAttribute('data-product-id');
        const icon = btn.querySelector('i');
        if (WishlistService.has(id)) {
            icon.classList.add('ph-fill');
            icon.style.color = '#e74c3c';
        } else {
            icon.classList.remove('ph-fill');
            icon.style.color = 'inherit';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    CartService.updateNavCount();
    initializeWishlistButtons();

    // Mobile Hamburger Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLeft = document.querySelector('.nav-left');
    if (mobileBtn && navLeft) {
        mobileBtn.addEventListener('click', () => {
            navLeft.classList.toggle('open');
        });
    }
});
