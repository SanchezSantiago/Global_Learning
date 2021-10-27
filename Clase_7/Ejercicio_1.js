//Ejercicio 1 - Sanchez Nieva Santiago

class Hero{
    name
    position
    life
    damage
    exp

    constructor(name, position, life, damage, exp){
        this.name = name || 'Heroe';
        this.position = '00';
        this.life = 100;
        this.damage = 5;
        this.exp = 0;
    }
}

const hero = new Hero('Pantheon');
const hero2 = new Hero();

console.log(hero);
console.log(hero2);