let errorMessage = document.querySelector('#error-info')
let submit = document.querySelector('button')
let emailField = document.querySelector('#email-field')

submit.addEventListener('click', checkField)

function checkField() {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(emailField.value)) 
    {
    emailField.placeholder = 'example@email/com'; 
    errorMessage.style.display = 'block';
    emailField.style.border = '1px solid hsl(0, 100%, 74%)';
    }

}