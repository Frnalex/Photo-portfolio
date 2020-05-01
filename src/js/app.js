import "../css/style.scss";

//Modules
import "./modules/swiper";
import "./modules/navbar";
import "./modules/about";
import "./modules/photo-grid";
import "./modules/photo-infos";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});
