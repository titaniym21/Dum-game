'use strict';


//заставка при старте игры
document.querySelector('.main').style.backgroundImage = 'url(img/background/1.jpg)';
document.getElementById('game-window').classList.add('class_off');


//фукция для проверки на победу
function checkWin(hero, ...monsters) {
    let win = true;
    monsters.forEach(monster => {
        if (monster.health > 0) {
            win = false;
        }
    });

    if (win) {
        console.log('You win');
        return true;
    } else if (hero.health <= 0) {
        console.log('You lose');
        return false;
    }
}


function delBlock(...monsters) {
    let check = monsters.every(monster => {
        if (monster.health <= 0){
            return true
        }
    });

    if (check) {
        document.querySelectorAll(`.monster`).forEach(mobs => mobs.remove());
    }
}


//старт игры
document.getElementById('star-game').addEventListener('click', function () {
    level1();
});












