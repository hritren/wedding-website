document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("wedding-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const guests = [];
        document.querySelectorAll("#guest-table tr:not(:first-child)").forEach(row => {
            const guestName = row.cells[0].querySelector("input").value;
            const guestMeal = row.cells[1].querySelector("select").value;
            const guestStay = row.cells[2].querySelector("select").value;
            
            guests.push({
                name: guestName,
                meal: guestMeal,
                stay: guestStay
            });
        });

        const formData = {
            name: document.getElementById("name").value,
            requests: document.getElementById("requests").value,
            guests: guests
        };

        emailjs.send("service_y8w5x76", "template_dshcgc2", {
            to_email: "hristoandnicolewedding@gmail.com",
            from_name: formData.name,
            message: JSON.stringify(formData, null, 2)
        }, "Yswbky3jIvqWxt0Rb")
        .then(response => {
            alert("Анкетата беше успешно изпратена");
            console.log("Success:", response);
        })
        .catch(error => {
            alert("Изникна проблем с изпращането на анкетата. Моля опитайте пак");
            console.error("Error:", error);
        });
    });
});
