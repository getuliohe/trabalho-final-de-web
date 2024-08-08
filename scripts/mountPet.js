export class MountPet {
    constructor(name, age, race, role) {
        this.name = name;
        this.age = age;
        this.race = race;
        this.dexterity = 0;
        this.strength = 0;
        this.charisma = 0;
        this.wisdom = 0;
        this.intelligence = 0;
        this.constitution = 0;

        this.applyModifiers();
    }

    applyModifiers() {
        if (this.race.toLowerCase() === "wolf") {
            this.wisdom += 1;
            this.strength += 1;
            this.dexterity += 1;
            this.constitution += 1;
            this.intelligence += 1;
            this.charisma += 1;
        } else if (this.race.toLowerCase() === "young dragon") {
            this.wisdom += 1;
            this.dexterity += 1;
            this.intelligence += 1;
            this.charisma += 2;
        } else if (this.race.toLowerCase() === "giant frog") {
            this.constitution += 2;
            this.strength += 2;
            this.wisdom += 1;
        } else if (this.race.toLowerCase() === "stormy hawk") {
            this.dexterity += 2;
            this.constitution += 1;
            this.charisma += 1;
        }
    }
}
