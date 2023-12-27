// JavaScript Document
//SENDS NAME TO OPTION BUILDER REUSABLE
function sendTextInput(inputId, value) {
  var needOptionNameInput = document.getElementById(inputId);
  needOptionNameInput.value = value;
}

function syncInputs(source, target) {
document.getElementById(target).value = document.getElementById(source).value;
}

//SENDS AGE TO OPTION BUILDER BY USING THE CALCUALTED AGE TO SELECT FROM THE DROPDOWN BOX
function sendAgeSelection(source, target) {
  var dobTextElement = document.getElementById(source);
  var needOptionAgeInput = document.getElementById(target);
  var dobValue = parseInt(dobTextElement.textContent);

  // Iterate through the options and set the selected option
  for (var i = 0; i < needOptionAgeInput.options.length; i++) {
    var option = needOptionAgeInput.options[i];
    var optionValue = parseInt(option.value);

    if (optionValue === dobValue) {
      option.selected = true;
    } else {
      option.selected = false;
    }
  }
}


function sendDropdownSelection(inputId, targetId) {
  var selectedValue = document.getElementById(inputId).value;
  document.getElementById(targetId).value = selectedValue;
}

//SENDS SELECTION TO OPTION BUILDER FOR SEX AND TOBACCO
function handleNeedsInputChange(element, targetId) {
  var selectedValue = element.value;
  document.getElementById(targetId).value = selectedValue;
}

function tobaccoCheckboxSync(sourceTob, targetTob) {
    var sourceValue = document.getElementById(sourceTob).value;
    var targetCheckbox = document.getElementById(targetTob);

    if (sourceValue === "NTU") {
        targetCheckbox.checked = false; // Uncheck the target checkbox
    } else {
        targetCheckbox.checked = !targetCheckbox.checked; // Toggle the target checkbox
    }
}