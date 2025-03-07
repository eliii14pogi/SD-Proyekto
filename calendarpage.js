// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Update date and time every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Calendar Functionality
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Sample events data (you would typically fetch this from a server)
const events = [
    { date: new Date(2025, 1, 14),  },
    { date: new Date(2025, 1, 15),  },
    { date: new Date(2025, 1, 20),  },
    { date: new Date(2025, 1, 22),  },
    { date: new Date(2025, 1, 27),  }
];

// Function to generate calendar
function generateCalendar(year, month) {
    const calendarDates = document.getElementById('calendarDates');
    calendarDates.innerHTML = '';
    
    // Update header
    document.getElementById('calendarYear').textContent = year;
    document.getElementById('calendarMonth').textContent = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
    
    // Get first day of month and last day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Get the number of days in the month
    const daysInMonth = lastDay.getDate();
    
    // Get the last day of the previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // Add days from previous month
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.className = 'date inactive-day';
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'date-number';
        dayNumber.textContent = prevMonthLastDay - i;
        
        dayElement.appendChild(dayNumber);
        calendarDates.appendChild(dayElement);
    }
    
    // Add days of current month
    const today = new Date();
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'date';
        
        // Check if this is the current day
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayElement.classList.add('current-day');
        }
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'date-number';
        dayNumber.textContent = i;
        
        dayElement.appendChild(dayNumber);
        
        // Check for events on this day
        const thisDate = new Date(year, month, i);
        
        events.forEach(event => {
            if (event.date.getDate() === thisDate.getDate() && 
                event.date.getMonth() === thisDate.getMonth() && 
                event.date.getFullYear() === thisDate.getFullYear()) {
                
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.textContent = event.title;
                dayElement.appendChild(eventElement);
            }
        });
        
        calendarDates.appendChild(dayElement);
    }
    
    // Add days from next month
    const totalDaysShown = firstDayOfWeek + daysInMonth;
    const daysFromNextMonth = Math.ceil(totalDaysShown / 7) * 7 - totalDaysShown;
    
    for (let i = 1; i <= daysFromNextMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'date inactive-day';
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'date-number';
        dayNumber.textContent = i;
        
        dayElement.appendChild(dayNumber);
        calendarDates.appendChild(dayElement);
    }
}

// Initialize calendar
generateCalendar(currentYear, currentMonth);

// Event listeners for navigation
document.getElementById('prevMonth').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById('nextMonth').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

// Button event listeners for navigation
document.getElementById('menuBtn').addEventListener('click', function() {
    alert('Navigating to Menu page');
});

document.getElementById('inventoryBtn').addEventListener('click', function() {
    alert('Navigating to Inventory page');
    // In a real app, you would redirect to the inventory page
    // window.location.href = 'inventory.html';
});

document.getElementById('historyBtn').addEventListener('click', function() {
    alert('Navigating to History page');
});

document.getElementById('dateTimeBtn').addEventListener('click', function() {
    alert('Navigating to Date and Time settings');
});

// Add click event for dates
document.addEventListener('click', function(e) {
    if (e.target.closest('.date')) {
        const dateElement = e.target.closest('.date');
        const dateNumber = dateElement.querySelector('.date-number').textContent;
        
        if (!dateElement.classList.contains('inactive-day')) {
            alert(`You clicked on ${new Date(currentYear, currentMonth, dateNumber).toDateString()}`);
            // Here you would typically open a modal or navigate to a day view
        }
    }
});

function redirectToInventory(){
    window.location.href = 'secondpage.html';
}