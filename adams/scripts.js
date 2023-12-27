// JavaScript Document
//Disable form autofill
	const form = document.getElementById("questionnaire"); // Replace "questionnaire" with the actual ID of your form

  // Define a mapping between codes and names
var nameMapping = {

'1': { name: 'Justin Adams', email: 'justinadams@ariasagencies.com' },
'2': { name: 'Alexus Hawkins', email: 'ahawkins@ariasagencies.com' },
'3': { name: 'SullenaStaton', email: 'sstaton@ariasagencies.com' },
'4': { name: 'Maeson Green', email: 'mgreen@ariasagencies.com' },
'5': { name: 'Mark Diskin', email: 'mdiskin@ariasagencies.com' },
'6': { name: 'CedarHansen', email: 'chansen@ariasagencies.com' },
'7': { name: 'MichelleMartinez', email: 'mikmmr@gmail.com' },
'8': { name: 'Evan Stewart', email: 'estewart@ariasagencies.com' },
'9': { name: 'BreannHoenig', email: 'bhoenig@ariasagencies.com' },
'10': { name: 'Dale Fortune', email: 'dfortune@ariasagencies.com' },
'11': { name: 'MikeValent', email: 'mvalent@ariasagencies.com' },
'12': { name: 'MattCunningham', email: 'mattcunningham003@gmail.com' },
'13': { name: 'Tyson Vander Linden', email: 'tyson.vanderlinden1@gmail.com' },
'14': { name: 'AndreaLaurent', email: 'alaurent@ariasagencies.com' },
'59': { name: 'James Keefer', email: 'jkeefer@ariasagencies.com' },
'60': { name: 'Kyle VanBibber', email: 'kvanbibber@ariasagencies.com' }
};


// Function to get URL parameters by name
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the hiring manager code parameter from the URL
var hiringManagerCode = getParameterByName('hm'); // Change the parameter name to 'hm'

// Check if the code exists and is mapped to a name and email address
if (hiringManagerCode && nameMapping[hiringManagerCode]) {
  // Get the hiring manager's name and email from the nameMapping object
  var hiringManagerInfo = nameMapping[hiringManagerCode];
  var hiringManagerName = hiringManagerInfo.name;
  var hiringManagerEmail = hiringManagerInfo.email;

  // Set the value of the "Hiring Manager" input field with the name
  var hiringManagerField = document.getElementById('hiring-manager');
  hiringManagerField.value = hiringManagerName;
  hiringManagerField.disabled = true;

  // Update the form action URL with the hiring manager's email address
  form.action = 'https://formsubmit.co/' + hiringManagerEmail;
}

// Disable autofill for each input field in the form
Array.from(form.elements).forEach((element) => {
  if (element.tagName.toLowerCase() === "input") {
    element.setAttribute("autocomplete", "off");
  }
});
	
function validateForm() {
  var form = document.getElementById('questionnaire');
  var requiredFields = form.querySelectorAll('[required]');
  var isValid = true;

  requiredFields.forEach(function(field) {
    if (field.value.trim() === '') {
      isValid = false;
      field.classList.add('invalid');

      field.addEventListener('input', function() {
        if (field.value.trim() !== '') {
          field.classList.remove('invalid');
        }
      });
    } else {
      field.classList.remove('invalid');
    }
  });

  if (isValid) {
    handleClick();
  }
}

function handleSubmit() {
var form = document.getElementById('questionnaire');
form.classList.add('submitting');
form.submit();
}

function startFlashing() {
var submitButton = document.getElementById('submit-btn');
submitButton.classList.add('flashing');
submitButton.value = 'Sumbitting';
}

function stopFlashing() {
var submitButton = document.getElementById('submit-btn');
submitButton.classList.remove('flashing');
}

function handleClick() {
startFlashing();
setTimeout(stopFlashing, 300000);
handleSubmit();
}