document.getElementById('reproductor').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('content').classList.add('active');
    document.getElementById('audio-background').play();
    document.getElementById('video-background').play();
});