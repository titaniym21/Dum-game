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
        attack(heroLevel1, monster1Level1);
    });
    document.getElementById('monster2Level1').addEventListener('click', function () {
        attack(heroLevel1, monster2Level1);
    });

    autobattle(monster1Level1, heroLevel1);
    autobattle(monster2Level1, heroLevel1);


    // счет убийст
    // document.getElementById('monster1Level1').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster1Level1.health === 0) {
    //         parseInt(score.textContent++) 
    //     }

    // })
    // document.getElementById('monster2Level1').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster2Level1.health === 0) {
    //         parseInt(score.textContent++) 
    //     }
    // })

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        //let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock(monster1Level1, monster2Level1);
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            game1.unsubscribe(monster1Level1);
            game1.unsubscribe(monster2Level1);
            game1.unsubscribe(heroLevel1);
            level2();
            monster1Level1.health = 100;
            monster2Level1.health = 100;
            monster1Level1.die = true
            monster2Level1.die = true
            heroLevel1.health = 100;
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

    const game1 = new Observer();
    game1.subscribe(monster1Level2);
    game1.subscribe(monster2Level2);
    game1.subscribe(heroLevel2);


    //добавляем монстров на страницу
    monster1Level2.addMonster();
    monster2Level2.addMonster();

    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level2').addEventListener('click', function () {
        attack(heroLevel2, monster1Level2);
    });
    document.getElementById('monster2Level2').addEventListener('click', function () {
        attack(heroLevel2, monster2Level2);
    });

    autobattle(monster1Level2, heroLevel2);
    autobattle(monster2Level2, heroLevel2);


    // счет убийст
    // document.getElementById('monster1Level1').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster1Level1.health === 0) {
    //         parseInt(score.textContent++) 
    //     }

    // })
    // document.getElementById('monster2Level1').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster2Level1.health === 0) {
    //         parseInt(score.textContent++) 
    //     }
    // })

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        //let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock(monster1Level2, monster2Level2);
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            game1.unsubscribe(monster1Level2);
            game1.unsubscribe(monster2Level2);
            game1.unsubscribe(heroLevel2);
            level3();
            monster1Level2.health = 100;
            monster2Level2.health = 100;
            monster1Level2.die = true;
            monster2Level2.die = true;
            heroLevel2.health = 100;
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



    //добавляем монстров на страницу
    monster1Level3.addMonster();
    monster2Level3.addMonster();

    document.getElementById('monster1Level3').addEventListener('click', function () {
        attack(heroLevel3, monster1Level3);
    });
    document.getElementById('monster2Level3').addEventListener('click', function () {
        attack(heroLevel3, monster2Level3);
    });

    autobattle(monster1Level3, heroLevel3);
    autobattle(monster2Level3, heroLevel3);


    // // счет убийст
    // document.getElementById('monster1Level3').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster1Level3.health === 0) {
    //         parseInt(score.textContent++) 
    //     }

    // })
    // document.getElementById('monster2Level3').addEventListener('click', function () {
    //     const score = document.querySelector(`.score`)
    //     if(monster2Level3.health === 0) {
    //         parseInt(score.textContent++) 
    //     }
    // })

    // слушатель на арену
    document.getElementById('arena').addEventListener('click', function () {
        //let monstersDiv = document.querySelectorAll(`.monster`);
        delBlock(monster1Level3, monster2Level3);
        // переход на следю уровень
        if(document.querySelectorAll(`.monster`).length === 0) {
            game3.unsubscribe(monster1Level3);
            game3.unsubscribe(monster2Level3);
            game3.unsubscribe(heroLevel3);
            monster1Level3.health = 100;
            monster2Level3.health = 100;
            monster1Level3.die = true
            monster2Level3.die = true
            heroLevel3.health = 100;
        }
    });
}
    
