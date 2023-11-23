/*! Слайдер Swiper ========================================================================================================================================================*/

/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
*/

// Подключаем слайдер Swiper из node_modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  const catalogSliders = document.querySelectorAll('.catalog__slider');
  if (catalogSliders.length > 0) {
    catalogSliders.forEach((catalogSlider) => {
      new Swiper(catalogSlider, {
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        slidesPerView: 2,
        spaceBetween: 8,
        speed: 800,
        // Пагинация
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
        // Кнопки "влево/вправо"
        navigation: {
          prevEl: catalogSlider.closest('.catalog').querySelector('.swiper-button-prev'),
          nextEl: catalogSlider.closest('.catalog').querySelector('.swiper-button-next'),
        },
        // Брейкпоинты
				breakpoints: {
          480: {
						slidesPerView: 3,
          },
					768: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 16,
					},
					1400: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				},
        // События
        on: {},
      });
    });
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
});
