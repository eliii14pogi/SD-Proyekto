function goBack() {
    window.history.back();
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").textContent = dateTimeString;
}


function goBack(){
    window.location.href = 'secondpage.html';
}

setInterval(updateDateTime, 1000);
updateDateTime();

