const subscribeBtn = document.querySelector('.footer-newsletter input[type="submit"]');

subscribeBtn?.addEventListener('click', () => {
    alert('Thank you for subsribing.');
});

const feedbackSubmitBtn = document.querySelector('.contact-us-content input[type="submit"]');

feedbackSubmitBtn?.addEventListener('click', () => {
    alert('Thank you for your message.');
});

var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
const promoCtaBtn = document.querySelector('.cta-btn');

promoCtaBtn?.addEventListener('click', function(e) {
    const itemName = this.getAttribute('data-item-name');
    const imageSource = this.getAttribute('data-image-source');

    addToCart(itemName, imageSource);

    alert('Your item has been added to the cart');
});

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

addToCartBtns?.forEach(btn => btn.addEventListener('click', function(e) {
    const itemName = this.getAttribute('data-item-name');
    const imageSource = this.getAttribute('data-image-source');

    addToCart(itemName, imageSource);

    alert('Your item has been added to the cart');
}));

const clearCartBtn = document.querySelector('.clear-cart-btn');

clearCartBtn?.addEventListener('click', () => {
    clearCart();
    refreshCart();
});

const processOrderBtn = document.querySelector('.process-order-btn');

processOrderBtn?.addEventListener('click', () => {
    alert('Thank you for your order.');
    clearCart();
    refreshCart();
});

const cartModal = document.querySelector('.cart-modal');
const openCartBtn = document.querySelector('.open-cart-btn');

openCartBtn?.addEventListener('click', () => {
    cartModal.showModal();
    refreshCart();
});

const closeCartBtn = document.querySelector('.close-cart-btn');

closeCartBtn?.addEventListener('click', () => {
    cartModal.close();
});

function addToCart(itemName, imageSource) {
    cartItems.push({ itemName, imageSource });
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function clearCart() {
    cartItems = [];
    sessionStorage.removeItem('cartItems');
}

function refreshCart() {
    const cart = document.querySelector('.cart-items');

    cart.innerHTML = '';

    if (!cartItems || cartItems.length === 0) 
    {
        cart.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Dive into the weekly favorites</p>
                <button class="shop-now-btn">Shop Now</button>
            </div>
        `;

        const shopNowBtn = cart.querySelector('.shop-now-btn');

        shopNowBtn?.addEventListener('click', () => {
            cartModal.close();
        });

        return;
    }

    const contents = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.imageSource}">
            <h2>${item.itemName}</h2>
        </div>
    `).join('');

    cart.innerHTML = contents;
}
