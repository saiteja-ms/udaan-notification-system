// Function to fetch the response message from the API
function fetchNotification() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            showNotification(data.setup, data.punchline);
        })
        .catch(error => console.error(error));
}

// Function to display the notification
function showNotification(setup, punchline) {
    const notificationContainer = document.getElementById("notificationContainer");
    const notificationSound = document.getElementById("notificationSound");

    notificationContainer.innerHTML = <><strong>${setup}</strong><p>${punchline}</p></>
      
    notificationContainer.style.display = "block";
    notificationSound.onplay();

    // Hide the notification after 5 seconds
    setTimeout(() => {
        notificationContainer.style.display = "none";
    }, 5000);
}

// Call fetchNotification() every 10 seconds
setInterval(fetchNotification, 10000);