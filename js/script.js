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
    document.querySelector('.main').style.backgroundImage = `url(${images[5].src})`;
    document.getElementById('game-window').classList.add('class_off');
}

function startGame() {
    document.querySelector('.main').style.backgroundImage = `url(${images[1].src})`;
    document.getElementById('game-window').classList.remove('class_off');
    //после старта игры меняем обновляем все данные
    player.health = 100;
    cyberDemon.health = 100
    heal.style.width = `100%`
}

document.getElementById('star-game').addEventListener('click', startGame);
document.getElementById('exit-game').addEventListener('click', exitGame);

let heal = document.querySelector(`.healMonster`)
heal.style.width = `100%`

// клас общий для всех существ
class Creature {
    constructor(name, health, damage, armor, idElement) {
        this.name = name;
        this.health = parseInt(heal.style.width);
        this.damage = damage;
        this.idElement = heal;
    }
    //метод для атаки
    attack(target) {
        target.health -= this.damage;
    }
    //метод для обновления данных
    update() {
        this.idElement.style.width = this.health + `%`;
    }
}
//взаемодейстиве с класами будем делать через Обсервер
class Observer {
    constructor() {
        this.observers = [];
    }
    //подписываемся на событие
    subscribe(observer) {
        this.observers.push(observer);
    }
    //отписываемся от события
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
}


//игрок
const player = new Creature('Doom Slayer', 100, 10, 5, document.getElementById('gamer'));

//кибердемон


const cyberDemon = new Creature('Cyber Demon1', 100, 10, 5, document.getElementById('monster1'));


//создаем обсервер
const game = new Observer();
//подписываем всех на всех
game.subscribe(player);
game.subscribe(cyberDemon);
player.attack(cyberDemon);
cyberDemon.attack(player);

//проверка на победу
function сheckWin() {
    if (player.health <= 0) {
        document.querySelector('.main').style.backgroundImage = `url(${images[6].src})`;
        document.getElementById('game-window').classList.add('class_off');
    }
    if (cyberDemon.health <= 0) {
        document.querySelector('.main').style.backgroundImage = `url(${images[5].src})`;
        document.getElementById('game-window').classList.add('class_off');
    }
}

//атака по клику на иконку врага
document.getElementById('monster1').addEventListener('click', () => {
    player.attack(cyberDemon);
    cyberDemon.update();
    сheckWin();
    console.log(cyberDemon.health);
});


//интервал атаки монстра

// const healPerson = document.querySelector(`.personHealText`);
// const healPersonAbout = document.querySelector(`.personHealTextAbout`);

// const intervalAttack = setInterval (() => {
//     let heal = parseInt(healPerson.textContent);
//     if(healPerson.textContent !== '0') {
//         heal -= 10
//         healPerson.textContent = parseFloat(heal)
//     } else {
//         healPersonAbout.textContent = ``
//         healPerson.textContent = `DEAD`
//         clearInterval(intervalAttack)
//     }
// },2000)















