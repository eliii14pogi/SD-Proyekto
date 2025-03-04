document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const addEventButton = document.getElementById("add-event-button");

    // Sample events (You can modify or fetch dynamically)
    let events = [
        { day: "Monday", time: "2 PM - 5 PM", title: "Securities Regulation", color: "#c8f7c5" },
        { day: "Tuesday", time: "10 AM - 12 PM", title: "Corporate Finance", color: "#f7c5c5" },
        { day: "Tuesday", time: "1 PM - 4 PM", title: "Entertainment Law", color: "#f7f79c" },
        { day: "Wednesday", time: "11 AM - 12 PM", title: "Writing Seminar", color: "#c5e1f7" },
        { day: "Wednesday", time: "2 PM - 5 PM", title: "Securities Regulation", color: "#c8f7c5" },
        { day: "Thursday", time: "10 AM - 12 PM", title: "Corporate Finance", color: "#f7c5c5" },
        { day: "Thursday", time: "1 PM - 4 PM", title: "Entertainment Law", color: "#f7f79c" }
    ];

    function renderCalendar() {
        calendar.innerHTML = ""; // Clear existing content
        
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        
        days.forEach(day => {
            const column = document.createElement("div");
            column.className = "calendar-day";
            column.innerHTML = `<div class="day-header">${day}</div>`;
            
            events.forEach(event => {
                if (event.day === day) {
                    const eventBlock = document.createElement("div");
                    eventBlock.className = "event";
                    eventBlock.style.backgroundColor = event.color;
                    eventBlock.innerHTML = `<strong>${event.title}</strong><br>${event.time}`;
                    column.appendChild(eventBlock);
                }
            });
            calendar.appendChild(column);
        });
    }

    addEventButton.addEventListener("click", function () {
        const title = prompt("Enter event title:");
        const day = prompt("Enter day (Monday - Friday):");
        const time = prompt("Enter time (e.g., 2 PM - 5 PM):");
        const color = prompt("Enter event color (e.g., #f7c5c5):");
        
        if (title && day && time && color) {
            events.push({ day, time, title, color });
            renderCalendar();
        } else {
            alert("Invalid input. Please try again.");
        }
    });
    
    renderCalendar();
});
