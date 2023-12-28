
<?php
$ip_address = $_SERVER['REMOTE_ADDR'];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        
        /* Form Container */
        .form-container {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 0 50px rgba(0,85,140,.35);
            width: 95%;
            max-width: 600px;
            margin: auto;
            color: black;
            font-family: "Calibri", sans-serif;
        }

        .client-info-group {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 10px;
        }
        
        .input-group {
            flex: 1 1 180px;
            min-width: 0;
        }
        
        .input-group:last-child {
            margin-right: 0;
        }
        
        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-family: 'Calibri', sans-serif;
        }
        
        .input-group input[type="text"],
        .input-group input[type="tel"],
        .input-group input[type="email"] {
            width: 95%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #d1d5db;
        }
        
        .button-container {
            text-align: center;
            margin-bottom: 10px;
        }
        
        .button-container button {
            padding: 8px 12px;
            border-radius: 4px;
            background-color: #319B42;
            color: white;
            border: none;
            cursor: pointer;
            font-family: 'Calibri', sans-serif;
        }
        
        .button-container button:hover {
            background-color: #226b2e;
        }
        
        .proposed_insured {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .proposed_insured input[type="text"] {
            flex-grow: 1;
            margin-right: 10px;
            margin-bottom: 0px;
        }
        
        .proposed_insured button {
            padding: 8px 12px;
            border-radius: 4px;
            background-color: #319B42;
            color: white;
            border: none;
            cursor: pointer;
            font-family: "Calibri", sans-serif;
        }
        
        .proposed_insured button:hover {
            background-color: #226b2e;
        }
                
        .questions_section {
            margin-top: 20px;
        }

        .question-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-top: 10px;
            border-top: 1px solid #ccc;
        }

        .question-label {
            flex: 1;
            margin-right: 10px;
            font-family: "Calibri", sans-serif;
            font-size: 14px;
        }

        .center-radio-group {
            flex-shrink: 0;
            font-family: "Calibri", sans-serif;
        }

        .center-radio-group, .checkbox-list {
            display: block;
            clear: both;
        }

        .checkbox-list {
            list-style-type: none;
            padding-left: 0;
            color: #000000;
            font-family: "Calibri", sans-serif;
            display: none;
        }


.horizontal-group {
    display: flex;
    align-items: center;
}

.horizontal-group label {
    margin-right: 10px;
}

.radio-options, .checkbox-options {
    display: flex;
    gap: 10px;
}

.premium-input {
    width: 80px;
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
}
.premiums-container {
    display: flex;
}

.checking-verification-header {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 0px;
}

.checking-verification-info {
    text-align: left;
    margin-bottom: 0px;
}

.additional-info {
    text-align: left;
    font-size: smaller;
    font-style: italic;
    margin-bottom: 10px;
    margin-top: -2px;
}

.premiums-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.premium-group {
    flex: 0 0 auto;
    margin: 0 8px;
}

.premium-group label {
    display: block;
    margin-bottom: 5px;
}

.premium-group input[type="number"] {
    width: 85%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
}

.premium-group input[type="number"]::-webkit-inner-spin-button,
.premium-group input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.horizontal-group {
    display: flex;
    align-items: center;
}
.horizontal-group label {
    margin-right: 10px;
}
.radio-options, .checkbox-options {
    display: flex;
    gap: 10px;
}
.premium-input {
    width: 80px;
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
}
.premiums-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
}
.premium-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.premium-group label {
    text-align: center;
    margin-bottom: 5px;
    font-size: 14px;
}
.premium-group input[type="text"] {
    text-align: center;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 8px;
    background-color: #f7f7f7;
    cursor: default;
    width: 100px;
}

.premiums-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.premium-group {
    flex: 0 0 auto;
    margin: 0 8px;
}

.premium-group label {
    display: block;
    margin-bottom: 5px;
}

.premium-group input[type="number"] {
    width: 85%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
}

.premium-group input[type="number"]::-webkit-inner-spin-button,
.premium-group input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.horizontal-group {
    display: flex;
    align-items: center;
}
.horizontal-group label {
    margin-right: 10px;
}
.radio-options, .checkbox-options {
    display: flex;
    gap: 10px;
}
.premium-input {
    width: 80px;
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
}
.premiums-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
    margin-top: 10px;
}
.premium-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.premium-group label {
    text-align: center;
    margin-bottom: 5px;
    font-size: 14px;
}
.premium-group input[type="text"] {
    text-align: center;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 8px;
    background-color: #f7f7f7;
    cursor: default;
    width: 100px;
}

@media (max-width: 600px) {
    .premiums-container {
        flex-direction: column;
    }

    .premium-group {
        width: 100%;
        margin-bottom: 10px;
    }
}

.premium-input::-webkit-inner-spin-button,
.premium-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.checkbox-label {
    display: flex;
    align-items: center;
}

.checkbox-label input[type="checkbox"] {
    /* Styles for checkbox input */
}

.toggle-button {
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0;
    line-height: 5px;
    font-size: 16px;
    background-color: #319B42;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.toggle-button:hover {
    background-color: #226b2e;
}

