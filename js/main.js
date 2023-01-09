'use strict';

//заставка при старте игры
document.querySelector('.main').style.backgroundImage = 'url(img/background/1.jpg)';
document.getElementById('game-window').classList.add('class_off');
document.getElementById('gameRes').style.display = 'none';

//старт игры
//функция старта игры со слушателем события
function startGame() {
    document.getElementById('game-window').classList.remove('class_off');
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('gameRes').style.display = 'none';
    document.getElementById('star-game').removeEventListener('click', startGame);
    document.getElementById('star-game').classList.add('class_off');
    return level1();
}


// функция выхода из игры
function exitGame() {
    document.getElementById('star-game').classList.remove('class_off');
    return endGame();
}

