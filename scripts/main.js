import { Character } from "./character.js";

const formularioPersonagem = document.querySelector("#formularioPersonagem");
const nameInputChar = document.querySelector("#nameInputChar");
const ageInputChar = document.querySelector("#ageInputChar");
const raceInputChar = document.querySelector("#raceInputChar");
const classInputChar = document.querySelector("#classInputChar");

formularioPersonagem.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let myCharacter = new Character(nameInputChar.value, ageInputChar.value, raceInputChar.value, classInputChar.value);

    console.log(myCharacter)
})