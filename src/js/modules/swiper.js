import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const swiperContainer = document.querySelector(".swiper-container");

if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
        init: false,
        slidesPerView: 1,
        loop: true,
        speed: 800,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "coverflow", // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 0, // Depth offset in px (slides translate in Z axis)
            slideShadows: false, // Enables slides shadows
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        hashNavigation: {
            replaceState: true,
        },
        a11y: {
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
        },
        parallax: true,
    });

    window.addEventListener("load", function () {
        swiper.init();
    });
}