.no-to-all-container {
    text-align: right;
    padding-right: 10px;
    margin-bottom: 10px;
}

#noToAllButton {
    background-color: #319B42;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}

#noToAllButton:hover {
    background-color: #226b2e;
}

@media (max-width: 600px) {
    .premiums-container {
        flex-direction: column;
    }

    .premium-group {
        width: 100%; 
        margin-bottom: 10px;
        
    }
}


.premium-input::-webkit-inner-spin-button,
.premium-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.checkbox-label {
    display: flex;
    align-items: center;
}

.checkbox-label input[type="checkbox"] {
    margin-right: 5px; 
}

.proposed_insured.input-group {
    display: flex;
    align-items: center; 
    gap: 10px; 
}

@media (max-width: 600px) {
    .client-info-group, .proposed_insured, .premiums-container {
        flex-direction: column;
    }

    .input-group, .premium-group {
        flex-basis: auto; 
        margin-right: 0; 
    }

    .input-group label, .premium-group label, .question-label {
        text-align: left; 
    }

    .input-group input[type="text"],
    .input-group input[type="email"],
    .input-group input[type="tel"],
    .premium-group input[type="number"],
    .input-group input[type="radio"],
    button {
        width: 100%; 
        padding: 8px; 
    }

    .question-group {
        flex-direction: column; /
    }

    .center-radio-group {
        justify-content: flex-start; 
        margin-top: 10px; 
    }

    .question-label {
    margin-bottom: 10px; 
    margin-left: 10px; 
}

@media (max-width: 600px) {
    .question-label {
        padding-left: 15px; 
    }
}


    .questions_section .checkbox-list {
        margin-top: 10px; 
    }

    .next-steps-header, .checking-verification-header {
        margin-top: 20px;
    }
}
        h2 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            color: rgb(0, 0, 0);

        }

        .transition-section {
    overflow: hidden;
    max-height: 0;
    transition: max-height 3s ease-out;
}
.transition-section.open {
    transition: max-height 3s ease-in;
    max-height: 3000px; 
}

#switchStatusDisplay {
    font-size: 16px;
    color: #333;
    /* Add more styling as needed */
}
.switchStatusDisplay {
    font-size: 16px;
    color: #333;
    /* Add more styling as needed */
}

