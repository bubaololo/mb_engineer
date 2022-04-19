var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".quest__slider_bar_wrapper",
    type: "bullets",
    currentClass: "quest__slider_dot",
    progressbarFillClass: ".swiper-pagination-bullet-active",
  },

  navigation: {
    nextEl: ".quest__next",
    prevEl: ".quest__prev",
  },
  effect: "fade",
  allowTouchMove: false,
});




const bar = document.querySelector(".quest__slider_bar_wrapper");
const bullets = bar.children;


bullets[1].classList.add("bullet_next_next");

function findActiveBullet(collection) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].classList.contains("swiper-pagination-bullet-active")) {
      return i;
    }
  }
  return false;
}

function removeAdditionClasses(collection) {
  for (var i = 0; i < collection.length; i++) {

     if (collection[i].classList.contains("bullet_next_next")) {
      collection[i].classList.remove("bullet_next_next");
    } else if (collection[i].classList.contains("bullet_checked")) {
      collection[i].classList.remove("bullet_checked");
    }
  }
}

function findChecked(collection, currentBullet) {
  for (var i = 0; i < currentBullet; i++) {
    collection[i].classList.add("bullet_checked");
  }
}

const target = document.querySelector(".quest__slider_bar_wrapper");


const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    let currentBullet = findActiveBullet(bullets);
    removeAdditionClasses(bullets);
    findChecked(bullets, currentBullet);
    bullets[currentBullet + 1].classList.add("bullet_next_next");
  });
});


const config = { attributes: true, childList: true, characterData: true };


observer.observe(target, config);
