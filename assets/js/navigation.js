document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".nav-button");
    const navMenu = document.querySelector(".nav-menu");

    navButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from immediately closing the menu
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navMenu.style.display = "none"; // Forcefully hide the menu
        } else {
            navMenu.classList.add("active");
            navMenu.style.display = "flex"; // Show the menu when active
        }
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !navButton.contains(event.target)) {
            navMenu.classList.remove("active");
            navMenu.style.display = "none"; // Ensure menu is hidden when clicking outside
        }
    });
});
