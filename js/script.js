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
        monsters.map((monster) => {
            monster.health = 100
        })
    }
}


//функция атаки одного из монстров на игрока раз в 3 - 5 секунд рандомно
function attackMonster(hero, ...monsters) {
    setInterval(() => {
        monsters.forEach(monster => {
            if (monster.health > 0) {
                monster.attack(hero);
                console.log(`${monster.name} attack ${hero.name} for ${monster.damage} damage`);
                hero.update();
                checkWin(hero, ...monsters);
            }
        });
    }, 3000 + Math.random() * 5000);


}

//старт игры
document.getElementById('star-game').addEventListener('click', function () {
    //первый уровень
    level1();
});












