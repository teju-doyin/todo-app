const loginForm = document.getElementById('loginForm');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userName = userNameInput.value.trim();
    const password = passwordInput.value.trim(); 

    if (userName !== '' && password !== '') {
        localStorage.setItem('UserName', userName);

        window.location.href = './src/components/dashboard.html';
    } else {
        alert('Please enter a valid username and password.');
    }
});
