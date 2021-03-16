const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const submitBtn = document.querySelector('#submit-btn');
const alertDiv = document.querySelector('.alert-div');
const successDiv = document.querySelector('.success-div');

const form = document.querySelector('.form');
const email = form.querySelector('#email');
const country = form.querySelector('#country');
const zipCode = form.querySelector('#zip-code');

submitBtn.addEventListener('click', submitForm);

function alertMessage(msg){
    alertDiv.style.display = 'block';
        const warningMsgH4 = document.createElement('h4');
            warningMsgH4.innerText = `${msg}`;
            warningMsgH4.style.color = 'red';
            alertDiv.appendChild(warningMsgH4);
            setTimeout(() => {
                alertDiv.removeChild(warningMsgH4);
                alertDiv.style.display = 'none';
            }, 1000);
}

function checkForm(){
    const alertBorder = 'solid 2px red';
    if(!email.value.toString().includes('@') || !email.value.toString().includes('.com')){
        alertMessage('Invalid Email');
        email.style.border = alertBorder;
        return false;
    } else {
        email.style.border = ''
    }

    if(country.value.toString().length === 0){
        alertMessage('Please Select a Country');
        country.style.border = alertBorder;
        return false;
    } else {
        country.style.border = '';
    }

    if(zipCode.value.toString().length < 5){
        alertMessage('Please enter valid zip code.');
        zipCode.style.border =alertBorder;
        return false;
    } else {
        zipCode.style.border = '';
    }

    if(!passwordsMatch()){
        password.style.border = alertBorder;
        passwordConfirmation.style.border = alertBorder;
        return false;
    } else {
        password.style.border = '';
        passwordConfirmation.style.border = '';
    }
    return true;
}



function passwordsMatch(){

    if(password.value.toString().length === 0){
        alertMessage('No Password Entered');
        return false;
    } else if (password.value.toString().length < 8){
        alertMessage('Passwords must be at least 8 characters long');
        return false;
    }

    const match = (password.value === passwordConfirmation.value);
    if(match){
        return true;
    } else {
        alertMessage('Password must match!');
        return false;
    }
}

function submissionSuccess(){
    successDiv.style.display = 'block';
    form.style.opacity = '0.1';
    setTimeout(() => {
        successDiv.style.display = 'none';
        form.style.opacity = '1';
    }, 1000);
}

function submitForm(e){

    e.preventDefault();

    if(checkForm()){
        submissionSuccess();
        email.value = '';
        country.value = '';
        zipCode.value = '';
        password.value = '';
        passwordConfirmation.value = '';
    }
    
    return;
}