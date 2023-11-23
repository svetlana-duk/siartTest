/*! Card quick view active ======================================================================================================================================================== */
const cardQuickViewBtns = document.querySelectorAll('.card__quick-view-btn');
if (cardQuickViewBtns.length > 0) {
  cardQuickViewBtns.forEach((cardQuickViewBtn) => {
    cardQuickViewBtn.addEventListener('click', function (e) {
      e.preventDefault();
      cardQuickViewactive();
    });
  });
}
function cardQuickViewactive() {
  alert('Активировано окно быстрого просмотра');
}

/*! Add to cart click ======================================================================================================================================================== */
const cartButtons =document.querySelectorAll('.button--cart');
if (cartButtons.length > 0) {
  cartButtons.forEach(cartButton => {
    cartButton.addEventListener("click", function (e) {
      cartButton.closest('.card__controls').classList.add('is-in-cart');
    });
  });
}