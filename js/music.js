'use strict';

//создаём елемент Audio

const audio = new Audio();

audio.src = 'music/doom_02. Rip & Tear.mp3';
//следующий трек

audio.addEventListener('ended', function () {
    audio.src = 'music/doom_01. I. Dogma.mp3';
    audio.play();
});


document.getElementById('audio-button').classList.add('play');

document.getElementById('audio-button').addEventListener('click', function () {
    if (audio.paused) {

        document.getElementById('audio-button').classList.remove('play');
        document.getElementById('audio-button').classList.add('pause');
        audio.play();
    } else {

        document.getElementById('audio-button').classList.remove('pause');
        document.getElementById('audio-button').classList.add('play');
        audio.pause();

    }
});















