import { MountPet } from "./mountPet.js";

const formularioPet = document.querySelector("#fpetMountForm");
const nameInputPet = document.querySelector("#nameInputPet");
const ageInputPet = document.querySelector("#ageInputPet");
const raceInputPet = document.querySelector("#raceInputPet");

let pets = JSON.parse(localStorage.getItem('pets')) || []
if (!Array.isArray(pets)){
    pets = [pets]
}

formularioPet.addEventListener('submit', (e) => {

    e.preventDefault()
    if(raceInputPet.value == "-----"){
        alert("Selecione uma opção em raça ou classe!");
        return
    }
    let myPet = new MountPet(nameInputPet.value, ageInputPet.value, raceInputPet.value);

    if(myPet){
        pets.push(myPet);
        localStorage.setItem("pets",JSON.stringify(pets));
    }

})