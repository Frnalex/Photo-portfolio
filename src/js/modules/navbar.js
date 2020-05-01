import gsap from "gsap";

const body = document.querySelector("body");
const container = document.querySelector(".container");
const navIcon = document.querySelector(".nav__icon");
const navContainer = document.querySelector(".nav__container");
const navItems = document.querySelectorAll(".nav__item a");
const imgBloc = document.querySelector(".nav__imgBloc");
const imgBlocOverlay = document.querySelector(".nav__imgBloc--overlay");

let toggle = 0;

const navTL = gsap.timeline({ paused: true });

navTL
    .to(body, { duration: 0.1, overflow: "hidden" })
    .to(container, { duration: 0.5, opacity: 0.8, filter: "blur(5px)", y: 100 })
    .to(navContainer, { duration: 0.5, y: 0, ease: "power2.Out" }, "-=0.5")
    .to(navItems, { stagger: 0.08, duration: 0.3, y: 0, ease: "power3.out" }, "-=0.2");

navIcon.addEventListener("click", () => {
    if (toggle === 0) {
        toggle++;
        navIcon.classList.add("active");
        navTL.timeScale(1).play();
    } else {
        toggle--;
        navIcon.classList.remove("active");
        navTL.timeScale(2).reverse();
    }
});

navItems.forEach((item) =>
    item.addEventListener("click", () => {
        toggle--;
        navTL.timeScale(2).reverse();
    })
);

// Hover links
// ==================
let lastItem = "";

navItems.forEach((item) =>
    item.addEventListener("mouseenter", () => {
        imgBlocOverlay.style.top = "100%";
        imgBloc.classList.remove("bg-" + lastItem);
        imgBloc.classList.add("bg-" + item.getAttribute("data-name"));
    })
);

navItems.forEach((item) =>
    item.addEventListener("mouseleave", () => {
        lastItem = item.getAttribute("data-name");
        imgBlocOverlay.style.top = "0";
    })
);
