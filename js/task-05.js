'use strict';

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener("input", () => {
    let obj = nameInput.value;
    nameOutput.textContent = obj === "" ? "незнакомец" : obj;
});