'use strict';

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


    //добавляем монстров на страницу
    monster1Level1.addMonster();
    monster2Level1.addMonster();

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level1').addEventListener('click', function () {
        heroLevel1.attack(monster1Level1);
    });
    document.getElementById('monster2Level1').addEventListener('click', function () {
        heroLevel1.attack(monster2Level1);
    });

    // пока у монстров есть жизни, они атакуют героя раз в 2 секунды
    if (monster1Level1.health > 0 || monster2Level1.health > 0 || heroLevel1.health > 0) {
        monster1Level1.attack(heroLevel1);
        monster2Level1.attack(heroLevel1);
        heroLevel1.update();
        checkWin(heroLevel1, monster1Level1, monster2Level1);
    }
    else {
        game1.unsubscribe(heroLevel1);
        game1.unsubscribe(monster1Level1);
        game1.unsubscribe(monster2Level1);
        // heroLevel1 = null;
        // monster1Level1 = null;
        // monster2Level1 = null;
    }

    // счет убийст
    document.getElementById('monster1Level1').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster1Level1.health === 0) {
            parseInt(score.textContent++) 
        }

    })
    document.getElementById('monster2Level1').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster2Level1.health === 0) {
            parseInt(score.textContent++) 
        }
    })

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock(monster1Level1, monster2Level1);
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            level2();
            monster1Level1.health = 100;
            monster2Level1.health = 100;
            
        }
    });
}


function level2() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/3.jpg)';
    //создаем монстров
    let monster1Level2 = new Monster('monster1Level2', 100, 10, 'monster1Level2', 'url(img/monsters/2.png)');
    let monster2Level2 = new Monster('monster2Level2', 100, 10, 'monster2Level2', 'url(img/monsters/2.png)');
    //создаем героя
    let heroLevel2 = new Hero('hero', 100, 10, document.getElementById('player'));

    const game2 = new Observer();
    game2.subscribe(monster1Level2);
    game2.subscribe(monster2Level2);
    game2.subscribe(heroLevel2);



    //добавляем монстров на страницу
    monster1Level2.addMonster();
    monster2Level2.addMonster();

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level2').addEventListener('click', function () {
        heroLevel2.attack(monster1Level2);
    });
    document.getElementById('monster2Level2').addEventListener('click', function () {
        heroLevel2.attack(monster2Level2);
    });

    // пока у монстров есть жизни, они атакуют героя раз в 2 секунды
    if (monster1Level2.health > 0 || monster2Level2.health > 0 || heroLevel2.health > 0) {
        monster1Level2.attack(heroLevel2);
        monster2Level2.attack(heroLevel2);
        heroLevel2.update();
        checkWin(heroLevel2, monster1Level2, monster2Level2);
    }
    else {
        game2.unsubscribe(heroLevel2);
        game2.unsubscribe(monster1Level2);
        game2.unsubscribe(monster2Level2);
        // heroLevel2 = null;
        // monster1Level2 = null;
        // monster2Level2 = null;
    }

    // счет убийст
    document.getElementById('monster1Level2').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster1Level2.health === 0) {
            parseInt(score.textContent++) 
        }

    })
    document.getElementById('monster2Level2').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster2Level2.health === 0) {
            parseInt(score.textContent++) 
        }
    })

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock( monster1Level2, monster2Level2);
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            level3();
            monster1Level2.health = 100;
            monster2Level2.health = 100;
        }
    });
}

function level3() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/6.jpg)';
    //создаем монстров
    let monster1Level3 = new Monster('monster1Level3', 100, 10, 'monster1Level3', 'url(img/monsters/3.png)');
    let monster2Level3 = new Monster('monster2Level3', 100, 10, 'monster2Level3', 'url(img/monsters/3.png)');
    //создаем героя
    let heroLevel3 = new Hero('hero', 100, 10, document.getElementById('player'));

    const game3 = new Observer();
    game3.subscribe(monster1Level3);
    game3.subscribe(monster2Level3);
    game3.subscribe(heroLevel3);



    //добавляем монстров на страницу
    monster1Level3.addMonster();
    monster2Level3.addMonster();

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level3').addEventListener('click', function () {
        heroLevel3.attack(monster1Level3);
    });
    document.getElementById('monster2Level3').addEventListener('click', function () {
        heroLevel3.attack(monster2Level3);
    });

    // пока у монстров есть жизни, они атакуют героя раз в 2 секунды
    if (monster1Level3.health > 0 || monster2Level3.health > 0 || heroLevel3.health > 0) {
        monster1Level3.attack(heroLevel3);
        monster2Level3.attack(heroLevel3);
        heroLevel3.update();
        checkWin(heroLevel3, monster1Level3, monster2Level3);
    }
    else {
        game3.unsubscribe(heroLevel3);
        game3.unsubscribe(monster1Level3);
        game3.unsubscribe(monster2Level3);
        // heroLevel3 = null;
        // monster1Level3 = null;
        // monster2Level2 = null;
    }

    // счет убийст
    document.getElementById('monster1Level3').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster1Level3.health === 0) {
            parseInt(score.textContent++) 
        }

    })
    document.getElementById('monster2Level3').addEventListener('click', function () {
        const score = document.querySelector(`.score`)
        if(monster2Level3.health === 0) {
            parseInt(score.textContent++) 
        }
    })
    

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock( monster1Level3, monster2Level3);

        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            level1();
            monster1Level3.health = 100;
            monster2Level3.health = 100;
        }
    });
}