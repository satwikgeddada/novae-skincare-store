document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1'; // Default to 1 if no ID is passed for demonstration
    
    const product = getProductById(productId);
    const container = document.getElementById('product-detail-container');
    
    // 2. Handle invalid product ID
    if (!product) {
        container.innerHTML = `
            <div class="text-center" style="padding: 5rem 0;">
                <i class="ph ph-warning-circle" style="font-size: 4rem; color: var(--color-brown); margin-bottom: 1rem;"></i>
                <h2>Product not found</h2>
                <a href="shop.html" class="btn btn-primary" style="margin-top: 2rem;">Return to Shop</a>
            </div>
        `;
        return;
    }

    // 3. Update Page Title
    document.title = `${product.name} | NOVAÉ`;

    // 4. Generate Thumbnails (Since we only have 1 image per mock product, we generate variations to simulate the UI)
    const thumbnails = [
        product.image,
        product.image + '&q=70', 
        product.image + '&q=60'
    ];

    // 5. Fetch Related Products
    const allProducts = getProducts();
    const related = allProducts.filter(p => p.id !== product.id).slice(0, 4);

    const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;

    // 6. Inject HTML
    container.innerHTML = `
        <!-- Top Section -->
        <div class="pdp-top">
            <!-- Left: Images -->
            <div class="pdp-images">
                <div class="pdp-main-image">
                    <img id="mainImage" src="${product.image}" alt="${product.name}">
                </div>
                <div class="pdp-thumbnails">
                    ${thumbnails.map((src, idx) => `
                        <button type="button" aria-label="View image ${idx + 1}" class="pdp-thumb ${idx === 0 ? 'active' : ''}" onclick="changeImage(this, '${src}')">
                            <img src="${src}" alt="Thumbnail ${idx+1}">
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Right: Info -->
            <div class="pdp-info">
                ${product.badge ? `<span class="pdp-badge">${product.badge}</span>` : ''}
                <h1 class="pdp-title">${product.name}</h1>
                
                <div class="pdp-rating">
                    <div class="stars">
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="${product.rating >= 4.8 ? 'ph-fill ph-star' : 'ph-fill ph-star-half'}"></i>
                    </div>
                    <span>${product.rating} (${product.reviewCount} reviews)</span>
                </div>

                <div class="pdp-price-wrap">
                    <span class="pdp-price">${formatPrice(product.price)}</span>
                    ${hasOriginalPrice ? `<span class="pdp-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>

                <p class="pdp-short-desc">${product.shortDescription}</p>

                <div class="pdp-actions">
                    <div class="quantity-selector">
                        <button type="button" onclick="updateQty(-1)" aria-label="Decrease quantity"><i class="ph ph-minus" aria-hidden="true"></i></button>
                        <label for="qtyInput" class="visually-hidden">Quantity</label>
                        <input type="number" id="qtyInput" value="1" min="1" max="10" readonly>
                        <button type="button" onclick="updateQty(1)" aria-label="Increase quantity"><i class="ph ph-plus" aria-hidden="true"></i></button>
                    </div>
                    <button type="button" class="btn btn-primary btn-add-cart" onclick="addToCartPdp()">Add to Cart</button>
                    <button type="button" class="btn btn-icon btn-wishlist wishlist-btn" data-product-id="${product.id}" onclick="toggleWishlist('${product.id}', this)" aria-label="Add ${product.name} to wishlist">
                        <i class="ph ph-heart" aria-hidden="true"></i>
                    </button>
                </div>
                <button type="button" class="btn btn-outline btn-buy-now" onclick="addToCartPdp(true)">Buy It Now</button>

                <div class="pdp-accordion">
                    <div class="accordion-item">
                        <h4>Benefits</h4>
                        <ul>
                            ${product.benefits.map(b => `<li><i class="ph ph-check"></i> ${b}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="accordion-item">
                        <h4>Key Ingredients</h4>
                        <p>${product.ingredients.join(', ')}</p>
                    </div>
                    <div class="accordion-item">
                        <h4>How to Use</h4>
                        <p>Apply 2-3 drops to clean, dry skin. Gently press into the face and neck until fully absorbed. Use morning and night for best results.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Section: Full Details -->
        <div class="pdp-bottom section">
            <div class="pdp-full-desc text-center">
                <h2>The Details</h2>
                <p>${product.description}</p>
            </div>
        </div>

        <!-- Bottom Section: Customer Reviews -->
        <div class="pdp-reviews section bg-beige" style="padding: 4rem 2rem; margin: 0 -5%;">
            <div class="container text-center">
                <h2>Real Results</h2>
                <div style="display:flex; justify-content:center; gap:0.5rem; color:var(--color-gold); font-size:1.5rem; margin-bottom:2rem;">
                    <i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>
                </div>
                <p style="font-style:italic; font-size:1.1rem; max-width:600px; margin:0 auto;">
                    "I am absolutely obsessed with the ${product.name}. It changed my entire routine and my skin has never felt better. The texture is luxurious and the results are instant."
                </p>
                <p style="margin-top:1rem; font-family:var(--font-serif); font-weight:600;">— Verified Customer</p>
            </div>
        </div>

        <!-- Related Products -->
        <div class="pdp-related section">
            <div class="section-header">
                <h2>You May Also Like</h2>
            </div>
            <div class="product-grid">
                ${related.map(p => {
                    const hasOrgPrice = p.originalPrice && p.originalPrice > p.price;
                    return `
                    <div class="product-card">
                        <div class="product-img-wrapper">
                            ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                            <button type="button" class="wishlist-btn" aria-label="Add ${p.name} to wishlist" data-product-id="${p.id}" onclick="toggleWishlist('${p.id}', this)">
                                <i class="ph ph-heart" aria-hidden="true"></i>
                            </button>
                            <a href="product.html?id=${p.id}" aria-label="View ${p.name}">
                                <img src="${p.image}" alt="${p.name}">
                            </a>
                        </div>
                        <div class="product-info">
                            <p class="product-category">${p.category}</p>
                            <a href="product.html?id=${p.id}"><h3 class="product-title">${p.name}</h3></a>
                            <div class="product-price-wrap">
                                <span class="product-price">${formatPrice(p.price)}</span>
                                ${hasOrgPrice ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // --- Interactive Functions ---

    window.changeImage = function(element, src) {
        document.getElementById('mainImage').src = src;
        document.querySelectorAll('.pdp-thumb').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    };

    window.updateQty = function(change) {
        const input = document.getElementById('qtyInput');
        let val = parseInt(input.value) + change;
        if (val < 1) val = 1;
        if (val > 10) val = 10;
        input.value = val;
    };

    window.addToCartPdp = function(redirect = false) {
        const qty = document.getElementById('qtyInput').value;
        CartService.addToCart(product.id, qty);
        showGlobalToast(`Added ${qty}x ${product.name} to your cart.`);

        if(redirect) {
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 800);
        }
    };
    
    // Sync wishlist buttons initialized by dynamic rendering
    setTimeout(() => {
        initializeWishlistButtons();
    }, 50);
});
