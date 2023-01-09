'use strict';
//функция удаления блока монстров
function delBlock(...monsters) {
    let check = monsters.every(monster => {
        if (monster.health <= 0) {
            return true
        }
    });

    if (check) {
        document.querySelectorAll(`.monster`).forEach(mobs => mobs.remove());
    }
}

//функция окончания уровня и удаление всех елементов с экрана
function endLevel(monster1, monster2, hero, observer, callback) {
    delBlock(monster1, monster2);
    //удаление блока арены
    document.getElementById('arena').removeEventListener('click', function () {
    });
    document.getElementById('arena').remove();
    // переход на следю уровень
    observer.unsubscribe(monster1);
    observer.unsubscribe(monster2);
    observer.unsubscribe(hero);
    observer = null;
    return callback();
}

// создаёт блок арены и в него добавляет монстров
function arenaBox(monster1, monster2) {
    let arenaBox = document.createElement('div');
    arenaBox.classList.add('arenaBox');
    arenaBox.id = 'arena';
    document.getElementById('game-window').appendChild(arenaBox);
    //добавляем монстров в арену фукция встроена в класс монстров
    monster1.addMonster();
    monster2.addMonster();
}


// заставка в конце игры
function endGame() {
    const score = document.querySelector(`.score`)
    document.getElementById('scoreRes').textContent = score.textContent;
    document.getElementById('game-window').classList.add('class_off');
    document.querySelector('.main').style.backgroundImage = 'url(img/background/5.jpg)';
    document.getElementById('gameRes').style.display = 'block';
}








