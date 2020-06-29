
const submitBtn = document.querySelector('.form__submit');
const result = document.querySelector('.result span');
const errorInch = document.querySelector('.error_inch');
const errorFeet = document.querySelector('.error_feet');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Getting value from input fields
    let feet = document.querySelector('#feet').value;
    let inch = document.querySelector('#inch').value;

    // Converting units to centimeters
    let feetToCentimeter = feet * 30.48;
    let inchToCentimeter = inch * 2.54;

    // Addition of units to centimeters
    let centimeterOutput = feetToCentimeter + inchToCentimeter;

    // Some rudimentary error checking, kind of verbose, and could probably be refactored down the line
    if(isNaN(feet)) {
        errorFeet.style.display = 'block';
        errorFeet.textContent = 'Please enter a number';
    } else {
        errorFeet.style.display = 'none';
    }
    if(isNaN(inch)) {
        errorInch.style.display = 'block';
        errorInch.textContent = 'Please enter a number';
    } else if(inch > 12) {
        errorInch.style.display = 'block';
        errorInch.textContent = 'Please enter a value of 12 or lower';
    } else {
        errorInch.style.display = 'none';
    }

    if (!isNaN(feet) && !isNaN(inch) && inch <= 12) {
        result.textContent = Math.floor(centimeterOutput) + 'cm';
    } else {
        return false;
    }
})