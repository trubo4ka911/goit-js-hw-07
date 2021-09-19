const validationInput = document.getElementById('validation-input');

validationInput.addEventListener("input", () => {
    if (validationInput.value.length === Number.parseInt(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});