@keyframes flashing {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.flashing {
    animation: flashing 1s infinite;
}

 </style>
 </head>
<body>
    <div class="form-container">
        
        <form action="https://script.google.com/macros/s/AKfycbxcChWcwRwq0h8DLQmQLHuQCoeL-4KSjJ-DMSrknGHUz9erRdum0HXtDVp3HxHTjTDa/exec" method="POST">
            <!-- Client Information Section -->
            <div id="page1">
            <h2>Client Information <br><label class="switchStatusDisplay">Verification </label><label id="switchStatusDisplay"></label></h2>
            

            <div class="client-info-group">
                <div class="input-group">
                    <label for="client_name">Name on Application Package</label>
                    <input type="text" id="client_name" name="client_name" required>
                </div>
                <div class="input-group">
                    <label for="client_phone_number">Client Phone Number</label>
                    <input type="tel" id="client_phone_number" name="client_phone_number" required>
                </div>
            </div>
    
            <div class="client-info-group">
                <div class="input-group">
                    <label for="client_email">Client Email Address</label>
                    <input type="email" id="client_email" name="client_email" required>
                </div>
                <div class="input-group">
                    <label for="agent_name">Agent Name</label>
                    <input type="text" id="agent_name" name="agent_name" required>
                </div>
            </div>

<!-- Sale Question -->
<div class="horizontal-group" style="margin-top: 20px; margin-left: 5px;">
    <label for="sale">Sale?</label>
    <div class="radio-options">
        <label><input type="radio" name="sale" value="No" required onclick="toggleAdditionalSections()">No Sale</label>
        <label><input type="radio" name="sale" value="Yes" required onclick="toggleAdditionalSections()">Yes Sale</label>
        <label><input type="radio" name="sale" value="Senior" required onclick="toggleAdditionalSections()">Senior Sale</label>

    </div>
</div>

<div id="additionalSections" class="transition-section">

          <!-- Proposed Insured Information Section -->
<h2>Proposed Insured Information</h2> 
<div class="button-container"><button type="button" onclick="addInsured()">Add Insured</button></div>

<div id="proposed_insureds">
    <!-- Insured 1 -->
    <div class="proposed_insured input-group" id="insured_1">
        <input type="text" id="insured_name_1" name="insured_name_1" placeholder="Insured 1" required oninput="updateInsuredData(1)">
        <input type="number" class="premium-input" id="insured_premium_1" name="insured_premium_1" placeholder="MBD Premium" oninput="updateInsuredData(1)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_1" name="insured_trial_1" onchange="updateInsuredData(1)">Trial</label>
        <input type="hidden" id="insured_data_1" name="insured_data_1">
        <button type="button" onclick="removeInsured(1)">Remove</button>
    </div>

    <!-- Insured 2 -->
    <div class="proposed_insured input-group" id="insured_2" style="display: none;">
        <input type="text" id="insured_name_2" name="insured_name_2" placeholder="Insured 2" oninput="updateInsuredData(2)">
        <input type="number" class="premium-input" id="insured_premium_2" name="insured_premium_2" placeholder="MBD Premium" oninput="updateInsuredData(2)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_2" name="insured_trial_2" onchange="updateInsuredData(2)">Trial</label>
        <input type="hidden" id="insured_data_2" name="insured_data_2">
        <button type="button" onclick="removeInsured(2)">Remove</button>
    </div>

    <!-- Insured 3 -->
    <div class="proposed_insured input-group" id="insured_3" style="display: none;">
        <input type="text" id="insured_name_3" name="insured_name_3" placeholder="Insured 3" oninput="updateInsuredData(3)">
        <input type="number" class="premium-input" id="insured_premium_3" name="insured_premium_3" placeholder="MBD Premium" oninput="updateInsuredData(3)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_3" name="insured_trial_3" onchange="updateInsuredData(3)">Trial</label>
        <input type="hidden" id="insured_data_3" name="insured_data_3">
        <button type="button" onclick="removeInsured(3)">Remove</button>
    </div>

    <!-- Insured 4 -->
    <div class="proposed_insured input-group" id="insured_4" style="display: none;">
        <input type="text" id="insured_name_4" name="insured_name_4" placeholder="Insured 4" oninput="updateInsuredData(4)">
        <input type="number" class="premium-input" id="insured_premium_4" name="insured_premium_4" placeholder="MBD Premium" oninput="updateInsuredData(4)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_4" name="insured_trial_4" onchange="updateInsuredData(4)">Trial</label>
        <input type="hidden" id="insured_data_4" name="insured_data_4">
        <button type="button" onclick="removeInsured(4)">Remove</button>
    </div>

    <!-- Insured 5 -->
    <div class="proposed_insured input-group" id="insured_5" style="display: none;">
        <input type="text" id="insured_name_5" name="insured_name_5" placeholder="Insured 5" oninput="updateInsuredData(5)">
        <input type="number" class="premium-input" id="insured_premium_5" name="insured_premium_5" placeholder="MBD Premium" oninput="updateInsuredData(5)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_5" name="insured_trial_5" onchange="updateInsuredData(5)">Trial</label>
        <input type="hidden" id="insured_data_5" name="insured_data_5">
        <button type="button" onclick="removeInsured(5)">Remove</button>
    </div>

    <!-- Insured 6 -->
    <div class="proposed_insured input-group" id="insured_6" style="display: none;">
        <input type="text" id="insured_name_6" name="insured_name_6" placeholder="Insured 6" oninput="updateInsuredData(6)">
        <input type="number" class="premium-input" id="insured_premium_6" name="insured_premium_6" placeholder="MBD Premium" oninput="updateInsuredData(6)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_6" name="insured_trial_6" onchange="updateInsuredData(6)">Trial</label>
        <input type="hidden" id="insured_data_6" name="insured_data_6">
        <button type="button" onclick="removeInsured(6)">Remove</button>
    </div>

    <!-- Insured 7 -->
    <div class="proposed_insured input-group" id="insured_7" style="display: none;">
        <input type="text" id="insured_name_7" name="insured_name_7" placeholder="Insured 7" oninput="updateInsuredData(7)">
        <input type="number" class="premium-input" id="insured_premium_7" name="insured_premium_7" placeholder="MBD Premium" oninput="updateInsuredData(7)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_7" name="insured_trial_7" onchange="updateInsuredData(7)">Trial</label>
        <input type="hidden" id="insured_data_7" name="insured_data_7">
        <button type="button" onclick="removeInsured(7)">Remove</button>
    </div>

    <!-- Insured 8 -->
    <div class="proposed_insured input-group" id="insured_8" style="display: none;">
        <input type="text" id="insured_name_8" name="insured_name_8" placeholder="Insured 8" oninput="updateInsuredData(8)">
        <input type="number" class="premium-input" id="insured_premium_8" name="insured_premium_8" placeholder="MBD Premium" oninput="updateInsuredData(8)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_8" name="insured_trial_8" onchange="updateInsuredData(8)">Trial</label>
        <input type="hidden" id="insured_data_8" name="insured_data_8">
        <button type="button" onclick="removeInsured(8)">Remove</button>
    </div>

    <!-- Insured 9 -->
    <div class="proposed_insured input-group" id="insured_9" style="display: none;">
        <input type="text" id="insured_name_9" name="insured_name_9" placeholder="Insured 9" oninput="updateInsuredData(9)">
        <input type="number" class="premium-input" id="insured_premium_9" name="insured_premium_9" placeholder="MBD Premium" oninput="updateInsuredData(9)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_9" name="insured_trial_9" onchange="updateInsuredData(9)">Trial</label>
        <input type="hidden" id="insured_data_9" name="insured_data_9">
        <button type="button" onclick="removeInsured(9)">Remove</button>
    </div>
    <!-- Insured 10 -->
    <div class="proposed_insured input-group" id="insured_10" style="display: none;">
        <input type="text" id="insured_name_10" name="insured_name_10" placeholder="Insured 10" oninput="updateInsuredData(10)">
        <input type="number" class="premium-input" id="insured_premium_10" name="insured_premium_10" placeholder="MBD Premium" oninput="updateInsuredData(10)">
        <label class="checkbox-label"><input type="checkbox" id="insured_trial_10" name="insured_trial_10" onchange="updateInsuredData(10)">Trial</label>
        <input type="hidden" id="insured_data_10" name="insured_data_10">
        <button type="button" onclick="removeInsured(10)">Remove</button>
    </div>

    <input type="hidden" id="insured_data_1" name="insured_data_1">
    <input type="hidden" id="insured_data_2" name="insured_data_2">
    <input type="hidden" id="insured_data_3" name="insured_data_3">
    <input type="hidden" id="insured_data_4" name="insured_data_4">
    <input type="hidden" id="insured_data_5" name="insured_data_5">
    <input type="hidden" id="insured_data_6" name="insured_data_6">
    <input type="hidden" id="insured_data_7" name="insured_data_7">
    <input type="hidden" id="insured_data_8" name="insured_data_8">
    <input type="hidden" id="insured_data_9" name="insured_data_9">
    <input type="hidden" id="insured_data_10" name="insured_data_10">
<input type="hidden" id="generated_url" name="generated_url" value="">
<input type="hidden" id="application_id" name="application_id">
<input type="hidden" name="ip_address" id="ip_address" value="<?php echo htmlspecialchars($ip_address); ?>">


            <div class="premiums-container">
                <div class="premium-group">
                    <label>Total Monthly Premium:</label>
                    <input type="text" id="monthly_premium" name="monthly_premium" readonly>
                </div>
            
                <div class="premium-group">
                    <label>Total ALP:</label>
                    <input type="text" id="annual_premium" name="annual_premium" readonly>
                </div>
            
                <div class="premium-group">
                    <label>Total Trialed ALP:</label>
                    <input type="text" id="trial_alp" name="trial_alp" readonly>
                </div>
            </div>
            
            
            
</div>

    
<div id="medicalQuestions" class="transition-section">

           <h2 class="h2-border" style="margin-top: 30px;">
            Medical Questions
            <div class="no-to-all-container">
                <button type="button" id="noToAllButton" onclick="selectAllNo()">No to All</button>
            </div>        </h2>
        
<div class="questions_section">

    <div class="question-group">
        <span class="question-label">Has any proposed insured ever been convicted of a DWI or DUI?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="dui" value="Yes" required onclick="toggleCheckboxList('dui')">Yes</label>
            <label><input type="radio" name="dui" value="No" required onclick="toggleCheckboxList('dui')">No</label>
        </div>
    </div>
    <ul id="dui_list" class="checkbox-list" style="display: none;"></ul>

    <div class="question-group">
        <span class="question-label">Has any applicant ever been arrested?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="arrested" value="Yes" required onclick="toggleCheckboxList('arrested')">Yes</label>
            <label><input type="radio" name="arrested" value="No" required onclick="toggleCheckboxList('arrested')">No</label>
        </div>
    </div>
    <ul id="arrested_list" class="checkbox-list" style="display: none;"></ul>


    <div class="question-group">
        <span class="question-label">Has any proposed Insured ever had or been treated for Angioplasty, Coronary Bypass, Heart Attack, Heart Failure, Angina, or Artery Disease?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="heart_issues" value="Yes" required onclick="toggleCheckboxList('heart_issues')">Yes</label>
            <label><input type="radio" name="heart_issues" value="No" required onclick="toggleCheckboxList('heart_issues')">No</label>
        </div>
    </div>
    <ul id="heart_issues_list" class="checkbox-list" style="display: none;"></ul>


    <div class="question-group">
        <span class="question-label">Has any proposed Insured ever been diagnosed as having or received treatment for high blood pressure?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="high_blood_pressure" value="Yes" required onclick="toggleCheckboxList('high_blood_pressure')">Yes</label>
            <label><input type="radio" name="high_blood_pressure" value="No" required onclick="toggleCheckboxList('high_blood_pressure')">No</label>
        </div>
    </div>
    <ul id="high_blood_pressure_list" class="checkbox-list" style="display: none;"></ul>

 
    <div class="question-group">
        <span class="question-label">Has any proposed Insured ever had or been treated for Diabetes?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="diabetes" value="Yes" required onclick="toggleCheckboxList('diabetes')">Yes</label>
            <label><input type="radio" name="diabetes" value="No" required onclick="toggleCheckboxList('diabetes')">No</label>
        </div>
    </div>
    <ul id="diabetes_list" class="checkbox-list" style="display: none;"></ul>

 
    <div class="question-group">
        <span class="question-label">Has any proposed Insured taken medications for Anxiety or Depression?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="anxiety_depression" value="Yes" required onclick="toggleCheckboxList('anxiety_depression')">Yes</label>
            <label><input type="radio" name="anxiety_depression" value="No" required onclick="toggleCheckboxList('anxiety_depression')">No</label>
        </div>
    </div>
    <ul id="anxiety_depression_list" class="checkbox-list" style="display: none;"></ul>
   

    <div class="question-group">
        <span class="question-label">Has any proposed Insured ever been diagnosed as having or received treatment for cancer, tumor or unexplained masses (including benign tumors)?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="cancer" value="Yes" required onclick="toggleCheckboxList('cancer')">Yes</label>
            <label><input type="radio" name="cancer" value="No" required onclick="toggleCheckboxList('cancer')">No</label>
        </div>
    </div>
    <ul id="cancer_list" class="checkbox-list" style="display: none;"></ul>

    <div class="question-group">
        <span class="question-label">Are you currently taking or have you been prescribed medications by a doctor in the past five years?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="medications" value="Yes" required onclick="toggleCheckboxList('medications')">Yes</label>
            <label><input type="radio" name="medications" value="No" required onclick="toggleCheckboxList('medications')">No</label>
        </div>
    </div>
    <ul id="medications_list" class="checkbox-list" style="display: none;"></ul>


    
    <div class="question-group">
        <span class="question-label">In the past 5 years, has any proposed insured been to the ER or Hospital?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="er_visit" value="Yes" required onclick="toggleCheckboxList('er_visit')">Yes</label>
            <label><input type="radio" name="er_visit" value="No" required onclick="toggleCheckboxList('er_visit')">No</label>
        </div>
    </div>
    <ul id="er_visit_list" class="checkbox-list" style="display: none;"></ul>


    <div class="question-group">
        <span class="question-label">Has any proposed insured ever been diagnosed with or treated for Crohn's, Cystic Fibrosis, COPD, Seizures, Scleroderma, Alzheimer's, Multiple Sclerosis (MS), Stroke, Sickle Cell Anemia, liver, or kidney issues?</span>
        <div class="center-radio-group">
            <label><input type="radio" name="chronic_illness" value="Yes" required onclick="toggleCheckboxList('chronic_illness')">Yes</label>
            <label><input type="radio" name="chronic_illness" value="No" required onclick="toggleCheckboxList('chronic_illness')">No</label>
        </div>
    </div>
    <ul id="chronic_illness_list" class="checkbox-list" style="display: none;"></ul>

</div>

        
    <!-- Checking Account Question Section -->
    <h2 class="h2-border" style="margin-top: 20px;">Account Verification</h2>
    <p class="checking-verification-info">A valid checking account is required for participation in the program.</p>
    <p class="additional-info">Unfortunately, debit, credit or pre-paid accounts are not accepted at this time.</p>
    <div class="question-group">
        <p>Is the client using a checking account?</p>
        <div class="center-radio-group">
            <label><input type="radio" name="checking_account" value="Yes" required>Yes</label>
            <label><input type="radio" name="checking_account" value="No" required>No</label>
        </div>
    </div>

    
        <!-- What Comes Next Section -->
        <h2 class="next-steps-header">What Comes Next?</h2>
        <p class="checking-verification-info">Underwriting Process</p>
      
        <ol class="next-steps-list">
            <li>The client knows a prescription history check will verify all prescription medications they've had over the last ten years and will be compared to what is listed on the application.</li>
            <li>Medical records may be ordered from their physicians.</li>
            <li>An exam may be requested which will be done privately in their home by a licensed nurse wearing full protective equipment.</li>
        </ol>
   
        <p class="additional-info">If needed, you will reach out in order to assist in the process.</p>
    </div>
    </div>  

    <!--
    <div id="client-message" style="text-align: center; margin-top: 20px;"></div>
-->
    <div class="button-container" style="margin-top: 20px;">
        <button type="submit">Submit</button>
    </div>
  

    </form>
    <script async defer src="https://apis.google.com/js/api.js"></script>
<script> 


function fetchSwitchStatus() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '14FqmOazQNGh3eH3ZkCDG3PzqXPBvZBGXnv1d4wD5OKM',
        range: 'Master Switch!A1:B',
    }).then(function(response) {
        const switchStatus = response.result.values[0][0];
        document.getElementById('switchStatusDisplay').textContent = switchStatus;
        updateFormBasedOnSwitch(switchStatus); // Update form based on switch status
        updateClientMessage(); // Update client message based on switch status
    }).catch(function(error) {
        console.error('Error fetching switch status:', error);
    });
}

