document.addEventListener("DOMContentLoaded", function () {
  let childCount = 1;

  const revealBtn = document.getElementById("revealBtn");
  const hideBtn = document.getElementById("hideBtn");

  function clearRedBorder() {
    this.style.border = '';
  }

  revealBtn.addEventListener("click", function () {
    if (childCount < 10) {
      const previousChildId = childCount > 1 ? "c" + (childCount - 1) : null;

      let validInputs = true;

      if (previousChildId) {
        // Use ASCII codes to get the correct suffix for the input IDs
        const suffix = String.fromCharCode("C".charCodeAt(0) + childCount - 2);
        const nameInputId = `needNameInput${suffix}`;
        const ageInputId = `needAgeInput${suffix}`;

        const nameInput = document.getElementById(nameInputId);
        const ageInput = document.getElementById(ageInputId);

        // Apply red border and add event listeners
        if (!nameInput.value) {
          nameInput.style.border = '2px solid red';
          nameInput.addEventListener('input', clearRedBorder);
          validInputs = false;
        }
        if (!ageInput.value) {
          ageInput.style.border = '2px solid red';
          ageInput.addEventListener('input', clearRedBorder);
          validInputs = false;
        }
      }

      if (validInputs) {
        const childId = "c" + childCount;
        const childDiv = document.getElementById(childId);
        childDiv.style.display = "inline";

        // Focus on the name input of the newly added child
        const newSuffix = String.fromCharCode("C".charCodeAt(0) + childCount - 1);
        const newNameInputId = `needNameInput${newSuffix}`;
        const newNameInput = document.getElementById(newNameInputId);
        if (newNameInput) {
          newNameInput.focus();
        }

        childCount++;

        if (childCount > 1) {
          hideBtn.style.display = "inline";
        }
        if (childCount >= 10) {
          revealBtn.style.display = "none";
        }
      }
    }
  });

  hideBtn.addEventListener("click", function () {
    if (childCount > 1) {
      childCount--;

      const childId = "c" + childCount;
      const childDiv = document.getElementById(childId);
      const childIdArray = ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

      if (childDiv) {
        childDiv.style.display = "none";

        // Use ASCII codes to get the correct suffix for the input IDs
        const suffix = String.fromCharCode("C".charCodeAt(0) + childCount - 1);
        const nameInputId = `needNameInput${suffix}`;
        const optionNameInputId = `optionNameInput${suffix}`;
        const ageInputId = `needAgeInput${suffix}`;
        const dobTextId = `dobText${suffix}`;
		  console.log(nameInputId);
		  console.log(optionNameInputId);

        const nameInput = document.getElementById(nameInputId);
        const optionNameInput = document.getElementById(optionNameInputId);
        const ageInput = document.getElementById(ageInputId);
        const dobText = document.getElementById(dobTextId);

        // Clear the inputs and remove red border, clear dobText
        if (nameInput) {
          nameInput.value = "";
          nameInput.style.border = "";
          syncInputs(nameInputId, optionNameInputId);
          famStatus();
        }
        if (ageInput) {
          ageInput.value = "";
          ageInput.style.border = "";
        }
        if (dobText) {
          dobText.textContent = "";
        }

        revealBtn.style.display = "inline"; // Enable ADD CHILD button
      }

      if (childCount <= 1) {
        hideBtn.style.display = "none"; // Hide REMOVE CHILD button when there's only one child left
      }
    }
  });
});