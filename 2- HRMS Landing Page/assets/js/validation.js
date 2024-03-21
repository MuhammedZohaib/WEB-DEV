const form = document.querySelector(".contant-form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message-area");
const submitButton = document.querySelector("#contact-form-submit");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const isNameValid = validateName(nameField.value);
    const isEmailValid = validateEmail(emailField.value);
    const isMessageValid = validateMessage(messageField.value);

    toggleInputClass(nameField, isNameValid);
    toggleInputClass(emailField, isEmailValid);
    toggleInputClass(messageField, isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
        console.log("Name:", nameField.value);
        console.log("Email:", emailField.value);
        console.log("Message:", messageField.value);
    }
});

function toggleInputClass(inputElement, isValid) {
    if (isValid) {
        inputElement.classList.remove('input-error');
        inputElement.classList.add('input-valid');
    } else {
        inputElement.classList.remove('input-valid');
        inputElement.classList.add('input-error');
    }
}

function validateName(name) {
    return name.trim() !== '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim() !== '';
}
