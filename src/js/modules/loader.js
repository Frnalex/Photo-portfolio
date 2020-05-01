document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("loader") === null) {
        const loader = document.querySelector(".loader");

        loader.style.display = "flex";
        setTimeout(function () {
            loader.style.opacity = 0;
            setTimeout(function () {
                loader.style.display = "none";
            }, 500);
            sessionStorage.setItem("loader", "done");
        }, 2000);
    }
});