function updateFormBasedOnSwitch() {
    const switchStatus = document.getElementById('switchStatusDisplay').textContent;
    const totalALP = parseFloat(document.getElementById('annual_premium').value) || 0;

    if (switchStatus === 'Off' || totalALP <= 1800) {
        hideMedicalQuestions();
    } else {
        showMedicalQuestions();
    }
}

function updateMedicalQuestionsVisibility(switchStatus, totalALP) {
    if (switchStatus === 'On' && totalALP > 1800) {
        showMedicalQuestions();
    } else {
        hideMedicalQuestions();
    }
}

function showMedicalQuestions() {
    // Show medical questions
    document.getElementById('medicalQuestions').classList.add('open');
    document.getElementById('medicalQuestions').querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.required = true;
    });
}

function hideMedicalQuestions() {
    // Hide medical questions
    document.getElementById('medicalQuestions').classList.remove('open');
    document.getElementById('medicalQuestions').querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.required = false;
    });
}

function handleSwitchStatusChange() {
    const switchStatus = document.getElementById('switchStatusDisplay').textContent;
    const totalALP = parseFloat(document.getElementById('annual_premium').value) || 0;

    updateMedicalQuestionsVisibility(switchStatus, totalALP);
}

let submitButton = null;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    submitButton = document.querySelector('form button[type="submit"]');
    loadGoogleApiClient();
    document.getElementById('switchStatusDisplay').addEventListener('change', function() {
        handleSwitchStatusChange();
        updateClientMessage();
        updateFormBasedOnSwitch();
    });

    updateClientMessage();
