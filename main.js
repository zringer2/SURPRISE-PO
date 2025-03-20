window.onload = function() {
    document.body.classList.remove('not-loaded');
    
    const audio = document.querySelector('audio');
    audio.volume = 1;
    
    // Create audio context to force audio to start
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);
    
    // Function to ensure playback
    function ensurePlay() {
        const playAttempt = setInterval(() => {
            audio.play()
                .then(() => {
                    clearInterval(playAttempt);
                })
                .catch(() => {
                    audio.play();
                });
        }, 100);
    }
    
    ensurePlay();
}