// script.js
window.addEventListener('load', function() {
  // Hide the loading screen
  var loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none';

  // Your existing code to reveal delayed sections
  var delayedSections = document.getElementsByClassName('delayed-section');
  for (var i = 0; i < delayedSections.length; i++) {
    delayedSections[i].classList.remove('hidden');
  }

  var needsAnalysisSlide = document.querySelector('.slide');
  needsAnalysisSlide.addEventListener('scroll', function(event) {
    event.stopPropagation();
  });
});