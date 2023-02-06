"use strict";

var navBlock = document.querySelector("#nav"),
    burgerDesk = document.querySelector(".burger"),
    burgerMob = document.querySelector(".burger-mob"),
    img = document.querySelectorAll(".image-link"),
    subnavBtn = document.querySelector(".btn-hide"),
    subnavMenu = document.querySelector(".menu-hide"),
    imageWrappBG = document.querySelectorAll(".wrapp-bg"),
    allButtonsGalery = document.querySelectorAll(".galery-link"),
    allSlidersGalery = document.querySelectorAll(".galery-sliders-wrapp");
imageWrappBG.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    this.style.opacity = 1;
  });
  e.addEventListener("mouseout", function () {
    this.style.opacity = 0;
  });
});

function toggle(e, b, c) {
  if (e && b) {
    e.addEventListener("click", function () {
      b.classList.toggle(c);
    });
  }
}

toggle(burgerDesk, navBlock, "nav-show");
toggle(burgerMob, navBlock, "nav-show");
toggle(subnavBtn, subnavMenu, "menu-active");
var mySwiper = new Swiper(".license-slider", {
  slidesPerView: 6,
  spaceBetween: 30,
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-prev ",
    prevEl: ".swiper-button-next"
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});
var mySwiper1 = new Swiper(".galery-slider", {
  slidesPerView: 1,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // const data = {
//   infoOne: {
//     img: [
//       "images/galery-img1.jpg",
//       "images/develop2.jpg",
//       "images/develop3.jpg",
//     ],
//     title: "Производство работ с замещением грунтов",
//     subtitle: "Общий объем в твёрдом теле: 90.000 м3",
//   },
//   infoTwo: {
//     img: [
//       "images/galery-img1.jpg",
//       "images/develop2.jpg",
//       "images/develop3.jpg",
//     ],
//     title: "Производство работ с замещением грунтов",
//     subtitle: "Общий объем в твёрдом теле: 90.000 м3",
//   },
//   infoThree: {
//     img: [
//       "images/galery-img1.jpg",
//       "images/develop2.jpg",
//       "images/develop3.jpg",
//     ],
//     title: "Производство работ с замещением грунтов",
//     subtitle: "Общий объем в твёрдом теле: 90.000 м3",
//   },
// };
// var galerySlider = document.querySelector(".galery-slider .swiper-wrapper");
// let keys = Object.keys(data);
// addElementToGalerySlider();
// allButtonsGalery.forEach((e, index) => {
//   console.log(keys);
//   e.addEventListener("click", () => {
//     addElementToGalerySlider(data[keys[index]]);
//   });
// });
// function addElementToGalerySlider(e) {
//   console.log(galerySlider);
//   if (!galerySlider.children.length) {
//     data[keys[0]].img.forEach((elem) => {
//       var newElement = document.createElement("div");
//       newElement.classList.add("swiper-slide");
//       newElement.classList.add("slide");
//       newElement.innerHTML = `<img src="${elem}" alt="" />`;
//       galerySlider.appendChild(newElement);
//     });
//   }
//   e.img.forEach((elem) => {
//     var newElement = document.createElement("div");
//     newElement.classList.add("swiper-slide");
//     newElement.innerHTML = ` <img src="${elem}" alt="" />`;
//     galerySlider.appendChild(newElement);
//   });