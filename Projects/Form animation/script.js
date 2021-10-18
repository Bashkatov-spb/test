const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const fromBox = document.querySelector('.form-box');
const body = document.body;


signUpBtn.addEventListener('click', function() {
    fromBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function() {
    fromBox.classList.remove('active');
    body.classList.remove('active');
});