'use strict';

//клас общий для всех существ
class Creature {
    constructor(name, health, damage, idElement) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    //метод для атаки
    attack(target) {
        target.health -= this.damage;
    }

    //метод для обновления данных в % на странице
    update() {
        document.getElementById(this.name).querySelector('.healMonster').style.width = `${this.health}%`;
    }
}

//клас для монстров наследуется от класса Creature
class Monster extends Creature {
    constructor(name, health, damage, idElement) {
        super(name, health, damage, idElement);
        this.idElement = idElement;
    }

    //метод для добавления монстра на страницу
    addMonster() {
        let monsterElement = document.createElement('div');
        monsterElement.classList.add('monster');
        monsterElement.id = this.name;
        let healMonsterBox = document.createElement('div');
        healMonsterBox.classList.add('healMonsterBox');
        let healMonster = document.createElement('div');
        healMonster.classList.add('healMonster');
        healMonsterBox.appendChild(healMonster);
        monsterElement.appendChild(healMonsterBox);
        document.getElementById('test').appendChild(monsterElement);
    }
}

//клас для героя наследуется от класса Creature
class Hero extends Creature {
    constructor(name, health, damage, idElement) {
        super(name, health, damage, idElement);
        this.idElement = idElement;
    }

    //переписал метод для героя что бы он указывал на его хп
    update() {
        document.getElementById('player').querySelector('.personHealText').textContent = this.health;
    }
}
