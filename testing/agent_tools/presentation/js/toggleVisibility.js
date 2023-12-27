    function toggleEdit(className) {
      const elements = document.getElementsByClassName(className);
      const button = document.getElementById('toggleButton');
      
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.visibility === 'hidden') {
          elements[i].style.visibility = 'visible';
          button.textContent = 'HIDE EDIT';
        } else {
          elements[i].style.visibility = 'hidden';
          button.textContent = 'SHOW EDIT';
        }
      }
    }

    function hideEdit(className) {
      const elements = document.getElementsByClassName(className);
      const button = document.getElementById('toggleButton');
      
      for (let i = 0; i < elements.length; i++) {
          elements[i].style.visibility = 'hidden';
          button.textContent = 'SHOW EDIT';
      }
    }

function checkForIncome() {
  var needsIncomeHourlyA = Number(document.getElementById("needsIncomeHourlyA").value.replace(/\D/g, ''));
  var needsIncomeHourlyB = Number(document.getElementById("needsIncomeHourlyB").value.replace(/\D/g, ''));
  var primaryName2 = document.getElementById("primaryName2").value;
  var spouseName2 = document.getElementById("spouseName2").value;
  var planType = document.getElementById('planType').value;

  // Find the slide containing the "needs-anal-slide" element
  var needsAnalSlideIndex = Array.from(slides).findIndex(function (slide) {
    return slide.querySelector('#needs-anal-slide');
  });

  // Check if the current slide's position is at or after the "needs-anal-slide"
  if (planType === 'hourPower' && currentSlide >= needsAnalSlideIndex && (needsIncomeHourlyA <= 0 && needsIncomeHourlyB <= 0)) {
    alert("Please enter an hourly wage to use HOUR POWER.");
    goToSlideByElementId('needs-anal-slide');
    if (primaryName2 != '') {
      document.getElementById("needsIncomeHourlyA").style.border = '2px solid red';
      document.getElementById("needsIncomeA").style.border = '2px solid red';
    }
    if (spouseName2 != '') {
      document.getElementById("needsIncomeHourlyB").style.border = '2px solid red';
      document.getElementById("needsIncomeB").style.border = '2px solid red';
    }
  } else if (needsIncomeHourlyA > 0 || needsIncomeHourlyB > 0) {
    autoHourPower('Two');
    autoHourPower('One');
    planStyle('Two');
    document.getElementById("needsIncomeHourlyA").style.border = '';
    document.getElementById("needsIncomeHourlyB").style.border = '';
    document.getElementById("needsIncomeA").style.border = '';
    document.getElementById("needsIncomeB").style.border = '';
  }
}
