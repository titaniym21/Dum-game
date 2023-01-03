'use strict';
//

function level1() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('game-window').classList.remove('class_off');
    //создаем монстров
    let monster1Level1 = new Monster('monster1Level1', 100, 10, 'monster1Level1', 'url(img/monsters/1.png)');
    let monster2Level1 = new Monster('monster2Level1', 100, 10, 'monster2Level1', 'url(img/monsters/1.png)');
    //создаем героя
    let heroLevel1 = new Hero('hero', 100, 10, document.getElementById('player'));

    const game1 = new Observer();
    game1.subscribe(monster1Level1);
    game1.subscribe(monster2Level1);
    game1.subscribe(heroLevel1);
    //создаем блок арены
    arenaBox(monster1Level1, monster2Level1);


    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level1').addEventListener('click', function () {
        attack(heroLevel1, monster1Level1);

    });
    document.getElementById('monster2Level1').addEventListener('click', function () {
        attack(heroLevel1, monster2Level1);
    });

    //автоатака монстров
    autobattle(monster1Level1, heroLevel1);
    autobattle(monster2Level1, heroLevel1);

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        console.log(document.querySelectorAll(`.monster`).length);
        if(document.querySelectorAll(`.monster`).length === 0) {
            endLevel(monster1Level1, monster2Level1, heroLevel1, game1, level2);
        }
    });
}



function level2() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('game-window').classList.remove('class_off');
    //создаем монстров
    let monster1Level2 = new Monster('monster1Level2', 100, 10, 'monster1Level2', 'url(img/monsters/2.png)');
    let monster2Level2 = new Monster('monster2Level2', 100, 10, 'monster2Level2', 'url(img/monsters/2.png)');
    //создаем героя
    let heroLevel2 = new Hero('hero', 100, 10, document.getElementById('player'));

    const game2 = new Observer();
    game2.subscribe(monster1Level2);
    game2.subscribe(monster2Level2);
    game2.subscribe(heroLevel2);

    //создаем блок арены
    arenaBox(monster1Level2, monster2Level2);

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level2').addEventListener('click', function () {
        attack(heroLevel2, monster1Level2);
    });
    document.getElementById('monster2Level2').addEventListener('click', function () {
        attack(heroLevel2, monster2Level2);
    });
    //автоатака монстров
    autobattle(monster1Level2, heroLevel2);
    autobattle(monster2Level2, heroLevel2);

    document.getElementById('arena').addEventListener('click', function () {
        if(document.querySelectorAll(`.monster`).length === 0) {
            endLevel(monster1Level2, monster2Level2, heroLevel2, game2, level3);
        }
    });
}


function level3() {

    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/4.jpg)';
    //создаем монстров
    let monster1Level3 = new Monster('monster1Level3', 100, 10, 'monster1Level3', 'url(img/monsters/3.png)');
    let monster2Level3 = new Monster('monster2Level3', 100, 10, 'monster2Level3', 'url(img/monsters/3.png)');
    //создаем героя
    let heroLevel3 = new Hero('hero', 100, 10, document.getElementById('player'));
    heroLevel3.update();

    const game3 = new Observer();
    game3.subscribe(monster1Level3);
    game3.subscribe(monster2Level3);
    game3.subscribe(heroLevel3);
    //создаем блок арены
    arenaBox(monster1Level3, monster2Level3);

    document.getElementById('monster1Level3').addEventListener('click', function () {
        attack(heroLevel3, monster1Level3);
    });
    document.getElementById('monster2Level3').addEventListener('click', function () {
        attack(heroLevel3, monster2Level3);
    });

    //автоатака монстров
    autobattle(monster1Level3, heroLevel3);
    autobattle(monster2Level3, heroLevel3);

    document.getElementById('arena').addEventListener('click', function () {
        if (document.querySelectorAll(`.monster`).length == 0) {
            endGame();
        }
    });
}

