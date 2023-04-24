import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // effect cube for foto
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // autoplay for foto
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: true,
  // },

  loop: true,

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
});
