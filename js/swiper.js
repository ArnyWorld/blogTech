// const swiper = new Swiper('header .swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//     autoplay: {
//         delay: 5000,
//       },
  
//     // If we need pagination
//     pagination: {
//       el: 'header .swiper-pagination',
//     },
    
//     // Navigation arrows
//     navigation: {
//       nextEl: 'header .swiper-button-next',
//       prevEl: 'header .swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: 'header .swiper-scrollbar',
//       hide:true
//     },
//   });

  var swiper2 = new Swiper(".testimonials .mySwiper", {
    slidesPerView:3,
    loop:true,
    pagination: {
      el: ".testimonials .swiper-pagination",
      clickable: true,
    },
  });