handleSwitchStatusChange();

    
   
});
//Set the inital number of insureds to 1
        let insuredCounter = 1;
    
        // Initialize all proposed insured fields as hidden except the first one
        window.onload = function() {
            for (let i = 2; i <= 10; i++) {
                const insuredDiv = document.getElementById(`insured_${i}`);
                if (insuredDiv) {
                    insuredDiv.style.display = 'none';
                }
            }
            for (let i = 1; i <= 10; i++) {
                updateInsuredData(i);
            }
            setupEventListeners();
            enableOrDisableQuestionInputs(); 
            toggleAdditionalSections(); 
            loadGoogleApiClient();
  
        };
    
        function addInsured() {
    if (insuredCounter < 10) {
        const nextInsuredDiv = document.getElementById(`insured_${insuredCounter + 1}`);
        if (nextInsuredDiv) {
            nextInsuredDiv.style.display = 'flex';
            insuredCounter++;
        }
    }
    refreshCheckboxLists();
    clearAllMedicalSelections();
}
    
function removeInsured(insuredId) {
    const insuredDiv = document.getElementById(`insured_${insuredId}`);
    if (insuredDiv) {
        insuredDiv.style.display = 'none';
        document.getElementById(`insured_name_${insuredId}`).value = '';
        document.getElementById(`insured_premium_${insuredId}`).value = '';
        document.getElementById(`insured_trial_${insuredId}`).checked = false;
        insuredCounter--; // Decrement the insured counter
    }
    refreshCheckboxLists();
    clearAllMedicalSelections();
    autoCheckSingleInsured();
}

