//FOR SUGGESTION ONLY

const email = document.getElementById('email');
const username = document.getElementById('username');
const suggest = document.getElementById('suggest');
const form = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener("submit", (e) => {
    const errors = [];

    if(email.value.trim() === "" || username.value.trim() === ""){
        errors.push("Username and Email Required");
    }

    if(suggest.value.trim() === ""){
        errors.push("Please Fill Your Suggestion")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    
    } else{
        alert('Thank You For Your Suggestion!');
    }

});