'use strict';

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener("input", () => {
    const validationLength = validationInput.getAttribute('data-length')
    if (validationInput.value.length === Number(validationLength)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});