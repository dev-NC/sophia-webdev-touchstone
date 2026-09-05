const subscribeBtn = document.querySelector('.footer-newsletter input[type="submit"]');

subscribeBtn?.addEventListener('click', () => {
    alert('Thank you for subsribing.');
});

const feedbackSubmitBtn = document.querySelector('.contact-us-content input[type="submit"]');

feedbackSubmitBtn?.addEventListener('click', () => {
    alert('Thank you for your message.');
});

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

addToCartBtns?.forEach(btn => btn.addEventListener('click', () => {
    alert('Item added to the cart.');
}));

const processOrderBtn = document.querySelector('.process-order-btn');

processOrderBtn?.addEventListener('click', () => {
    alert('Thank you for your order.');
});

const clearCartBtn = document.querySelector('.clear-cart-btn');

clearCartBtn?.addEventListener('click', () => {
    alert('Cart cleared.');
});

const cartModal = document.querySelector('.cart-modal');
const openCartBtn = document.querySelector('.open-cart-btn');

openCartBtn?.addEventListener('click', () => {
    cartModal.showModal();
});

const closeCartBtn = document.querySelector('.close-cart-btn');

closeCartBtn?.addEventListener('click', () => {
    cartModal.close();
});

const shopNowBtn = document.querySelector('.shop-now-btn');

shopNowBtn?.addEventListener('click', () => {
    cartModal.close();
});
