function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('datetime').innerHTML = `${date}<br>${time}`;
}

// Function to go back to the previous page
function goFirstPage() {
    window.location.href = "firstpage.html"; // Make sure the file name matches exactly
}


function redirectToInventory(){
    window.location.href = 'inventorypage.html';
}

function redirectToCalendar(){
    window.location.href = 'calendarpage.html';
}

function redirectToSafetyGuidelines(){
    window.location.href = 'sg.html';
}
// Update immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
