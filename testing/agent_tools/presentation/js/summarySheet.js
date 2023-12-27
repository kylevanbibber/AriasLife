function summarySheet() {
	var planChoice = document.getElementById('hourTitle').textContent;
	var wlInputTwoA = document.getElementById('wlInputTwoA').value;
	var wlInputTwoATrim = Number(document.getElementById('wlInputTwoA').value.replace(/[^0-9]/g, ""));
	var wlInputTwoB = document.getElementById('wlInputTwoB').value;
	var wlInputTwoBTrim = Number(document.getElementById('wlInputTwoB').value.replace(/[^0-9]/g, ""));
	var wlInputOneA = document.getElementById('wlInputOneA').value;
	var wlInputOneATrim = Number(document.getElementById('wlInputOneA').value.replace(/[^0-9]/g, ""));
	var wlInputOneB = document.getElementById('wlInputOneB').value;
	var wlInputOneBTrim = Number(document.getElementById('wlInputOneB').value.replace(/[^0-9]/g, ""));
	var tenrcInputTwoA = document.getElementById('tenrcInputTwoA').value;
	var tenrcInputTwoATrim = Number(document.getElementById('tenrcInputTwoA').value.replace(/[^0-9]/g, ""));
	var tenrcInputTwoB = document.getElementById('tenrcInputTwoB').value;
	var tenrcInputTwoBTrim = Number(document.getElementById('tenrcInputTwoB').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneA = document.getElementById('tenrcInputOneA').value;
	var tenrcInputOneATrim = Number(document.getElementById('tenrcInputOneA').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneB = document.getElementById('tenrcInputOneB').value;
	var tenrcInputOneBTrim = Number(document.getElementById('tenrcInputOneB').value.replace(/[^0-9]/g, ""));
	var adbInputTwoA = document.getElementById('adbInputTwoA').value;
	var adbInputTwoATrim = Number(document.getElementById('adbInputTwoA').value.replace(/[^0-9]/g, ""));
	var adbInputTwoB = document.getElementById('adbInputTwoB').value;
	var adbInputTwoBTrim = Number(document.getElementById('adbInputTwoB').value.replace(/[^0-9]/g, ""));
	var adbInputOneA = document.getElementById('adbInputOneA').value;
	var adbInputOneATrim = Number(document.getElementById('adbInputOneA').value.replace(/[^0-9]/g, ""));
	var adbInputOneB = document.getElementById('adbInputOneB').value;
	var adbInputOneBTrim = Number(document.getElementById('adbInputOneB').value.replace(/[^0-9]/g, ""));
	var primaryName = document.getElementById('primaryNameDisplay').textContent;
	var spouseName = document.getElementById('spouseNameDisplay').textContent;
	
	if (planChoice === "TWO HOURS" || planChoice === "RECOMMENDED") {
		console.log(planChoice);
		
		console.log(primaryName);
		//PRIMARY WL
    if (wlInputTwoATrim > 0) {
		if (wlInputTwoATrim < 35000) {
			console.log("WL " + wlInputTwoA);
		} else if (wlInputTwoATrim >= 35000 && wlInputTwoATrim < 60000) {
			console.log("PR " + wlInputTwoA);
		} else if (wlInputTwoATrim >= 60000 && wlInputTwoATrim < 120000) {
			console.log("EX " + wlInputTwoA);
		} else if (wlInputTwoATrim >= 120000) {
			console.log("SL " + wlInputTwoA);
		}
	}
		
		//PRIMARY TERM
    if (tenrcInputTwoATrim > 0) {
		console.log("10RC " + tenrcInputTwoA);
	}
		
		//PRIMARY ADB
    if (adbInputTwoATrim > 0) {
		console.log("ADB " + adbInputTwoA);
	}
		
	console.log(spouseName);
		//SPOUSE WL
    if (wlInputTwoBTrim > 0) {
		if (wlInputTwoBTrim < 35000) {
			console.log("WL " + wlInputTwoB);
		} else if (wlInputTwoBTrim >= 35000 && wlInputTwoBTrim < 60000) {
			console.log("PR " + wlInputTwoB);
		} else if (wlInputTwoBTrim >= 60000 && wlInputTwoBTrim < 120000) {
			console.log("EX " + wlInputTwoB);
		} else if (wlInputTwoBTrim >= 120000) {
			console.log("SL " + wlInputTwoB);
		}
    }
		//SPOUSE TERM
if (tenrcInputTwoBTrim > 0) {
		console.log("10RC " + tenrcInputTwoB);
	}
		
		//SPOUSE ADB
    if (adbInputTwoBTrim > 0) {
		console.log("ADB " + adbInputTwoB);
	}
	}
	
	if (planChoice === "ONE HOUR" || planChoice === "BASIC") {
		console.log(planChoice);
		
		console.log(primaryName);
		//PRIMARY WL
    if (wlInputOneATrim > 0) {
		if (wlInputOneATrim < 35000) {
			console.log("WL " + wlInputOneA);
		} else if (wlInputOneATrim >= 35000 && wlInputOneATrim < 60000) {
			console.log("PR " + wlInputOneA);
		} else if (wlInputOneATrim >= 60000 && wlInputOneATrim < 120000) {
			console.log("EX " + wlInputOneA);
		} else if (wlInputOneATrim >= 120000) {
			console.log("SL " + wlInputOneA);
		}
	}
		
		//PRIMARY TERM
if (tenrcInputOneATrim > 0) {
		console.log("10RC " + tenrcInputOneA);
}
		
		//PRIMARY ADB
    if (adbInputOneATrim > 0) {
		console.log("ADB " + adbInputOneA);
	}
		
	console.log(spouseName);
		//SPOUSE WL
    if (wlInputOneBTrim > 0) {
		if (wlInputOneBTrim < 35000) {
			console.log("WL " + wlInputOneB);
		} else if (wlInputOneBTrim >= 35000 && wlInputOneBTrim < 60000) {
			console.log("PR " + wlInputOneB);
		} else if (wlInputOneBTrim >= 60000 && wlInputOneBTrim < 120000) {
			console.log("EX " + wlInputOneB);
		} else if (wlInputOneBTrim >= 120000) {
			console.log("SL " + wlInputOneB);
		}
	}
		
		//SPOUSE TERM
if (tenrcInputOneBTrim > 0) {
		console.log("10RC " + tenrcInputOneB);
	}
		
		//SPOUSE ADB
    if (adbInputOneBTrim > 0) {
		console.log("ADB " + adbInputOneB);
	}
	}

}