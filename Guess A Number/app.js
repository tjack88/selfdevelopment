/***********************
Things to do

Log guessed elements to page
***********************/

// Grab relevant elements
let submit = document.querySelector('#submit');
let remainGuess = document.querySelector('.remain-guess');
let error = document.querySelector('.error');
let answer = document.querySelector('.answer');

// Generate a random number
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

// Count the number of guesses that the user has taken
let value = 10;
remainGuess.textContent = value;

submit.addEventListener('click', (e) => {
    // Stop form from refreshing page
    e.preventDefault();

    // Grab value of number in text input box
    let numberInput = parseInt(document.querySelector('.number-input').value);
    console.log(numberInput);

    if(value <= 10 && value > 0 && numberInput !== random) {
        // Decrease number of guesses as user tries to guess number 
        value--
    } else if(value > 0 && numberInput === random) {
        // If number is guessed, show success message and prevent further guesses
        answer.textContent = 'You win!';
        document.querySelector('.number-input').disabled = true;
        return false;
    }
    
    // If number entered into input field is incorrect, than display error message stating whether they are too high or too low
    if(numberInput > random) {
        answer.textContent = 'Too high';
    } else if(numberInput < random) {
        answer.textContent = 'Too low!';
    } else {
        answer.textContent = 'Enter a number';
    }

    if(value === 0) {
        // Show error if user has already attempted 10 guesses
        error.textContent = 'Number of guesses reached';
        // If user enters too many guesses, than display correct answer
        answer.textContent = `Answer was ${random}`;
    }

    // Show remaining guesses that user has and display them on screen
    remainGuess.textContent = value;
})