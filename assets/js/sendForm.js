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

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            to_email: "hritren.gaming@gmail.com",
            message: JSON.stringify(formData, null, 2)
        }, "YOUR_PUBLIC_KEY")
        .then(response => {
            alert("RSVP Submitted Successfully!");
            console.log("Success:", response);
        })
        .catch(error => {
            alert("Error submitting RSVP. Please try again.");
            console.error("Error:", error);
        });
    });
});
