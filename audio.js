var audioPlayer = document.getElementById('audio-player');
var seekBar = document.getElementById('seek-bar');
var pauseButton = document.getElementById('pause-button');

audioPlayer.addEventListener('canplay', function() {
    seekBar.max = audioPlayer.duration;
});

audioPlayer.addEventListener('timeupdate', function() {
    seekBar.value = audioPlayer.currentTime;
});

seekBar.addEventListener('input', function() {
    audioPlayer.currentTime = seekBar.value;
});

pauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
    audioPlayer.play();
    pauseButton.textContent = 'Pausa';
} else {
    audioPlayer.pause();
    pauseButton.textContent = 'Reproducir';
}
});