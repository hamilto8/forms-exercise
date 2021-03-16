const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const submitBtn = document.querySelector('#submit-btn');
const alertDiv = document.querySelector('.alert-div');

const form = document.querySelector('.form');
const email = form.querySelector('#email');
const country = form.querySelector('#country');
const zipCode = form.querySelector('#zip-code');

submitBtn.addEventListener('click', submitForm);

function passwordsMatch(){

    if(password.value.toString().length === 0){
        console.log('No password entered');
        alertDiv.style.display = 'block';
        const warningMsgH4 = document.createElement('h4');
            warningMsgH4.innerText = 'No Password Entered';
            warningMsgH4.style.color = 'red';
            alertDiv.appendChild(warningMsgH4);
            setTimeout(() => {
                alertDiv.removeChild(warningMsgH4);
                alertDiv.style.display = 'none';
            }, 1000);
        return false;
    } else if (password.value.toString().length < 8){
        console.log('Passwords must be at least 8 characters long');
        alertDiv.style.display = 'block';
        const warningMsgH4 = document.createElement('h4');
            warningMsgH4.innerText = 'Passwords must be at least 8 characters long';
            warningMsgH4.style.color = 'red';
            alertDiv.appendChild(warningMsgH4);
            setTimeout(() => {
                alertDiv.removeChild(warningMsgH4);
                alertDiv.style.display = 'none';
            }, 1000);

        return false;
    }

    const match = (password.value === passwordConfirmation.value);
    if(match){
        console.log('Passwords match');
        return true;
    } else {
        console.log('Password must match!');
        alertDiv.style.display = 'block';
        const warningMsgH4 = document.createElement('h4');
            warningMsgH4.innerText = 'Password must match!';
            warningMsgH4.style.color = 'red';
            alertDiv.appendChild(warningMsgH4);
            setTimeout(() => {
                alertDiv.removeChild(warningMsgH4);
                alertDiv.style.display = 'none';
            }, 1000);
        return false;
    }
}

function submitForm(e){
    e.preventDefault();
    if(passwordsMatch()){
        console.log('Passwords match. Submitting...');
        console.log(`
            Email: ${email.value},
            Country: ${country.value},
            Zip Code: ${zipCode.value},
            Password: ${password.value}
        `);

        email.value = '';
        country.value = '';
        zipCode.value = '';
        password.value = '';
        passwordConfirmation.value = '';

        return;
    } 
}