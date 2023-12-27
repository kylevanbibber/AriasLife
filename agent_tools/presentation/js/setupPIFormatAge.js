//THIS IS A MODIFIED VERSION OF THE ONE USED ON THE NEEDS ANALYSIS

function clearSelection() {
    if (window.getSelection) {
        // Clear the text selection
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        // For older versions of Internet Explorer
        document.selection.empty();
    }
}

//BLOCK NON NUMERIC CHARACTERS
function blockNonNumericChars(inputId) {
    var input = document.getElementById(inputId);
    input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
}
//BLOCK NUMERIC CHARACTERS
function blockNumericChars(input) {
    input.value = input.value.replace(/\d/g, ''); // Remove numeric characters
}

function formatAsDate(input) {
    if (input.length === 8) {
        var year = parseInt(input.substr(4, 4));
        var month = parseInt(input.substr(0, 2));
        var day = parseInt(input.substr(2, 2));
        return addLeadingZero(month) + '/' + addLeadingZero(day) + '/' + year;
    } else if (input.length === 7) {
        var year = parseInt(input.substr(3, 4));
        var month = parseInt(input.substr(0, 1));
        var day = parseInt(input.substr(1, 2));

        return addLeadingZero(month) + '/' + addLeadingZero(day) + '/' + year;
    }
    return input;
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function calculateAge(inputId, outputId) {
    var needAgeInput = document.getElementById(inputId).value;
    var dobText = document.getElementById(outputId);

    var formattedInput = formatAsDate(needAgeInput);
    document.getElementById(inputId).value = formattedInput;

    if (needAgeInput.length === 0) {
        clearDobText(outputId);
        return;
    }

    var needAge;
    if (needAgeInput.length === 8) {
        var year = parseInt(needAgeInput.substr(4, 4));
        var month = parseInt(needAgeInput.substr(0, 2)) - 1; // Month is zero-based (0-11)
        var day = parseInt(needAgeInput.substr(2, 2));
        var dob = new Date(year, month, day);
        var today = new Date();
        needAge = today.getFullYear() - dob.getFullYear();
        if (
            today.getMonth() < dob.getMonth()
            || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
        ) {
            needAge--; // Subtract 1 if birthday hasn't occurred yet this year
        }
    } else if (needAgeInput.length === 7) {
        var year = parseInt(needAgeInput.substr(3, 4));
        var month = parseInt(needAgeInput.substr(0, 1)) - 1; // Month is zero-based (0-11)
        var day = parseInt(needAgeInput.substr(1, 2));
        var dob = new Date(year, month, day);
        var today = new Date();
        needAge = today.getFullYear() - dob.getFullYear();
        if (
            today.getMonth() < dob.getMonth()
            || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
        ) {
            needAge--; // Subtract 1 if birthday hasn't occurred yet this year
        }
    } else {
        needAge = parseInt(needAgeInput);
    }

    const primaryAgeInputs = ["primaryAge1"];
    const spouseAgeInputs = ["spouseAge1"];

    if (primaryAgeInputs.includes(inputId) || spouseAgeInputs.includes(inputId)) {
        // Age restrictions for adults (ages 18-80)
        if (needAge >= 18 && needAge <= 80) {
            dobText.textContent = "";
        } else {
            dobText.textContent = "18-80 only";
            document.getElementById(inputId).value = "";
        }
    }
	if (primaryAgeInputs.includes(inputId)) {
		var seniorCheckbox = document.getElementById("senior");
		if (needAge >= 60) {
        seniorCheckbox.checked = true;
    } else {
        seniorCheckbox.checked = false;
    }
			
}
}


function clearDobText(outputId) {
    var dobText = document.getElementById(outputId);
    dobText.textContent = '';
}
