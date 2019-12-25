"use strict";

var navBlock = document.querySelector('#nav'),
    burgerDesk = document.querySelector('.burger'),
    burgerMob = document.querySelector('.burger-mob'),
    img = document.querySelectorAll('.image-link'),
    subnavBtn = document.querySelector('.btn-hide'),
    subnavMenu = document.querySelector('.menu-hide'),
    imageWrappBG = document.querySelectorAll('.wrapp-bg');
imageWrappBG.forEach(function (e) {
  e.addEventListener('mouseover', function () {
    this.style.opacity = 1;
  });
  e.addEventListener('mouseout', function () {
    this.style.opacity = 0;
  });
});

function toggle(e, b, c) {
  if (e && b) {
    e.addEventListener('click', function () {
      b.classList.toggle(c);
    });
  }
}

toggle(burgerDesk, navBlock, 'nav-show');
toggle(burgerMob, navBlock, 'nav-show');
toggle(subnavBtn, subnavMenu, 'menu-active');
var mySwiper = new Swiper('.license-slider', {
  slidesPerView: 6,
  speed: 400,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-prev ',
    prevEl: '.swiper-button-next'
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});