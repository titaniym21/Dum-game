'use strict';
//

//заставка при старте игры
document.querySelector('.main').style.backgroundImage = 'url(img/background/1.jpg)';
document.getElementById('game-window').classList.add('class_off');


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

// функия атаки игрока по монстру
function attack(main, target) {
    if (main.health > 0 && target.health > 0) {
        heroAtack.play();
        target.health -= main.damage;
        target.update();
        console.log(`${main.name} attack ${target.name}`);
    }
    if (target.health <= 0) {
        target.health = 0;
        target.update();
        console.log(`${target.name} die`);
        // счетчик убийств записал сюда
        const score = document.querySelector(`.score`)
        parseInt(score.textContent++)
        // удаление монстра
        document.getElementById(target.idElement).remove();
    }
}

//фунция автоатаки по ироку
function autobattle(monster, hero) {
    let interval = setInterval(() => {
        if (hero.health > 0 && monster.health > 0) {
            if (Math.random() > 0.5) {
                if (monster.health > 0 && hero.health > 0) {
                    monsterAtack.play();
                    hero.health -= monster.damage;
                    hero.update();
                    console.log(`${monster.name} attack ${hero.name}`);
                }
                
                if (hero.health <= 0) {
                    hero.health = 0;
                    hero.update();
                    console.log(`${hero.name} die`);
                    // счетчик убийств записал сюда
                    const score = document.querySelector(`.score`)
                    parseInt(score.textContent = 0)
                }
            }
        }
        if (hero.health <= 0 || monster.health <= 0 || monster.die === true) {
            clearInterval(interval);
            // return 0;
        }
    }, 2000);
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
    document.getElementById('game-window').classList.add('class_off');
    document.querySelector('.main').style.backgroundImage = 'url(img/background/5.jpg)';
}

//старт игры
document.getElementById('star-game').addEventListener('click', function () {
    if (document.getElementById('game-window').classList == 'class_off') {
        document.getElementById('game-window').classList.remove('class_off');
    }
    document.getElementById('star-game').classList.add('class_off');
    // document.getElementById('nextLevel').classList.add('class_off');
    level1();

});


document.getElementById('exit-game').addEventListener('click', function () {
    document.querySelector('.main').style.backgroundImage = 'url(img/background/1.jpg)';
    document.getElementById('game-window').classList.add('class_off');
    document.getElementById('star-game').classList.remove('class_off');
    document.getElementById('game-window').style.backgroundImage = '';
    document.querySelector('.score').textContent = 0;
});











