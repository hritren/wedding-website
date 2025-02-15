document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".nav-button");
    const navMenu = document.querySelector(".nav-menu");

    navButton.addEventListener("click", function (event) {
        event.stopPropagation();
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navMenu.style.display = "none";
        } else {
            navMenu.classList.add("active");
            navMenu.style.display = "flex";
        }
    });

    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !navButton.contains(event.target)) {
            navMenu.classList.remove("active");
            navMenu.style.display = "none";
        }
    });
});
