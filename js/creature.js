'use strict';

//клас общий для всех существ
class Creature {
    constructor(name, health, damage, idElement) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.idElement = idElement;
    }

    //метод для обновления данных в % на странице
    update() {
        document.getElementById(this.name).querySelector('.healMonster').style.width = `${this.health}%`;
    }
}

//клас для монстров наследуется от класса Creature
class Monster extends Creature {
    constructor(name, health, damage, idElement, img) {
        super(name, health, damage, idElement);
        this.img = img;
        this.idElement = idElement;

    }

    //атака монстра
    autoBattle(hero) {
        let interval = setInterval(() => {
            if (hero.health > 0 && this.health > 0) {
                if (Math.random() > 0.5) {
                    if (this.health > 0 && hero.health > 0) {
                        monsterAtack.play();
                        hero.health -= this.damage;
                        hero.update();
                        console.log(`${this.name} attack ${hero.name}`);
                    }

                    if (hero.health <= 0) {
                        hero.health = 0;
                        hero.update();
                        console.log(`${hero.name} die`);
                        // счетчик убийств записал сюда
                        const score = document.querySelector(`.score`)
                        parseInt(score.textContent = 0)
                    }
                }
            }
            if (this.health <= 0) {
                clearInterval(interval);
            }
        }, 2000);
    }

    //переопределяем метод setImg
    setImg() {
        document.getElementById(this.idElement).style.backgroundImage = this.img;
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
        document.getElementById('arena').appendChild(monsterElement);
        this.setImg();
        this.die = false
    }

    update() {
        super.update();
    }
}

//клас для героя наследуется от класса Creature
class Hero extends Creature {
    constructor(name, health, damage, idElement) {
        super(name, health, damage, idElement);
        this.idElement = idElement;
    }

    //attack
    attack(monster) {
        if (monster.health > 0 && this.health > 0) {
            heroAtack.play();
            monster.health -= this.damage;
            monster.update();
            console.log(`${this.name} attack ${monster.name}`);
        }

        if (monster.health <= 0) {
            monster.health = 0;
            monster.update();
            console.log(`${monster.name} die`);
            // счетчик убийств записал сюда
            const score = document.querySelector(`.score`)
            parseInt(score.textContent++)
            document.getElementById(monster.idElement).remove();
        }
    }

    update() {
        document.getElementById('player').querySelector('.personHealText').textContent = this.health;
    }
}