function clearAllMedicalSelections() {
    document.querySelectorAll('.checkbox-list input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function autoCheckSingleInsured() {
    let insuredCount = 0;
    let lastInsuredId = null;

    for (let i = 1; i <= 10; i++) {
        const insuredDiv = document.getElementById(`insured_${i}`);
        if (insuredDiv && insuredDiv.style.display !== 'none') {
            insuredCount++;
            lastInsuredId = i;
        }
    }

    if (insuredCount === 1) {
        document.querySelectorAll('.checkbox-list').forEach(list => {
            if (list.style.display !== 'none') {
                const checkboxes = list.querySelectorAll(`input[type="checkbox"]`);
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false; // Clear any existing checks
                });
                const singleCheckbox = list.querySelector(`input[name$="_for_insured_${lastInsuredId}"]`);
                if (singleCheckbox) {
                    singleCheckbox.checked = true;
                }
            }
        });
    }
}

        function updateInsuredData(insuredId) {
            var name = document.getElementById(`insured_name_${insuredId}`).value;
            var premium = document.getElementById(`insured_premium_${insuredId}`).value;
            var trial = document.getElementById(`insured_trial_${insuredId}`).checked ? 'trl' : 'std';
    
            var insuredData = `${name},${premium},${trial}`;
            document.getElementById(`insured_data_${insuredId}`).value = insuredData;
    
            refreshCheckboxLists();
        }
    
        function setupEventListeners() {
            document.querySelectorAll('.proposed_insured input[type="number"], .proposed_insured input[type="checkbox"]').forEach(input => {
                input.addEventListener('change', calculateTotalMonthlyPremium);
            });
    
            const insuredInputs = document.querySelectorAll('.proposed_insured input[type="text"]');
            insuredInputs.forEach(input => {
                input.addEventListener('input', () => {
                    refreshCheckboxLists();
                    enableOrDisableQuestionInputs();
                });
            });
    
            const radioInputs = document.querySelectorAll('.questions_section input[type="radio"]');
            radioInputs.forEach(input => {
                input.addEventListener('click', (event) => {
                    if (!event.target.disabled) {
                        toggleCheckboxList(event.target.name);
                    }
                });
            });
        }
    
        function calculateTotalMonthlyPremium() {
    let totalMonthlyPremium = 0;
    let totalTrialALP = 0;

    document.querySelectorAll('.proposed_insured').forEach(insuredDiv => {
        if (insuredDiv.style.display !== 'none') {
            const premiumInput = insuredDiv.querySelector('input[type="number"]');
            const trialCheckbox = insuredDiv.querySelector('input[type="checkbox"]');
            if (premiumInput && trialCheckbox) {
                const monthlyPremium = parseFloat(premiumInput.value) || 0;
                if (!trialCheckbox.checked) {
                    totalMonthlyPremium += monthlyPremium;
                } else {
                    totalTrialALP += monthlyPremium;
                }
            }
        }
    });

    document.getElementById('monthly_premium').value = totalMonthlyPremium.toFixed(2);
    document.getElementById('trial_alp').value = (totalTrialALP * 12).toFixed(2);
    calculateAnnualPremiumBasedOnMonthly();

    // Now using the calculated annual premium to toggle medical questions
    const totalALP = parseFloat(document.getElementById('annual_premium').value) || 0;
    toggleMedicalQuestions(totalALP); // Adjust the function call here
}

