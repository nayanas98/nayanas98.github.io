// script.js

// Interactive functionality for portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Example interactive feature: display current date and time
    const dateTimeElement = document.getElementById('current-date-time');
    const currentDate = new Date();
    dateTimeElement.innerText = `Current Date and Time (UTC): ${currentDate.toISOString().substring(0, 19).replace('T', ' ')}`;

    // Additional interactive features can be added here
});
