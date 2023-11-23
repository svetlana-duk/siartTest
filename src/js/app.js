// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = false;

// Подключение основного файла стилей
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
//* Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
// import * as flsFunctions from "./files/functions.js";

/*
? Проверка поддержки webp, добавление класса webp или no-webp для HTML
(i) необходимо для корректного отображения webp из css
*/
// flsFunctions.isWebp();

//? Добавление класса touch для HTML если браузер мобильный
// flsFunctions.addTouchClass();

//? Добавление loaded для HTML после полной загрузки страницы
// flsFunctions.addLoadedClass();

//? Модуль для работы с меню (Бургер)
// flsFunctions.menuInit();
//? Учет плавающей панели на мобильных устройствах при 100vh
// flsFunctions.fullVHfix();

//? Форматирование чисел
// import './libs/wNumb.min.js';

/*
? Модуль работы со спойлерами
*/
// flsFunctions.spollers();

/*
? Модуль работы с табами
*/
// flsFunctions.tabs();

/*
? Модуль "показать еще"
*/
// flsFunctions.showMore();

/*
? Модуль "Ефект хвиль"
*/
// flsFunctions.rippleEffect();

/*
? Модуль "Кастомный курсор"
*/
// flsFunctions.customCursor(true);

/*
? Попапы
*/
import './libs/popup.js'

/*
? Модуль параллакса мышью
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
//* Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/*
? Работа с полями формы
*/
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});

/*
? Oтправка формы
*/
flsForms.formSubmit();

//? Модуль формы "колличество"
flsForms.formQuantity();

//? Модуль звездного рейтинга
// flsForms.formRating();

//? Модуль работы с select
// import './libs/select.js'

//? Модуль работы с календарем
// import './files/forms/datepicker.js'

/*
? (В работе) Модуль работы с масками.
*/
// import "./files/forms/inputmask.js";

/*
? Модуль работы с ползунком
*/
// import "./files/forms/range.js";

/*
? Модуль работы с подсказками (tippy)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
//? Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
//* Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
? Изменение дизайна скроллбара
*/
// import './files/scroll/simplebar.js';

/*
? Ленивая (отложенная) загрузка картинок
*/
import './files/scroll/lazyload.js';

/*
? Наблюдатель за объектами c атрибутом data-watch
*/
// import './libs/watcher.js'

/*
? Модуль поекранной прокрутки
*/
// import './libs/fullpage.js'

/*
? Модуль паралакса
*/
// import './libs/parallax.js'

//? Функции работы скроллом
// import * as flsScroll from "./files/scroll/scroll.js";

/*
? Плавная навигация по странице
*/
// flsScroll.pageNavigation();

/*
? Функционал добавления классов к хедеру при прокрутке
*/
// flsScroll.headerScroll();

/*
? Модуль анимации цифрового счетчика
*/
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
//? Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
//? Масонри сетка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
//* Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
? Динамический адаптив
*/
// import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
//* Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import "./files/script.js";
//============================================================================================================================================================================================================================================