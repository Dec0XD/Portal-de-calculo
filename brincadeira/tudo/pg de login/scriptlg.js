const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submite', (e) => {

    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === ''){

        errorValidation(username, "Preencha esse campo!")

    } else{
        sucessValidation(username)

    }

    if(passwordValue === '') {
        errorValidation(password, "Preencha esse campo!")
    } else{
        sucessValidation(password)
    }
}

function errorValidation(input, message) {
    const inputfieldError = input.parentElement;
    const small = inputfieldError.querySelector('small')

    small.innerText = message;

    inputfieldError.className = 'input-field-error'
}

function sucessValidation() {
    const inputfieldSucess = input.parentElement;

    inputfieldSucess.className = 'input-fiel-sucess'
}
