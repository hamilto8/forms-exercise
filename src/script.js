const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const passwordButton = document.querySelector('.pw-btn');

passwordButton.addEventListener('click', passwordsMatch);

function passwordsMatch(){
    const match = (password.value === passwordConfirmation.value);
    if(match){
        console.log('Passwords match');
    } else {
        console.log('Password must match!');
    }
}