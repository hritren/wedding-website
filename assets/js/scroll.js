document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".down-button a").addEventListener("click", function (event) {
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
