import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',

  // flip effect
  // effect: 'flip',
  //
  loop: true,
  slidesPerView: 1,
  //   spaceBetween: 500,

  // cube effect
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
