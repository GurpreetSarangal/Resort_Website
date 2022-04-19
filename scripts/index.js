console.log('This is javascript file of index file');


//  here we set on click event on the menu btn 
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("open");
    document.querySelector(".sidebar").classList.toggle("show");
});


// swiper js 
const swiper = new Swiper('.swiper', {

   autoplay: {
       delay: 4000, 
       disableOnInteraction: false,
   },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  AOS.init();