import gsap from "gsap";

const container = document.querySelector(".container");
const btnClose = document.querySelector(".about__close");
const btnOpen = document.querySelector(".about");
const aboutContainer = document.querySelector(".about__container");
const aboutImgOverlay = document.querySelector(".about__imgOverlay");

let toggle = 0;

const aboutTL = gsap.timeline({ paused: true });

aboutTL
    .to(container, { duration: 0.5, opacity: 0.8, filter: "blur(5px)", y: -100 })
    .to(aboutContainer, { duration: 0.5, top: "0", ease: "power2.Out" }, "-=0.5")
    .fromTo(btnClose, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.Out" }, "-=0.1")
    .to(aboutImgOverlay, { y: "-100%", duration: 0.5, ease: "power2.Out" }, "-=0.45");

if (btnOpen) {
    btnOpen.addEventListener("click", () => {
        if (toggle === 0) {
            toggle++;
            aboutTL.timeScale(1).play();
        } else {
            toggle--;
            aboutTL.timeScale(2).reverse();
        }
    });

    btnClose.addEventListener("click", () => {
        if (toggle === 1) {
            toggle--;
            aboutTL.timeScale(2).reverse();
        }
    });
}
