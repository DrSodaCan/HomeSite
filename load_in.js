

window.onload = function () {
    // Get the element you want to transition
    const element = document.querySelector('.loading');

    // Apply the transition by changing its properties
    element.style.opacity = 1; // Set opacity to 1 to reveal the element

};
//Add event listener for the first time the user views the page

/*
let audio = document.getElementById("audio");
let pauseButton = document.getElementById("pauseButton");
audio.loop = true;
const playPauseIcon = document.getElementById("playPauseIcon");let started = false;


function startAudio() {
    if (started) return;
    audio.muted = false; // Unmute the audio
    audio.play(); // Start playing
    //pauseButton.textContent = "Pause";
    started = true;
}

window.addEventListener('load', function () {
    startAudio();
});
window.addEventListener('click', function () {
    startAudio();
});
window.addEventListener('scroll', function () {
    startAudio();
});

pauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseIcon.src = "icons/circle-pause-solid.png"; // Change to pause icon when playing
    } else {
        audio.pause();
        playPauseIcon.src = "icons/circle-play-solid.png"; // Change to play icon when paused
    }
});

 */