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

function goSecondPage() {
    window.location.href = "secondpage.html"; // Make sure the file name matches exactly
}

function redirectToApparatus(){
    window.location.href = "apparatuspage.html";
}

function redirectToChemicals(){
    window.location.href = "chemicalpage.html";
}

updateDateTime();
setInterval(updateDateTime, 1000);