function autoSelectNoForQuestions() {
    document.querySelectorAll('.questions_section .center-radio-group input[type="radio"][value="No"]').forEach(function(radio) {
        radio.checked = true;
        toggleCheckboxList(radio.name); // If you have a function to handle changes in the selection
    });
    document.querySelectorAll('input[name="checking_account"][value="No"]').forEach(function(radio) {
        radio.checked = true;
    });
}


function toggleMedicalQuestions(totalALP) {
    const medicalQuestionsSection = document.getElementById('medicalQuestions');
    const medicalRadioButtons = medicalQuestionsSection.querySelectorAll('input[type="radio"]');
    const switchStatus = document.getElementById('switchStatusDisplay').textContent;

    if (switchStatus === 'On' && totalALP > 1800) {
        medicalQuestionsSection.classList.add('open');
        medicalRadioButtons.forEach(radio => {
            radio.required = true;
        });
    } else {
        medicalQuestionsSection.classList.remove('open');
        medicalRadioButtons.forEach(radio => {
            radio.required = false;
        });
    }
}


    
function selectAllNo() {
    document.querySelectorAll('.questions_section .center-radio-group input[type="radio"][value="No"]').forEach(function(radio) {
        radio.checked = true;
        toggleCheckboxList(radio.name); // Call this if you have a function to handle changes in the selection
    });
}


function calculateAnnualPremiumBasedOnMonthly() {
    var monthlyPremium = document.getElementById('monthly_premium').value;
    if (monthlyPremium) {
        document.getElementById('annual_premium').value = (monthlyPremium * 12).toFixed(2);
    }
}
    
