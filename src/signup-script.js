const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim(); 

    if (name !== ''&& email!== '' && password !== '') {
        localStorage.setItem('UserName', name);

        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill the form completely');
    }
});
