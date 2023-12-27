var currentSlide = 0;
var slides = document.getElementsByClassName('slide');
var titleElement = document.getElementById('title');
var faintArrowLeft = document.getElementById('faint-arrow-left');
var faintArrowRight = document.getElementById('faint-arrow-right');


function showSlide(slideIndex) {
  if (slideIndex >= 0 && slideIndex < slides.length) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Check if the condition is true for the current slide
    if (!shouldSkipSlide(slideIndex)) {
      slides[slideIndex].style.display = 'block';
    } else {
      // Skip the current slide and move to the next one
      showSlide(slideIndex + 1);
      return;
    }

    currentSlide = slideIndex;
    updateTitle();
    updateArrowVisibility();
  }
}

function shouldSkipSlide(slideIndex) {

  // List of states to skip for
  var skipStates = ['CT', 'KS', 'LI', 'MA', 'MD', 'ME', 'MI', 'MN', 'ND', 'NH', 'NJ', 'NO', 'NY', 'PA', 'RI', 'UT', 'VA', 'WY'];

  // Check if the slide with the index slideIndex has the class "hide2kADD"
  // and if the value of "state2" is one of the specified states
  var slide = slides[slideIndex];
	
  if (slide.classList.contains('hide2kADD')) {
    var state2Element = document.getElementById('state2');
    if (state2Element && skipStates.includes(state2Element.value)) {
      return true; // Skip the slide
    }
  }
	
  if (slide.classList.contains('wlVsTerm')) {
    var wlVsTerm = getURLParameter('wlVsTerm');
	if (wlVsTerm !== "true") {
	return true; // Skip the slide
	}
  }
  return false; // Don't skip the slide
}


function updateTitle() {
  var slideTitle = slides[currentSlide].getElementsByTagName('h1')[0].innerText;
  titleElement.innerText = slideTitle;
}

function updateArrowVisibility() {
  faintArrowLeft.style.display = currentSlide === 0 ? 'none' : 'block';
  faintArrowRight.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';

  // Check if the current slide contains an element with the id "needs-anal-slide"
  var currentSlideContainsNeedsAnalysis = slides[currentSlide].querySelector('#needs-anal-slide');
  
  if (currentSlideContainsNeedsAnalysis) {
    faintArrowRight.style.display = 'none';
  }
}

function nextSlide() {
  // Pause the video if it's playing
  var videoElement = document.getElementsByTagName('video')[0];
    // Check if the current slide contains an element with the id "needs-anal-slide"
  var currentSlideContainsNeedsAnalysis = slides[currentSlide].querySelector('#needs-anal-slide');
  
  if (!videoElement.paused || currentSlideContainsNeedsAnalysis) {
    videoElement.pause();
  } else
    showSlide(currentSlide + 1);
}

function prevSlide() {
  // Pause the video if it's playing
  var videoElement = document.getElementsByTagName('video')[0];
  if (!videoElement.paused) {
    videoElement.pause();
  }

  // Determine the previous slide index while skipping slides based on the condition
  var previousSlideIndex = currentSlide - 1;
  while (previousSlideIndex >= 0 && shouldSkipSlide(previousSlideIndex)) {
    previousSlideIndex--;
  }

  // Show the previous slide
  showSlide(previousSlideIndex);
}


function handleClick(event) {
  var clickX = event.clientX;
  var clickY = event.clientY;
  var windowHeight = window.innerHeight;
  var slideChangeThreshold = 0.15 * windowHeight; // 15% of page height

  var videoElement = document.getElementsByTagName('video')[0];
  var videoRect = videoElement.getBoundingClientRect();
  var videoTop = videoRect.top;
  var videoBottom = videoRect.bottom;
  var videoLeft = videoRect.left;
  var videoRight = videoRect.right;

  var clickedElement = event.target;
  var hasNeedsContainerClass = clickedElement.classList.contains('needs-container');
  var hasBigBoyClass = clickedElement.classList.contains('option-bigboy-container');
  var hasButtonGotoClass = clickedElement.classList.contains('button-goto');


  if (
    clickY > slideChangeThreshold
    && !(clickX >= videoLeft && clickX <= videoRight && clickY >= videoTop && clickY <= videoBottom)
    && !hasNeedsContainerClass
    && !hasBigBoyClass
    && !hasButtonGotoClass
  ) {
    var windowWidth = window.innerWidth;
    var windowWidthHalf = windowWidth / 2;

    if (clickX < windowWidthHalf - 50) {
      prevSlide();
    } else if (clickX > windowWidthHalf + 50) {
      nextSlide();
    }
  } else {
    var clickedSlideIndex = Array.from(slides).findIndex(function (slide) {
      return slide.contains(clickedElement);
    });

    if (clickedSlideIndex !== -1) {
      showSlide(clickedSlideIndex);
    }
  }
}

var formElements = document.querySelectorAll('.no-slide');
for (var i = 0; i < formElements.length; i++) {
  formElements[i].addEventListener('click', function (event) {
    event.stopPropagation();
  });
}

document.getElementById('forward-button').addEventListener('click', nextSlide);
document.getElementById('back-button').addEventListener('click', prevSlide);

document.addEventListener('keydown', function (event) {
  var videoElement = document.getElementsByTagName('video')[0];
  var activeElement = document.activeElement;

  if (event.key === 'ArrowRight' && !videoElement.paused) {
    event.preventDefault(); // Block arrow right key press
  } else if (event.key === 'ArrowLeft' && !videoElement.paused) {
    event.preventDefault(); // Block arrow left key press
  } else if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }
});

document.addEventListener('click', handleClick);

document.addEventListener('mousemove', function (event) {
  var mousePositionX = event.clientX;
  var mousePositionY = event.clientY;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var widthThreshold = 10; // 10 pixels
  var heightThreshold = 10; // 10 pixels

  if (
    mousePositionX < widthThreshold
    || mousePositionX > windowWidth - widthThreshold
    || mousePositionY < heightThreshold
    || mousePositionY > windowHeight - heightThreshold
  ) {
    faintArrowLeft.style.opacity = 0.0;
    faintArrowRight.style.opacity = 0.0;
  } else if (mousePositionX < windowWidth / 2) {
    faintArrowLeft.style.opacity = 1;
    faintArrowRight.style.opacity = 0.0;
  } else {
    faintArrowLeft.style.opacity = 0.0;
    faintArrowRight.style.opacity = 1;
  }
});

// Add event listener to the skip button
document.getElementById('skip-button').addEventListener('click', function () {
  goToSlideByElementId('needs-anal-slide');
});

// Function to go to a slide by element ID
function goToSlideByElementId(elementId) {
  var slides = document.getElementsByClassName('slide');

  var slideIndex = Array.from(slides).findIndex(function (slide) {
    return slide.querySelector('#' + elementId);
  });

  if (slideIndex !== -1) {
    showSlide(slideIndex);
  }
}


showSlide(currentSlide);
