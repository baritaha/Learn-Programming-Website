document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            loginBtn.classList.add('active');
            registerBtn.classList.remove('active');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        }
    });

    registerBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            registerBtn.classList.add('active');
            loginBtn.classList.remove('active');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        }
    });
});
