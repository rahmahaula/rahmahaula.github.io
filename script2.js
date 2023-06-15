//FOR LOGIN ONLY

const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener("submit", (e) => {
    const errors = [];

    if(email.value.trim() === ""){
        errors.push("Email Required");
    }

    if(password.value.trim() === ""){
        errors.push("Password Required");
    }

    if(password.value.length < 5){
        errors.push("Password must be atleast 5 character");
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    
    } else{
        alert('Stay Tuned For More!');
    }

});