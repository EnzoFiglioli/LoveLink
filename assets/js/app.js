document.addEventListener('DOMContentLoaded', () => {
    const login = document.querySelector('.login');
    const btn_login = document.querySelector('.btn-login');

    btn_login.addEventListener('click', () => {
        login.style.display = 'block';
    });
});
