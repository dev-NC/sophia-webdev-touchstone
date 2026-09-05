const cartModal = document.querySelector('.cart-modal');
const openCartBtn = document.querySelector('.open-cart-btn');
const closeCartBtn = document.querySelector('.close-cart-btn');
const shopNowBtn = document.querySelector('.shop-now-btn');

openCartBtn.addEventListener('click', () => {
    cartModal.showModal();
});

closeCartBtn.addEventListener('click', () => {
    cartModal.close();
});

shopNowBtn.addEventListener('click', () => {
    cartModal.close();
});
