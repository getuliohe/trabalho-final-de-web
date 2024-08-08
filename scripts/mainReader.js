const charContainer = document.querySelector(".charContainer");
const petContainer = document.querySelector(".petContainer");

// Recupera e assegura que 'pets' seja um array
let pets = JSON.parse(localStorage.getItem('pets')) || [];
if (!Array.isArray(pets)) {
    pets = [pets];
}

// Recupera e assegura que 'characters' seja um array
let characters = JSON.parse(localStorage.getItem('characters')) || [];
if (!Array.isArray(characters)) {
    characters = [characters];
}

// Função para exibir personagens
function displayCharacters(characters) {
    charContainer.innerHTML = ''; // Limpa o container antes de adicionar novos elementos

    characters.forEach(character => {
        const charElement = document.createElement('div');
        charElement.className = 'character-item';
        charElement.innerHTML = `
            <h3>${character.name}</h3>
            <p>Idade: ${character.age}</p>
            <p>Raça: ${character.race}</p>
            <p>Classe: ${character.class}</p>
        `;
        charContainer.appendChild(charElement);
    });
}

// Função para exibir pets
function displayPets(pets) {
    petContainer.innerHTML = ''; // Limpa o container antes de adicionar novos elementos

    pets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.className = 'pet-item';
        petElement.innerHTML = `
            <h3>Nome: ${pet.name}</h3>
            <p>Raça: ${pet.race}</p>
            <p>Idade: ${pet.age}</p>
        `;
        petContainer.appendChild(petElement);
    });
}

// Chama as funções para exibir os dados
displayCharacters(characters);
displayPets(pets);
