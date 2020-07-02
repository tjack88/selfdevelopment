let balloon = document.querySelectorAll('.balloon');
let balloonContainer = document.querySelectorAll('.balloon-container');
let audio = document.querySelector('.pop-sound');
let balloonGame = document.querySelector('.balloon-pop-game');

balloon.forEach(e => { // Loop over all balloons
    e.addEventListener('click', function() {
        audio.play() // Play sound for when balloon pops
        e.classList.add('not-visible');
        let length = document.querySelectorAll('.not-visible').length; // Check if all balloons have been popped yet
        if(length === 36) { // If all balloons have been popped, stated success message
            balloonContainer.forEach(e => {
                e.style.visibility = 'hidden';
                balloonGame.textContent = 'You have popped all the balloons';
            })
        }
    })
});