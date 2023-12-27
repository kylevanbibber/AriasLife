function updateTobOption(checkboxId, selectId) {
  var checkbox = document.getElementById(checkboxId);
  var selectElement = document.getElementById(selectId);

  if (checkbox.checked) {
    selectElement.value = 'tu';
  } else {
    selectElement.value = 'ntu';
  }
}

function toggleOwnershipInput(checkbox) {
  const ownCheckbox = document.getElementById('needsRadioOwn');
  const ownInput = document.getElementById('needsTextOwn');
  const rentCheckbox = document.getElementById('needsRadioRent');
  const rentInput = document.getElementById('needsTextRent');

  if (checkbox === ownCheckbox) {
    rentCheckbox.checked = false;
    rentInput.style.display = 'none';
    ownInput.style.display = ownCheckbox.checked ? 'block' : 'none';
  } else if (checkbox === rentCheckbox) {
    ownCheckbox.checked = false;
    ownInput.style.display = 'none';
    rentInput.style.display = rentCheckbox.checked ? 'block' : 'none';
  }
}

function resetForm() {
  // Clear the PI input fields
document.getElementById("autoPlanCheckboxA").disabled = true;
document.getElementById("optionSexInputA").value = "male";
document.getElementById("optionTobInputA").value = "ntu";
document.getElementById("optionIncomeInputA").value = "";
document.getElementById("autoPlanCheckboxB").disabled = true;
document.getElementById("optionSexInputB").value = "female";
document.getElementById("optionTobInputB").value = "ntu";
document.getElementById("optionIncomeInputB").value = "";
document.getElementById("dobTextA").textContent = "";
document.getElementById("dobTextB").textContent = "";
document.getElementById("dobTextC").textContent = "";
document.getElementById("dobTextD").textContent = "";
document.getElementById("dobTextE").textContent = "";
document.getElementById("dobTextF").textContent = "";
document.getElementById("dobTextG").textContent = "";
document.getElementById("dobTextH").textContent = "";
document.getElementById("dobTextI").textContent = "";
document.getElementById("dobTextJ").textContent = "";
document.getElementById("dobTextK").textContent = "";

  // Clear the other input fields and checkboxes
  var otherInputs = document.querySelectorAll("#needMyForm input[type='text']");
  var checkboxes = document.querySelectorAll("#needMyForm input[type='checkbox']");

  for (var i = 0; i < otherInputs.length; i++) {
    otherInputs[i].value = "";
  }

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}
