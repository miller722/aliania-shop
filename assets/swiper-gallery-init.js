// let productSwiper;

// document.addEventListener("DOMContentLoaded", () => {
//   productSwiper = new Swiper(".myProductSwiper", {
//     loop: false, // ВАЖЛИВО — ІНАКШЕ СЛАЙДИ ДУБЛЮЮТЬСЯ
//     slidesPerView: 1,
//     spaceBetween: 12,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// });

// document.addEventListener("variant:changed", function(event) {
//   const variant = event.detail.variant;
//   const variantId = variant.id.toString();

//   const slides = document.querySelectorAll(".swiper-slide");

//   slides.forEach(slide => {
//     const variantList = slide.dataset.variants
//       ? slide.dataset.variants.split(",")
//       : [];

//     if (variantList.includes(variantId) || variantList.length === 0) {
//       slide.style.display = "";
//     } else {
//       slide.style.display = "none";
//     }
//   });

//   // Видаляємо зайві "духовні" слайди
//   productSwiper.updateSlides();

//   // Оновлюємо логіку свайпера
//   productSwiper.update();

//   // Повертаємо свайпер на перший доступний слайд
//   productSwiper.slideTo(0);
// });
