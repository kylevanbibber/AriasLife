// JavaScript Document
// AUTO COMPLETE
function autoComplete(pi) {
  // Check if the checkbox is checked
  var autoCompleteCheckbox = document.getElementById("autoCompleteCheckbox" + pi);
  if (!autoCompleteCheckbox.checked) {
    return; // Exit the function if checkbox is not checked
  }
  
  var wlPrimaryautoComplete = Number(document.getElementById("wlPrimaryInput" + pi).value.replace(/\D/g, ''));
  var adbPrimaryautoComplete = Number(document.getElementById("adbPrimaryInput" + pi).value.replace(/\D/g, ''));
  var tenrcPrimaryautoComplete = Number(document.getElementById("tenrcPrimaryInput" + pi).value.replace(/\D/g, ''));

  document.getElementById("wlSpouseInput" + pi).value = Math.round(wlPrimaryautoComplete * 0.667 / 1000) * 1000;
  document.getElementById("wlChildInput" + pi).value = Math.round(wlPrimaryautoComplete * 0.334 / 1000) * 1000;
  document.getElementById("adbSpouseInput" + pi).value = Math.round(adbPrimaryautoComplete * 1.00 / 1000) * 1000;
  document.getElementById("adbChildInput" + pi).value = Math.round(adbPrimaryautoComplete * 0.50 / 1000) * 1000;
  document.getElementById("tenrcSpouseInput" + pi).value = Math.round(tenrcPrimaryautoComplete * 0.667 / 1000) * 1000;
  document.getElementById("tenrcChildInput" + pi).value = Math.round(tenrcPrimaryautoComplete * 0.334 / 1000) * 1000;

  optionFormatCurrency(document.getElementById("wlSpouseInput" + pi));
  optionClearDollarCommas(document.getElementById("wlSpouseInput" + pi));
  calculatePremium(document.getElementById("wlSpouseInput" + pi));
  optionFormatCurrency(document.getElementById("adbSpouseInput" + pi));
  optionClearDollarCommas(document.getElementById("adbSpouseInput" + pi));
  calculatePremium(document.getElementById("adbSpouseInput" + pi));
  optionFormatCurrency(document.getElementById("tenrcSpouseInput" + pi));
  optionClearDollarCommas(document.getElementById("tenrcSpouseInput" + pi));
  calculatePremium(document.getElementById("tenrcSpouseInput" + pi));

  optionFormatCurrency(document.getElementById("wlChildInput" + pi));
  optionClearDollarCommas(document.getElementById("wlChildInput" + pi));
  calculatePremium(document.getElementById("wlChildInput" + pi));
  optionFormatCurrency(document.getElementById("adbChildInput" + pi));
  optionClearDollarCommas(document.getElementById("adbChildInput" + pi));
  calculatePremium(document.getElementById("adbChildInput" + pi));
  optionFormatCurrency(document.getElementById("tenrcChildInput" + pi));
  optionClearDollarCommas(document.getElementById("tenrcChildInput" + pi));
  calculatePremium(document.getElementById("tenrcChildInput" + pi));
}

document.getElementById("autoCompleteCheckboxA").addEventListener("click", function() {
  autoComplete('TwoA');
});

document.getElementById("autoCompleteCheckboxB").addEventListener("click", function() {
  autoComplete('TwoB');
});

document.getElementById("autoCompleteCheckboxC").addEventListener("click", function() {
  autoComplete('C');
});

// Add more event listeners for other values of "pi" if needed
