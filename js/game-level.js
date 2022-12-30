'use strict';

function level1() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('game-window').classList.remove('class_off');
    //создаем монстров
    let monster1 = new Monster('monster1', 100, 10, 'monster1', 'url(img/monsters/1.png)');
    let monster2 = new Monster('monster2', 100, 10, 'monster2', 'url(img/monsters/1.png)');
    let monster3 = new Monster('monster3', 100, 10, 'monster3', 'url(img/monsters/1.png)');
    //создаем героя
    let hero = new Hero('hero', 100, 10, document.getElementById('player'));

    const game = new Observer();
    game.subscribe(monster1);
    game.subscribe(monster2);
    game.subscribe(monster3);
    game.subscribe(hero);

    //добавляем монстров на страницу
    monster1.addMonster();
    monster2.addMonster();
    monster3.addMonster();

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1').addEventListener('click', function () {

        hero.attack(monster1);
        monster1.update();
        checkWin(hero, monster1, monster2, monster3);
        delBlock(monster1, monster2, monster3)
    });
    document.getElementById('monster2').addEventListener('click', function () {
        hero.attack(monster2);
        monster2.update();
        checkWin(hero, monster1, monster2, monster3);
    });
    document.getElementById('monster3').addEventListener('click', function () {
        hero.attack(monster3);
        monster3.update();
        checkWin(hero, monster1, monster2, monster3);
    });
    attackMonster(hero, monster1, monster2, monster3);

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock(monster1, monster2, monster3);
        
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            hero.health = 200;
            hero.update();
            level2()
        }
    });
    
}


//второй уровень
function level2() {
    document.querySelector('.main').style.backgroundImage = 'url(img/background/3.jpg)';
    //создаем монстров
    let monster1 = new Monster('monster1', 160, 10, 'monster1', 'url(img/monsters/2.png)');
    let monster2 = new Monster('monster2', 160, 10, 'monster2', 'url(img/monsters/2.png)');
    let monster3 = new Monster('monster3', 160, 10, 'monster3', 'url(img/monsters/2.png)');
    let monster4 = new Monster('monster4', 160, 10, 'monster4', 'url(img/monsters/2.png)');
    let monster5 = new Monster('monster5', 160, 10, 'monster5', 'url(img/monsters/2.png)');
    //создаем героя

    let hero = new Hero('hero', 200, 20, document.getElementById('player'));

    const game = new Observer();
    game.subscribe(monster1);
    game.subscribe(monster2);
    game.subscribe(monster3);
    game.subscribe(monster4);
    game.subscribe(monster5);
    game.subscribe(hero);

    //добавляем монстров на страницу
    monster1.addMonster();
    monster2.addMonster();
    monster3.addMonster();
    monster4.addMonster();
    monster5.addMonster();


    monster1.update();
    monster2.update();
    monster3.update();
    monster4.update();
    monster5.update();
    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1').addEventListener('click', function () {
        hero.attack(monster1);
        monster1.update();
        checkWin(hero, monster1, monster2, monster3, monster4, monster5)
    });
    document.getElementById('monster2').addEventListener('click', function () {
        hero.attack(monster2);
        monster2.update();
        checkWin(hero, monster1, monster2, monster3, monster4, monster5)
    });
    document.getElementById('monster3').addEventListener('click', function () {
        hero.attack(monster3);
        monster3.update();
        checkWin(hero, monster1, monster2, monster3, monster4, monster5)
    });

    document.getElementById('monster4').addEventListener('click', function () {
        hero.attack(monster4);
        monster4.update();
        checkWin(hero, monster1, monster2, monster3, monster4, monster5)
    });

    document.getElementById('monster5').addEventListener('click', function () {
        hero.attack(monster5);
        monster5.update();
        checkWin(hero, monster1, monster2, monster3, monster4, monster5)
    });
    attackMonster(hero, monster1, monster2, monster3, monster4, monster5);

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock( monster1, monster2, monster3, monster4, monster5);

        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            hero.health = 300;
            hero.update();
            level3()
        }
    });
}