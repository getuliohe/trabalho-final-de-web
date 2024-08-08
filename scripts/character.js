class Abilities {
    constructor(dexterity, strength, charisma, wisdom, intelligence, constitution) {
        this.dexterity = dexterity;
        this.strength = strength;
        this.charisma = charisma;
        this.wisdom = wisdom;
        this.intelligence = intelligence;
        this.constitution = constitution;
    }
}

class Character {
    constructor() {
        this.name = prompt("\nName your character: ");
        this.race = prompt(`\n${this.name}'s race: `);
        this.role = prompt(`\n${this.name}'s class: `);
        this.height = parseFloat(prompt(`\n${this.name}'s height: `));
        this.weight = parseFloat(prompt(`\n${this.name}'s weight: `));

        this.abilities = new Abilities(
            parseInt(prompt(`\n${this.name}'s dexterity: `)),
            parseInt(prompt(`\n${this.name}'s strength: `)),
            parseInt(prompt(`\n${this.name}'s charisma: `)),
            parseInt(prompt(`\n${this.name}'s wisdom: `)),
            parseInt(prompt(`\n${this.name}'s intelligence: `)),
            parseInt(prompt(`\n${this.name}'s constitution: `))
        );

        this.applyModifiers();
    }

    applyModifiers() {
        if (this.race.toLowerCase() === "human") {
            this.abilities.wisdom += 1;
            this.abilities.strength += 1;
            this.abilities.dexterity += 1;
            this.abilities.constitution += 1;
            this.abilities.intelligence += 1;
            this.abilities.charisma += 1;
        } else if (this.race.toLowerCase() === "elf") {
            this.abilities.wisdom += 1;
            this.abilities.dexterity += 1;
            this.abilities.intelligence += 1;
            this.abilities.charisma += 2;
        } else if (this.race.toLowerCase() === "dwarf") {
            this.abilities.constitution += 2;
            this.abilities.strength += 2;
            this.abilities.wisdom += 1;
        } else if (this.race.toLowerCase() === "halfling") {
            this.abilities.dexterity += 2;
            this.abilities.constitution += 1;
            this.abilities.charisma += 1;
        }

        if (this.role.toLowerCase() === "mage") {
            this.abilities.wisdom += 2;
            this.abilities.intelligence += 1;
        } else if (this.role.toLowerCase() === "barbarian") {
            this.abilities.strength += 3;
            this.abilities.constitution += 1;
        } else if (this.role.toLowerCase() === "cleric") {
            this.abilities.charisma += 2;
            this.abilities.wisdom += 1;
        } else if (this.role.toLowerCase() === "ranger") {
            this.abilities.dexterity += 2;
            this.abilities.strength += 1;
        } else if (this.role.toLowerCase() === "druid") {
            this.abilities.intelligence += 2;
            this.abilities.wisdom += 1;
        } else if (this.role.toLowerCase() === "monk") {
            this.abilities.dexterity += 2;
            this.abilities.strength += 2;
        } else if (this.role.toLowerCase() === "sorcerer") {
            this.abilities.charisma += 2;
            this.abilities.constitution += 1;
        } else if (this.role.toLowerCase() === "warrior") {
            this.abilities.strength += 1;
            this.abilities.constitution += 3;
        } else if (this.role.toLowerCase() === "paladin") {
            this.abilities.charisma += 2;
            this.abilities.wisdom += 1;
        } else if (this.role.toLowerCase() === "rogue") {
            this.abilities.dexterity += 3;
            this.abilities.intelligence += 1;
        }
    }
}

// Criando uma instância de Character
const character = new Character();
