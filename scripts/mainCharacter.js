import { Character } from "./character.js";

const formularioPersonagem = document.querySelector("#formularioPersonagem");
const nameInputChar = document.querySelector("#nameInputChar");
const ageInputChar = document.querySelector("#ageInputChar");
const raceInputChar = document.querySelector("#raceInputChar");
const classInputChar = document.querySelector("#classInputChar");

let characters = JSON.parse(localStorage.getItem('characters')) || []
if (!Array.isArray(characters)){
    characters = [characters]
}

formularioPersonagem.addEventListener('submit', (e) => {

    e.preventDefault()
    if(raceInputChar.value == "-----" || classInputChar.value == "-----"){
        alert("Selecione uma opção em raça ou classe!");
        return
    }
    let myCharacter = new Character(nameInputChar.value, ageInputChar.value, raceInputChar.value, classInputChar.value);

    if(myCharacter){
        characters.push(myCharacter);
        localStorage.setItem("characters",JSON.stringify(characters));
    }

})