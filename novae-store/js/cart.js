document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    let appliedDiscount = parseFloat(sessionStorage.getItem('novae_promo')) || 0; // Persist promo code in session
    
    function renderCart() {
        const cart = CartService.getCart();
        
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart text-center">
                    <i class="ph ph-shopping-bag" style="font-size: 5rem; color: var(--color-sage); margin-bottom: 1.5rem;"></i>
                    <h2 style="margin-bottom: 1rem; font-family: var(--font-serif); font-size: 2rem;">Your cart is waiting for something beautiful.</h2>
                    <p style="color: #666; margin-bottom: 2.5rem;">Discover our premium, clean formulations.</p>
                    <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            `;
            return;
        }

        let subtotal = 0;
        const allProducts = getProducts();
        
        const cartItemsHtml = cart.map((item) => {
            const product = allProducts.find(p => p.id === item.id);
            if (!product) return ''; 
            
            const itemTotal = product.price * item.qty;
            subtotal += itemTotal;
            
            return `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <a href="product.html?id=${product.id}"><h3 class="cart-item-title">${product.name}</h3></a>
                        <p class="cart-item-price">${formatPrice(product.price)}</p>
                    </div>
                    <div class="cart-item-qty">
                        <div class="quantity-selector" style="height: 40px; border-color: #ddd;">
                            <button type="button" onclick="updateCartItem('${item.id}', -1)" aria-label="Decrease quantity for ${product.name}"><i class="ph ph-minus" aria-hidden="true"></i></button>
                            <label for="qty-${item.id}" class="visually-hidden">Quantity</label>
                            <input type="number" id="qty-${item.id}" value="${item.qty}" readonly aria-label="Quantity">
                            <button type="button" onclick="updateCartItem('${item.id}', 1)" aria-label="Increase quantity for ${product.name}"><i class="ph ph-plus" aria-hidden="true"></i></button>
                        </div>
                        <button type="button" class="cart-item-remove" onclick="removeCartItem('${item.id}')" aria-label="Remove ${product.name}">Remove</button>
                    </div>
                    <div class="cart-item-total">
                        ${formatPrice(itemTotal)}
                    </div>
                </div>
            `;
        }).join('');

        const discountAmt = subtotal * appliedDiscount;
        const postDiscount = subtotal - discountAmt;
        const shipping = postDiscount >= 999 ? 0 : 99;
        const total = postDiscount + shipping;

        cartContainer.innerHTML = `
            <div class="cart-layout">
                <div class="cart-items-wrapper">
                    <div class="cart-headers">
                        <span>Product</span>
                        <span>Quantity</span>
                        <span class="text-right">Total</span>
                    </div>
                    ${cartItemsHtml}
                </div>
                
                <div class="cart-summary bg-beige">
                    <h3>Order Summary</h3>
                    
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span>${formatPrice(subtotal)}</span>
                    </div>
                    
                    ${appliedDiscount > 0 ? `
                    <div class="summary-row text-sage">
                        <span>Discount (NOVA10)</span>
                        <span>-${formatPrice(discountAmt)}</span>
                    </div>
                    ` : ''}
                    
                    <div class="summary-row">
                        <span>Shipping</span>
                        <span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                    </div>
                    ${shipping > 0 ? `<p class="shipping-hint">Spend ${formatPrice(999 - postDiscount)} more for Free Shipping!</p>` : ''}
                    
                    <div class="summary-total">
                        <span>Total</span>
                        <span>${formatPrice(total)}</span>
                    </div>
                    
                    <div class="promo-box">
                        <label for="promoInput" class="visually-hidden">Promo code</label>
                        <input type="text" id="promoInput" placeholder="Promo code (Try NOVA10)">
                        <button type="button" onclick="applyPromo()" class="btn btn-outline" style="padding: 0.5rem 1rem;">Apply</button>
                    </div>
                    
                    <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="checkout()">Secure Checkout</button>
                </div>
            </div>
        `;
    }

    // Handlers mapped to global window object
    window.updateCartItem = function(id, change) {
        const cart = CartService.getCart();
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) {
                removeCartItem(id);
                return;
            }
            CartService.saveCart(cart);
            renderCart();
        }
    };

    window.removeCartItem = function(id) {
        let cart = CartService.getCart();
        cart = cart.filter(i => i.id !== id);
        CartService.saveCart(cart);
        renderCart();
    };

    window.applyPromo = function() {
        const val = document.getElementById('promoInput').value.trim().toUpperCase();
        if (val === 'NOVA10') {
            appliedDiscount = 0.10;
            sessionStorage.setItem('novae_promo', '0.10');
            showGlobalToast('Promo code NOVA10 applied successfully!');
            renderCart();
        } else if (val !== '') {
            showGlobalToast('Invalid promo code.');
        }
    };

    window.checkout = function() {
        showGlobalToast('Thank you for shopping! Your order has been placed.');
        CartService.clearCart();
        sessionStorage.removeItem('novae_promo');
        appliedDiscount = 0;
        renderCart();
    };

    // Initial render
    renderCart();
});
