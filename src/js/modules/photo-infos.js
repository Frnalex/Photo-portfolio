import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const btnInfos = document.querySelectorAll(".photo__btnInfos");

btnInfos.forEach((btn) =>
    btn.addEventListener("click", () => {
        const photoFigcaption = btn.parentNode;
        const photoTitle = photoFigcaption.querySelector(".photo__title");
        const photoDescription = photoFigcaption.querySelector(".photo__description");
        const btnClose = photoFigcaption.querySelector(".photo__btnClose");

        if (!photoFigcaption.classList.contains("active")) {
            photoFigcaption.classList.add("active");
            gsap.to(photoTitle, { duration: 0.3, opacity: 0, y: "-10%", ease: "power1.out" });
            gsap.to(btn, { opacity: 0, duration: 0.3, ease: "power1.out" });
            gsap.to(btnClose, { opacity: 1, transform: "rotate(0)", duration: 0.3, delay: 0.3, ease: "power1.out" });
            gsap.fromTo(
                photoDescription,
                { opacity: 0, transform: "translateY(10px)" },
                { opacity: 1, transform: "translateY(0)", duration: 0.5, delay: 0.1, ease: "power1.out" }
            );
        } else {
            photoFigcaption.classList.remove("active");
            gsap.to(photoTitle, { duration: 0.5, opacity: 1, y: "0", delay: 0.3 });
            gsap.to(btn, { opacity: 1, duration: 0.3, ease: "power1.out", delay: 0.3 });
            gsap.to(btnClose, { opacity: 0, transform: "rotate(-135deg)", duration: 0.3, ease: "power1.out" });
            gsap.fromTo(
                photoDescription,
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0, transform: "translateY(10px)", duration: 0.5, ease: "power1.out" }
            );
        }
    })
);
