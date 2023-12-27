function checkAndShowSlide() {
  var nameInput = document.getElementById('primaryName1');
  var ageInput = document.getElementById('primaryAge1');
  var stateInput = document.getElementById('state');
  var leadType = document.getElementById('leadType');

  if (nameInput.value.trim() !== '') {
    if (leadType.value === 'WILLKIT') {
      openModifiedURL();
      openPresentation(leadType.value);
    } else if (leadType.value !== '' && ageInput.value.trim() !== '' && stateInput.value !== '') {
      openModifiedURL();
      openPresentation(leadType.value);
    } else {
      if (leadType.value === '') {
        leadType.style.border = '2px solid red';
      } else {
        leadType.style.border = ''; // Reset the border to its original state
      }
      if (ageInput.value.trim() === '') {
        ageInput.style.border = '2px solid red';
      } else {
        ageInput.style.border = ''; // Reset the border to its original state
      }
      if (stateInput.value === '') {
        stateInput.style.border = '2px solid red';
      } else {
        stateInput.style.border = ''; // Reset the border to its original state
      }
    }
  } else {
    if (nameInput.value.trim() === '') {
      nameInput.style.border = '2px solid red';
    } else {
      nameInput.style.border = ''; // Reset the border to its original state
    }
  }
}

function openPresentation(leadType) {
    let url;
    let queryParams = [];

    switch (leadType) {
        case "HARDCARD":
            url = "presentation.html";
            break;
        case "WILLKIT":
            url = "presentation_wk.html";
            break;
        case "CHILDSAFE":
            url = "presentation_cs.html";
            break;
        case "REFERRAL":
            url = "presentation_ref.html";
            break;
        default:
            // Handle the case when leadType doesn't match any known type
            // You can set a default URL or display an error message.
            console.error("Unknown leadType:", leadType);
            return; // Return or perform some other action.
    }

    // Add URL parameters if available
    const state = document.getElementById('state').value;
	const leadTypeSelection = document.getElementById('leadType').value;
	const isLicensed = document.getElementById('isLicensedCheckbox').checked;
    const planType = document.getElementById('planType').value;
    const primaryName1 = document.getElementById('primaryName1').value;
    var primaryAge1 = document.getElementById('primaryAge1').value;
	const sexInputA = document.getElementById('sexInputA').value;
    const spouseName1 = document.getElementById('spouseName1').value;
    var spouseAge1 = document.getElementById('spouseAge1').value;
	const sexInputB = document.getElementById('sexInputB').value;
	const wlVsTerm = document.getElementById('wlVsTermCheckbox').checked;
	
	primaryAge1 = primaryAge1.replace(/\D/g, '');
	spouseAge1 = spouseAge1.replace(/\D/g, '');
	
    if (state) queryParams.push(`state=${encodeURIComponent(state)}`);
    if (leadTypeSelection) queryParams.push(`leadType=${encodeURIComponent(leadTypeSelection)}`);
	if (isLicensed) queryParams.push(`isLicensed=${encodeURIComponent(isLicensed)}`);
	if (planType) queryParams.push(`planType=${encodeURIComponent(planType)}`);
    if (primaryName1) queryParams.push(`primaryName1=${encodeURIComponent(primaryName1)}`);
    if (primaryAge1) queryParams.push(`primaryAge1=${encodeURIComponent(primaryAge1)}`);
	if (sexInputA) queryParams.push(`sexInputA=${encodeURIComponent(sexInputA)}`);
    if (spouseName1) queryParams.push(`spouseName1=${encodeURIComponent(spouseName1)}`);
    if (spouseAge1) queryParams.push(`spouseAge1=${encodeURIComponent(spouseAge1)}`);
	if (sexInputB) queryParams.push(`sexInputB=${encodeURIComponent(sexInputB)}`);
	if (wlVsTerm) queryParams.push(`wlVsTerm=${encodeURIComponent(wlVsTerm)}`);

    if (queryParams.length > 0) {
        // Append the query parameters to the URL
        url += `?${queryParams.join("&")}`;
    }

    // Redirect to the determined URL
    window.location.href = url;
}

function resetBorder(input) {
  if (input.value.trim() !== '') {
    input.style.border = ''; // Reset the border to its original state when input is not empty
  }
}

let openedWindow = null; // Variable to store the reference to the opened window

function openModifiedURL() {
  const leadType = document.getElementById('leadType').value;
  const isLicensed = document.getElementById('isLicensedCheckbox').checked;
  const planType = document.getElementById('planType').value;
  const agentName = document.getElementById('agentName').value;
  const primaryName = document.getElementById('primaryName1').value;
  const spouseName = document.getElementById('spouseName1').value;
  const groupName = document.getElementById('groupName').value;
  const cityName = document.getElementById('cityName').value;
  const stateName = document.getElementById('state').value;
  var addAmountInput = document.getElementById('addAmount');
var addAmountValue = addAmountInput.value.replace(/[^\d.]/g, '');
var addAmount = parseFloat(addAmountValue);
  const wlVsTerm = document.getElementById('wlVsTermCheckbox').checked;

if (isNaN(addAmount)) {
  addAmount = '';
}
  const sponsorName = document.getElementById('sponsorName').value;
  const sponsorGroup = document.getElementById('sponsorGroup').value;
  const single = document.getElementById('single').checked ? 'true' : '';
  const senior = document.getElementById('senior').checked ? 'true' : '';
  const nochildren = document.getElementById('nochildren').checked ? 'true' : '';

  const baseUrl = '../pres_scripts/pres_scripts.html';
  const modifiedUrl = `${baseUrl}?drop=${leadType}&isLicensed=${isLicensed}&planType=${planType}&agentName=${agentName}&primaryName=${primaryName}&spouseName=${spouseName}&groupName=${groupName}&cityName=${cityName}&stateName=${stateName}&addAmount=${addAmount}&sponsorName=${sponsorName}&sponsorGroup=${sponsorGroup}&single=${single}&senior=${senior}&nochildren=${nochildren}&wlVsTerm=${wlVsTerm}`;

  // If a previously opened script is still open, do not open a new one
  let openedWindow = null;
  for (const window of popupWindows) {
    if (!window.closed) {
      openedWindow = window;
      break;
    }
  }

  if (openedWindow) {
    openedWindow.location.href = modifiedUrl;
    openedWindow.focus(); // Bring the pop-up window to the front
  } else {
    // Get the width of the user's screen
    var screenWidth = screen.availWidth;

    // Set the width and height of the pop-up window
    var width = screenWidth > 3800 ? Math.round(screenWidth * 0.15) : Math.round(screenWidth * 0.29);
    var height = Math.round(screen.availHeight * 1);

    // Set the position of the pop-up window
    var left = screenWidth > 3800 ? Math.round((screenWidth - width) / 1.42) : screenWidth - width;
    var top = 0;

    // Open the pop-up window
    var scriptWindow = window.open(
      modifiedUrl,
      '_blank',
      'toolbar=no,scrollbars=no,resizable=yes,top=' + top + ',left=' + left + ',width=' + width + ',height=' + height
    );
    popupWindows.push(scriptWindow);
    scriptWindow.focus();
  }
}

// Global variable to store opened pop-up windows
var popupWindows = [];