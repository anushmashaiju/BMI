// Function to calculate BMI
function calculate() {
    // Get weight and height input values
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value); // Parse height as cm

    // Log values to console
    console.log("Weight:", weight);
    console.log("Height (in cm):", height); // Log height in cm

    // Get result and verdict elements
    let result = document.getElementById("bmiOutputDisplay");
    let verdict = document.getElementById("bmiVerdict");

    // Check if weight or height are invalid
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Invalid!";
        result.style.color = "orange";
        verdict.innerHTML = "";
    } else {
        // Calculate BMI
        let heightInM = height / 100; // Convert height from cm to m
        let bmi = (weight / (heightInM * heightInM)).toFixed(2); // Calculate BMI using height in m
        result.innerHTML = bmi;

        // Log BMI value to console
        console.log("BMI:", bmi);

        // Determine verdict based on BMI value
        if (bmi >= 30) {
            verdict.innerHTML = "Obese ❌";
            verdict.style.color = "red";
        } else if (bmi >= 25 && bmi < 30) {
            verdict.innerHTML = "Overweight";
            verdict.style.color = "orange";
        } else if (bmi >= 18.5 && bmi < 25) {
            verdict.innerHTML = "Healthy ✔";
            verdict.style.color = "#3ace1c";
        } else {
            verdict.innerHTML = "Underweight";
            verdict.style.color = "#a5a5a5";
        }
    }
}

// Function to reset inputs and result
function reset() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    let result = document.getElementById("bmiOutputDisplay");
    result.innerHTML = "0";
    result.style.color = "#36A9B1";
    let verdict = document.getElementById("bmiVerdict");
    verdict.innerHTML = "";
}

// Get the calculate button and add event listener
let buttonCalculate = document.getElementById("calculateButton");
buttonCalculate.addEventListener("click", calculate);

// Get the reset button and add event listener
let buttonReset = document.getElementById("resetButton");
buttonReset.addEventListener("click", reset);
