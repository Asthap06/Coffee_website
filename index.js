const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",  () => {
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// Close the menu when the close button is clicked
menuCloseButton.addEventListener("click",  () => menuOpenButton.click()); 

//initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween : 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0 : {
        slidesPerView: 1
    },
    768 : {
        slidesPerView: 2
    },
    1024 : {
        slidesPerView: 3
    }
  }

 });