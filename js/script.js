'use strict';

//массив заставок
const images = [
    {
        src: 'img/1.jpg',
        alt: '1'
    },
    {
        src: 'img/2.jpg',
        alt: '2'
    },
    {
        src: 'img/3.jpg',
        alt: '3'
    },
    {
        src: 'img/4.jpg',
        alt: '4'
    },
    {
        src: 'img/5.jpg',
        alt: '5'
    },
    {
        src: 'img/6.jpg',
        alt: '6'
    }
];
// заставка при старте игры
document.querySelector('.container').style.backgroundImage = `url(${images[0].src})`;

//выходим из игры сменяем заставку и убираем кнопки (наверно поменяем на описание как играть)
function exitGame() {
    document.getElementById('star-game').remove();
    document.getElementById('exit-game').remove();
    document.querySelector('.container').style.backgroundImage = `url(${images[5].src})`;
}

document.getElementById('exit-game').addEventListener('click', exitGame);

//нада будет тело игры и функии с игроком в отдельном файле сделать

// клас общий для всех существ
class Creature {
    constructor(name, health, damage, armor, images) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.armor = armor;
        this.images = images;
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
//наслудуемся от существа и создаем клас игрока
class Player extends Creature {
    constructor(name, health, damage, armor, images) {
        super(name, health, damage, armor, images);
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

//наслудуемся от существа и создаем клас монстра
class Monster extends Creature {
    constructor(name, health, damage, armor, images) {
        super(name, health, damage, armor, images);
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
const player = new Player('Doom Slayer', 100, 10, 5, 'картинка');

//кибердемон
const monster = new Monster('Cyberdemon', 100, 10, 5, 'картинка');



// переходим в игру сменяем заставку и убираем кнопки
function startGame() {
    document.querySelector('.container').style.backgroundImage = `url(${images[1].src})`;
    document.getElementById('star-game').remove();
    document.getElementById('exit-game').remove();

}

document.getElementById('star-game').addEventListener('click', startGame);


