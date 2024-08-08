export class Character {
    constructor(name, age, race, role) {
        this.name = name;
        this.age = age;
        this.race = race;
        this.role = role;
        this.dexterity = 0;
        this.strength = 0;
        this.charisma = 0;
        this.wisdom = 0;
        this.intelligence = 0;
        this.constitution = 0;

        this.applyModifiers();
    }

    applyModifiers() {
        if (this.race.toLowerCase() === "human") {
            this.wisdom += 1;
            this.strength += 1;
            this.dexterity += 1;
            this.constitution += 1;
            this.intelligence += 1;
            this.charisma += 1;
        } else if (this.race.toLowerCase() === "elf") {
            this.wisdom += 1;
            this.dexterity += 1;
            this.intelligence += 1;
            this.charisma += 2;
        } else if (this.race.toLowerCase() === "dwarf") {
            this.constitution += 2;
            this.strength += 2;
            this.wisdom += 1;
        } else if (this.race.toLowerCase() === "halfling") {
            this.dexterity += 2;
            this.constitution += 1;
            this.charisma += 1;
        }

        if (this.role.toLowerCase() === "mage") {
            this.wisdom += 2;
            this.intelligence += 1;
        } else if (this.role.toLowerCase() === "barbarian") {
            this.strength += 3;
            this.constitution += 1;
        } else if (this.role.toLowerCase() === "cleric") {
            this.charisma += 2;
            this.wisdom += 1;
        } else if (this.role.toLowerCase() === "ranger") {
            this.dexterity += 2;
            this.strength += 1;
        } else if (this.role.toLowerCase() === "druid") {
            this.intelligence += 2;
            this.wisdom += 1;
        } else if (this.role.toLowerCase() === "monk") {
            this.dexterity += 2;
            this.strength += 2;
        } else if (this.role.toLowerCase() === "sorcerer") {
            this.charisma += 2;
            this.constitution += 1;
        } else if (this.role.toLowerCase() === "warrior") {
            this.strength += 1;
            this.constitution += 3;
        } else if (this.role.toLowerCase() === "paladin") {
            this.charisma += 2;
            this.wisdom += 1;
        } else if (this.role.toLowerCase() === "rogue") {
            this.dexterity += 3;
            this.intelligence += 1;
        }
    }
}
