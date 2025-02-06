document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const weddingDate = new Date(Date.UTC(2025, 7, 18, 14, 0, 0));
        const now = new Date();
        let timeLeft = weddingDate.getTime() - now.getTime();

        const lastSundayMarch = new Date(now.getFullYear(), 2, 31 - new Date(now.getFullYear(), 2, 31).getDay(), 3, 0, 0);
        const lastSundayOctober = new Date(now.getFullYear(), 9, 31 - new Date(now.getFullYear(), 9, 31).getDay(), 4, 0, 0);
        
        if (now < lastSundayMarch || now >= lastSundayOctober) {
            timeLeft += 3600000;
        }

        if (timeLeft <= 0) {
            document.getElementById("timer").innerHTML = "Денят настъпи!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = `${days} дни, ${hours} часа, ${minutes} минути, ${seconds} секунди`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
