document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    const resultCount = document.getElementById('resultCount');
    const emptyState = document.getElementById('empty-state');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');

    // Get products from products.js
    let allProducts = getProducts();
    
    // Initial State
    let state = {
        category: 'All',
        search: '',
        sort: 'featured'
    };

    function renderProducts(productsToRender) {
        if (productsToRender.length === 0) {
            productGrid.style.display = 'none';
            emptyState.style.display = 'block';
            resultCount.textContent = `Showing 0 products`;
            return;
        }

        productGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        resultCount.textContent = `Showing ${productsToRender.length} ${productsToRender.length === 1 ? 'product' : 'products'}`;

        productGrid.innerHTML = productsToRender.map(product => {
            const hasOriginalPrice = product.originalPrice && product.originalPrice > product.price;
            const badgeHtml = product.badge ? `<span class="badge">${product.badge}</span>` : '';
            
            return `
                <div class="product-card">
                    <div class="product-img-wrapper">
                        ${badgeHtml}
                        <button type="button" class="wishlist-btn" aria-label="Add ${product.name} to wishlist" data-product-id="${product.id}" onclick="toggleWishlist('${product.id}', this)">
                            <i class="ph ph-heart" aria-hidden="true"></i>
                        </button>
                        <a href="product.html?id=${product.id}" aria-label="View ${product.name}">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <button type="button" class="quick-add" aria-label="Add ${product.name} to cart" onclick="addToCart('${product.id}')">Add to Cart</button>
                    </div>
                    <div class="product-info">
                        <div class="product-rating">
                            <i class="ph-fill ph-star"></i>
                            <span>${product.rating}</span>
                            <span class="review-count">(${product.reviewCount})</span>
                        </div>
                        <p class="product-category">${product.category}</p>
                        <a href="product.html?id=${product.id}"><h3 class="product-title">${product.name}</h3></a>
                        <div class="product-price-wrap">
                            <span class="product-price">${formatPrice(product.price)}</span>
                            ${hasOriginalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function applyFiltersAndSort() {
        let filtered = [...allProducts];

        // 1. Filter by Category
        if (state.category !== 'All') {
            filtered = filtered.filter(p => p.category === state.category);
        }

        // 2. Filter by Search (Name, Category, or Ingredients)
        if (state.search.trim() !== '') {
            const query = state.search.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.ingredients.some(ing => ing.toLowerCase().includes(query))
            );
        }

        // 3. Sort
        if (state.sort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (state.sort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (state.sort === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        } else {
            // Featured: sort by id (stable original order)
            filtered.sort((a, b) => parseInt(a.id) - parseInt(b.id)); 
        }

        renderProducts(filtered);
        initializeWishlistButtons(); // Sync heart icons after render
    }

    // --- Event Listeners ---

    // Search typing
    searchInput.addEventListener('input', (e) => {
        state.search = e.target.value;
        applyFiltersAndSort();
    });

    // Category button click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active styling
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update state and trigger filter
            state.category = btn.dataset.category;
            applyFiltersAndSort();
        });
    });

    // Sort selection change
    sortSelect.addEventListener('change', (e) => {
        state.sort = e.target.value;
        applyFiltersAndSort();
    });

    // Clear filters button (Empty State)
    clearFiltersBtn.addEventListener('click', () => {
        state.search = '';
        state.category = 'All';
        state.sort = 'featured';
        
        searchInput.value = '';
        sortSelect.value = 'featured';
        
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-category="All"]').classList.add('active');
        
        applyFiltersAndSort();
    });

    // Global Search Button override on Shop page
    const globalSearchBtn = document.querySelector('.nav-right button[aria-label="Search"]');
    if(globalSearchBtn) {
        globalSearchBtn.onclick = (e) => {
            e.preventDefault();
            searchInput.focus();
            window.scrollTo({ top: document.querySelector('.shop-controls').offsetTop - 100, behavior: 'smooth' });
        };
    }

    // Initial render
    applyFiltersAndSort();
});

// Mock Global Handlers
window.addToCart = function(id) {
    const product = getProductById(id);
    CartService.addToCart(id, 1);
    showGlobalToast(`Added ${product.name} to cart!`);
};
