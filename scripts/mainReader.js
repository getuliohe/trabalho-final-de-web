const charContainer = document.querySelector(".charContainer");
const petContainer = document.querySelector(".petContainer");

let pets = JSON.parse(localStorage.getItem('pets')) || [];
if (!Array.isArray(pets)) {
    pets = [pets];
}

let characters = JSON.parse(localStorage.getItem('characters')) || [];
if (!Array.isArray(characters)) {
    characters = [characters];
}

function displayCharacters(characters) {
    charContainer.innerHTML = '';

    characters.forEach(character => {
        const charElement = document.createElement('div');
        const editButton = document.createElement('button');
        editButton.innerText = "Editar";
        editButton.classList.add("btn")
        editButton.classList.add("editButton")

        editButton.onclick = () => {
            const name = prompt("Digite o nome: ");
            const age = prompt("Digite a idade: ");
            let race = "";
            let role = "";

            while(race != "human" && race != "elf" && race != "dwarf" && race != "halfling" ){
                race = prompt("Digite a raça (human;elf;dwarf;halfling): ");
            }            
            while(role != "mage" && role != "barbarian" && role != "cleric" && role != "ranger" && role != "druid" && role != "monk" && role != "sorcerer" && role != "warrior" && role != "paladin" && role != "rogue"){
                role = prompt("Digite a classe (mage;barbarian;cleric;ranger;druid;monk;sorcerer;warrior;paladin;rogue): ");
            }            
            character.name = name;
            character.age = age;
            character.race = race;
            character.role = role;
            localStorage.setItem("characters", JSON.stringify(characters))
            displayCharacters(characters)
        }
        charElement.className = 'character-item';
        charElement.innerHTML = `
            <h3>${character.name}</h3>
            <p>Idade: ${character.age}</p>
            <p>Raça: ${character.race}</p>
            <p>Classe: ${character.role}</p>
        `;
        charContainer.appendChild(charElement);
        charContainer.appendChild(editButton)
    });
}

function displayPets(pets) {
    petContainer.innerHTML = '';

    pets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.className = 'pet-item';
        petElement.innerHTML = `
            <h3>Nome: ${pet.name}</h3>
            <p>Raça: ${pet.race}</p>
            <p>Idade: ${pet.age}</p>
        `;
        const editButton = document.createElement('button');
        editButton.innerText = "Editar";
        editButton.classList.add("btn")
        editButton.classList.add("editButton")

        editButton.onclick = () => {
            const name = prompt("Digite o nome: ");
            const age = prompt("Digite a idade: ");
            let race = "";
            while(race != "wolf" && race != "young dragon" && race != "giant frog" && race != "stormy hawk" ){
                race = prompt("Digite a raça (wolf; young dragon; giant frog; stormy hawk): ");
            }            
            pet.name = name;
            pet.age = age;
            pet.race = race;
            localStorage.setItem("pets", JSON.stringify(pets))
            displayPets(pets)
        }

        petContainer.appendChild(petElement);
        petContainer.appendChild(editButton)
    });
}

displayCharacters(characters);
displayPets(pets);
