let swiper = new Swiper(".swiper-container", {
  // Опции Swiper
  loop: true, // зацикливание слайдов
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});