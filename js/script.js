'use strict';


//массив заставок
const images = [
    {
        src: 'img/backgraund/1.jpg',
        alt: '1'
    },
    {
        src: 'img/backgraund/2.jpg',
        alt: '2'
    },
    {
        src: 'img/backgraund/3.jpg',
        alt: '3'
    },
    {
        src: 'img/backgraund/4.jpg',
        alt: '4'
    },
    {
        src: 'img/backgraund/5.jpg',
        alt: '5'
    },
    {
        src: 'img/backgraund/6.jpg',
        alt: '6'
    }
];
// заставка при старте игры
document.querySelector('.main').style.backgroundImage = `url(${images[0].src})`;
document.getElementById('game-window').classList.add('class_off');

//выходим из игры сменяем заставку и убираем кнопки (наверно поменяем на описание как играть)
function exitGame() {
    document.getElementById('star-game').classList.remove('class_off');
    document.getElementById('exit-game').classList.add('class_off');
    document.querySelector('.main').style.backgroundImage = `url(${images[5].src})`;
    document.getElementById('game-window').classList.add('class_off');
}

function startGame() {
    document.getElementById('exit-game').classList.remove('class_off');
    document.querySelector('.main').style.backgroundImage = `url(${images[1].src})`;
    document.getElementById('star-game').classList.add('class_off');
    document.getElementById('game-window').classList.remove('class_off');
}

document.getElementById('star-game').addEventListener('click', startGame);
document.getElementById('exit-game').addEventListener('click', exitGame);


// клас общий для всех существ
class Creature {
    constructor(name, health, damage, armor, idElement) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.armor = armor;
        this.idElement = idElement;
    }
    //метод для атаки
    attack(target) {
        target.health -= this.damage;
    }
    //метод для защиты
    defence(target) {
        target.damage -= this.armor;
    }
}
//взаемодейстиве с класами будем делать через Обсервер
class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

//игрок
const player = new Creature('Doom Slayer', 100, 10, 5);

//кибердемон
const cyberDemon = new Creature('Cyber Demon1', 100, 10, 5, document.getElementById('monster1'));
const cyberDemon1 = new Creature('Cyber Demon2', 100, 10, 5, document.getElementById('monster2'));
const cyberDemon2 = new Creature('Cyber Demon3', 100, 10, 5 , document.getElementById('monster3'));
const cyberDemon3 = new Creature('Cyber Demon4', 100, 10, 5 , document.getElementById('monster4'));
const cyberDemon4 = new Creature('Cyber Demon5', 100, 10, 5 , document.getElementById('monster5'));
const cyberDemon5 = new Creature('Cyber Demon6', 100, 10, 5 , document.getElementById('monster6'));

//создаем обсервер
const game = new Observer();
//подписываем игрока
game.subscribe(player);
//подписываем кибердемона
game.subscribe(cyberDemon);
game.subscribe(cyberDemon1);
game.subscribe(cyberDemon2);
game.subscribe(cyberDemon3);
game.subscribe(cyberDemon4);
game.subscribe(cyberDemon5);














