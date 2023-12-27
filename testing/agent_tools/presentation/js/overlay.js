// JavaScript Document
// Get references to the overlay and button
const overlay = document.getElementById('overlay');
const openOverlayButton = document.getElementById('openOverlay');

// Function to open the overlay
function openOverlay() {
    overlay.style.display = 'block';
}

// Function to close the overlay
function closeOverlay() {
    overlay.style.display = 'none';
}

// Event listeners
openOverlayButton.addEventListener('click', openOverlay);

// Close the overlay when clicking anywhere
overlay.addEventListener('click', closeOverlay);