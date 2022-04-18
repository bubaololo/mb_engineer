var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".quest__next",
      prevEl: ".quest__prev",
    },
    effect: 'fade',
    allowTouchMove: false,

  });