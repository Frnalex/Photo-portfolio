import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const grid = document.querySelector(".grid");

if (grid) {
    const msnry = new Masonry(grid, {
        itemSelector: ".grid__item",
        columnWidth: ".grid__sizer",
        percentPosition: true,
        transitionDuration: 0,
    });

    imagesLoaded(grid).on("progress", function () {
        msnry.layout();
    });

    const gridImages = document.querySelectorAll(".grid__item img:first-child");

    gridImages.forEach((img) =>
        img.addEventListener("load", () => {
            msnry.layout();
        })
    );
}