function toggleCheckboxList(questionId) {
    const listId = questionId + '_list';
    const questionList = document.getElementById(listId);
    const questionAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
    questionList.innerHTML = '';

    if (questionAnswer && questionAnswer.value === 'Yes') {
        let insuredCount = 0;
        let lastInsuredId = null;

        for (let i = 1; i <= 10; i++) {
            const insuredDiv = document.getElementById(`insured_${i}`);
            if (insuredDiv && insuredDiv.style.display !== 'none') {
                insuredCount++;
                lastInsuredId = i;
                const insuredNameInput = document.getElementById(`insured_name_${i}`);
                if (insuredNameInput && insuredNameInput.value.trim() !== '') {
                    const insuredName = insuredNameInput.value.trim();
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = `${questionId}_for_insured_${i}`;
                    checkbox.value = insuredName;
                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(` ${insuredName}`));
                    const listItem = document.createElement('li');
                    listItem.appendChild(label);
                    questionList.appendChild(listItem);
                }
            }
        }

        // Auto-check if only one insured is present
        if (insuredCount === 1) {
            document.querySelector(`input[name="${questionId}_for_insured_${lastInsuredId}"]`).checked = true;
        }

        questionList.style.display = 'block';
    } else {
        questionList.style.display = 'none';
    }
}

  // Function to load and initialize the Google API client
  function loadGoogleApiClient() {
    gapi.load('client', function() {
      gapi.client.init({
        apiKey: 'AIzaSyAUQ8D5K1kc2CBTEd0RM3WUOhcI5OJGydg', // Replace with your actual API key
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function () {
        setApplicationId(); 
        fetchSwitchStatus(); 
        setInterval(fetchSwitchStatus, 10000); // Call the function every 30 seconds to keep the switch status updated
      }).catch(function (error) {
        console.error('Error initializing Google API client:', error);
      });
    });
  }

  function setApplicationId() {
    const now = new Date();
    const timestamp = now.getTime(); // Get timestamp as a long number
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    const applicationId = `${timestamp}${randomNum}`; // Concatenate the timestamp and the random number
    document.getElementById('application_id').value = applicationId;
}


  function toggleAdditionalSections() {
    const saleYes = document.querySelector('input[name="sale"][value="Yes"]').checked;
    const additionalSections = document.getElementById('additionalSections');
    if (saleYes) {
        additionalSections.classList.add('open');
    } else {
        additionalSections.classList.remove('open');
    }
}

function toggleFormSections() {
    const saleYes = document.querySelector('input[name="sale"][value="Yes"]').checked;
    const proposedInsuredsInputs = document.querySelectorAll('#proposed_insureds input');
    const medicalQuestionsInputs = document.querySelectorAll('#medicalQuestions input');

    if (saleYes) {
        // If sale is "Yes", enable all inputs in these sections
        proposedInsuredsInputs.forEach(input => input.disabled = false);
        medicalQuestionsInputs.forEach(input => input.disabled = false);
    } else {
        // If sale is "No", disable all inputs in these sections
        proposedInsuredsInputs.forEach(input => input.disabled = true);
        medicalQuestionsInputs.forEach(input => input.disabled = true);
    }
}

// Call this function when the radio buttons for the sale question change
document.querySelectorAll('input[name="sale"]').forEach(radio => {
    radio.addEventListener('change', toggleFormSections);
});

// Initial call to set the correct state based on the default selection
toggleFormSections();

function updateClientMessage() {
    const saleInput = document.querySelector('input[name="sale"]:checked');
const saleSelection = saleInput ? saleInput.value : 'default_value';
    var totalALP = parseFloat(document.getElementById('annual_premium').value) || 0;
    var clientMessageDiv = document.getElementById('client-message');
const switchStatus = document.getElementById('switchStatusDisplay').textContent;
    if (saleSelection === 'No') {
        clientMessageDiv.innerHTML = 'The client will be sent a form to confirm which no-cost benefits they wish to receive.';
    } else if (saleSelection === 'Yes' && totalALP <= 1800 && switchStatus === 'Off') {
        clientMessageDiv.innerHTML = 'The client will be sent a policyholder welcome packet and no-cost benefits.';
    } else if (saleSelection === 'Yes' && totalALP >= 1800 && switchStatus === 'On') {
        clientMessageDiv.innerHTML = 'The client will receive a verification form to complete the application process and choose which no-cost benefits they wish to receive.';
    }
}

// Call this function whenever the relevant inputs change
document.querySelectorAll('input[name="sale"], input[name="premium"]').forEach(input => {
    input.addEventListener('change', updateClientMessage);
});

// Initial call to set the correct message based on default values
updateClientMessage();

// Attach event listeners to premium input fields
document.querySelectorAll('.premium-input').forEach(input => {
    input.addEventListener('input', () => {
        calculateTotalMonthlyPremium();
        updateClientMessage();
    });
});



function refreshCheckboxLists() {
    const questions = ['medications', 'high_blood_pressure', 'diabetes', 'cancer', 'arrested', 'dui', 'er_visit', 'anxiety_depression', 'heart_issues', 'chronic_illness'];
    questions.forEach(questionId => {
        toggleCheckboxList(questionId);
    });
}

function enableOrDisableQuestionInputs() {
            const questionInputs = document.querySelectorAll('.questions_section input[type="radio"]');
            const hasValidInsured = Array.from(document.querySelectorAll('.proposed_insured input[type="text"]')).some(input => input.value.trim() !== '');
            questionInputs.forEach(input => {
                input.disabled = !hasValidInsured;
            });
        }

    const form = document.querySelector('form');
        
    form.onsubmit = function(event) {
    event.preventDefault();
    submitButton.classList.add('flashing'); // Add the flashing effect
        submitButton.textContent = 'Submitting...'; // Change button text to 'Submitting...'
        submitButton.disabled = true;
    generateUrl(); // Call this function to generate and set the URL before form submission
    prepareFormData();
    form.submit(); // Submit the form after generating the URL and preparing form data
};

function generateUrl() {
    // Define the base URL
    const baseUrl = "https://1p4l.com/verify-client";

    // Extract proposed insureds' names and premiums
    const insureds = [];
    let totalStandardMonthlyPremium = 0;
    let totalTrialPremium = 0;

    for (let i = 1; i <= 10; i++) {
        const insuredName = document.getElementById(`insured_name_${i}`).value;
        const insuredPremium = parseFloat(document.getElementById(`insured_premium_${i}`).value);
        const isTrial = document.getElementById(`insured_trial_${i}`).checked;

        if (insuredName && !isNaN(insuredPremium)) {
            insureds.push({ name: insuredName, premium: insuredPremium, isTrial: isTrial });

            // Calculate total premiums
            if (isTrial) {
                totalTrialPremium += insuredPremium;
            } else {
                totalStandardMonthlyPremium += insuredPremium;
            }
        }
    }

    // Subtract trial premiums from total premiums to get standard monthly premium

    // Get the application number
    const applicationId = document.getElementById('application_id').value;

    // Construct the URL parameters
    const urlParams = new URLSearchParams({
        insureds: JSON.stringify(insureds),
        total_standard_monthly_premium: totalStandardMonthlyPremium,
        application_id: applicationId  // Add application number to the URL
    });

    // Construct the full URL
    const fullUrl = `${baseUrl}?${urlParams.toString()}`;

    // Set the generated URL as the value of the hidden input field
    document.getElementById('generated_url').value = fullUrl;
}


        function prepareFormData() {
            // Iterate over each medical question
            ['medications', 'high_blood_pressure', 'diabetes', 'cancer', 'arrested', 'dui', 'er_visit', 'anxiety_depression', 'heart_issues', 'chronic_illness'].forEach(question => {
                const selectedValue = document.querySelector(`input[name="${question}"]:checked`)?.value;
                if (selectedValue === 'Yes') {
                    const selectedInsureds = Array.from(document.querySelectorAll(`input[name^="${question}_for_insured_"]:checked`))
                                                  .map(input => input.name.split('_').pop())
                                                  .join(',');
                    if (selectedInsureds) {
                        document.querySelector(`input[name="${question}"]`).value = `yes(${selectedInsureds})`;
                    }
                }
            });
        }
</script>
    
</body>
</html>
