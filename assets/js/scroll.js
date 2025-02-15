document.addEventListener("DOMContentLoaded", function () {
    const downButton = document.querySelector(".down-button a");
    if (downButton) {
        downButton.addEventListener("click", function (event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
