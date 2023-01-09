'use strict';
// описание всех  вызовов функций в первом уровне, остальные по анологии

function level1() {
    //первый уровень
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('game-window').classList.remove('class_off');
    //создаем монстров
    let monster1Level1 = new Monster('monster1Level1', 100, 10, 'monster1Level1', 'url(img/monsters/1.png)');
    let monster2Level1 = new Monster('monster2Level1', 100, 10, 'monster2Level1', 'url(img/monsters/1.png)');
    //создаем героя
    let heroLevel1 = new Hero('hero', 100, 10, document.getElementById('player'));
    // создаем наблюдателя
    const game1 = new Observer();
    //подписываем монстров и героя на наблюдателя
    game1.subscribe(monster1Level1);
    game1.subscribe(monster2Level1);
    game1.subscribe(heroLevel1);

    //создаем блок арены
    arenaBox(monster1Level1, monster2Level1);


    //при клике на монстра, вызываем функцию атаки
    document.getElementById('monster1Level1').addEventListener('click', function () {
        heroLevel1.attack(monster1Level1);
    });
    document.getElementById('monster2Level1').addEventListener('click', function () {
        heroLevel1.attack(monster2Level1);
    });

    //автоатака монстров
    monster1Level1.autoBattle(heroLevel1);
    monster2Level1.autoBattle(heroLevel1);

    // проверка на выход из игры
    if (document.getElementById('exit-game').addEventListener('click', function () {
        monster1Level1.health = 0;
        monster2Level1.health = 0;
        heroLevel1.health = 0;
        return endLevel(monster1Level1, monster2Level1, heroLevel1, game1, endGame);
    })) ;

    // слушатель события на арене
    document.getElementById('arena').addEventListener('click', function () {
        if (document.querySelectorAll(`.monster`).length === 0) {
            alert('Вы победили');
            return endLevel(monster1Level1, monster2Level1, heroLevel1, game1, level2);
        }
        if (heroLevel1.health <= 0) {
            alert('Вы проиграли');
            return endLevel(monster1Level1, monster2Level1, heroLevel1, game1, level1);
        }
    });

}


function level2() {
    document.querySelector('.main').style.backgroundImage = 'url(img/background/2.jpg)';
    document.getElementById('game-window').classList.remove('class_off');

    let monster1Level2 = new Monster('monster1Level2', 100, 10, 'monster1Level2', 'url(img/monsters/2.png)');
    let monster2Level2 = new Monster('monster2Level2', 100, 10, 'monster2Level2', 'url(img/monsters/2.png)');
    let heroLevel2 = new Hero('hero', 100, 10, document.getElementById('player'));

    const game2 = new Observer();
    game2.subscribe(monster1Level2);
    game2.subscribe(monster2Level2);
    game2.subscribe(heroLevel2);

    arenaBox(monster1Level2, monster2Level2);

    document.getElementById('monster1Level2').addEventListener('click', function () {
        heroLevel2.attack(monster1Level2);
    });

    document.getElementById('monster2Level2').addEventListener('click', function () {
        heroLevel2.attack(monster2Level2);
    });

    monster1Level2.autoBattle(heroLevel2);
    monster2Level2.autoBattle(heroLevel2);

    if (document.getElementById('exit-game').addEventListener('click', function () {
        monster1Level2.health = 0;
        monster2Level2.health = 0;
        heroLevel2.health = 0;
        return endLevel(monster1Level2, monster2Level2, heroLevel2, game2, endGame);
    })) ;

    document.getElementById('arena').addEventListener('click', function () {
        if (document.querySelectorAll(`.monster`).length === 0) {
            alert('Вы победили');
            return endLevel(monster1Level2, monster2Level2, heroLevel2, game2, level3);
        }
        if (heroLevel2.health <= 0) {
            alert('Вы проиграли');
            return endLevel(monster1Level2, monster2Level2, heroLevel2, game2, level2);
        }
    });
}


function level3() {
    document.querySelector('.main').style.backgroundImage = 'url(img/background/4.jpg)';

    let monster1Level3 = new Monster('monster1Level3', 100, 10, 'monster1Level3', 'url(img/monsters/3.png)');
    let monster2Level3 = new Monster('monster2Level3', 100, 10, 'monster2Level3', 'url(img/monsters/3.png)');

    let heroLevel3 = new Hero('hero', 100, 10, document.getElementById('player'));
    heroLevel3.update();

    const game3 = new Observer();
    game3.subscribe(monster1Level3);
    game3.subscribe(monster2Level3);
    game3.subscribe(heroLevel3);

    arenaBox(monster1Level3, monster2Level3);

    document.getElementById('monster1Level3').addEventListener('click', function () {
        heroLevel3.attack(monster1Level3);
    });

    document.getElementById('monster2Level3').addEventListener('click', function () {
        heroLevel3.attack(monster2Level3);
    });


    monster1Level3.autoBattle(heroLevel3);
    monster2Level3.autoBattle(heroLevel3);

    if (document.getElementById('exit-game').addEventListener('click', function () {
        monster1Level3.health = 0;
        monster2Level3.health = 0;
        heroLevel3.health = 0;
        return endLevel(monster1Level3, monster2Level3, heroLevel3, game3, endGame);
    })) ;

    document.getElementById('arena').addEventListener('click', function () {
        if (document.querySelectorAll(`.monster`).length === 0) {
            alert('Вы победили');
            return endGame();
        }
        if (heroLevel3.health <= 0) {
            alert('Вы проиграли');
            return endLevel(monster1Level3, monster2Level3, heroLevel3, game3, level3);
        }
    });
}

