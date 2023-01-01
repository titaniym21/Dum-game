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

// функия атаки игрока по монстру
function attack(main, target) {

    if (main.health > 0 && target.health > 0) {
        target.health -= main.damage;
        target.update();
        console.log(`${main.name} attack ${target.name}`);
    }
    if (target.health <= 0) {
        target.health = 0;
        target.update();
        console.log(`${target.name} die`);
    }

}

//фунция автоатаки по ироку

function autobattle(monster, hero) {
    let interval = setInterval(() => {
        if (hero.health > 0 && monster.health > 0) {
            if (Math.random() > 0.5) {
                attack(monster, hero);
                console.log('monster attack hero');
            }
        }
        if (hero.health <= 0 || monster.health <= 0) {
            clearInterval(interval);
        }
    }, 2000);
}


//старт игры
document.getElementById('star-game').addEventListener('click', function () {
    if(  document.getElementById('game-window').classList == 'class_off' ) {
        document.getElementById('game-window').classList.remove('class_off');
    }
    level1();
});


document.getElementById('exit-game').addEventListener('click', function () {
    document.querySelector('.main').style.backgroundImage = 'url(img/background/1.jpg)';
    document.getElementById('game-window').classList.add('class_off');
    document.getElementById('game-window').style.backgroundImage = '';
    document.querySelector('.score').textContent = 0;
});











