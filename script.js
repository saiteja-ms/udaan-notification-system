// Preload the audio file
const notificationSound = new Audio("rickroll.mp3");
notificationSound.preload = "auto";

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

    const notificationTitle = document.getElementById("notificationTitle");
    const notificationMessage = document.getElementById("notificationMessage");

    notificationTitle.textContent = setup;
    notificationMessage.textContent = punchline;
  
    notificationContainer.style.display = "flex";
    notificationSound.currentTime = 0; // Reset the audio to the beginning
    notificationSound.play();

    // Hide the notification after 5 seconds
    setTimeout(() => {
        notificationContainer.style.display = "none";
    }, 5000);
}

// Call fetchNotification() initially and then every 10 seconds
fetchNotification();
setInterval(fetchNotification, 10000);
