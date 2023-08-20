document.addEventListener('DOMContentLoaded', () => {
    const log_sign = document.querySelector('.log-sign-gradient');
    const header = document.querySelector('.container-header');

    const showModal = (element) => {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        log_sign.style.display = 'block';
        log_sign.style.backgroundColor = 'rgba(0, 0, 0, 0.638)';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.638)';
        btn_idiomas.style.backgroundColor = 'rgba(0, 0, 0, 0.638)';
    };

    const hideModal = (element) => {
        element.style.display = 'none';
        log_sign.style.display = 'none';
        header.style.backgroundColor = 'transparent';
        btn_idiomas.style.backgroundColor = 'transparent';
    };

    const btn_login = document.querySelector('.btn-login');
    const btn_sign = document.querySelector('.btn-sign');
    const close_log = document.querySelector('.close-log');
    const close_sign = document.querySelector('.close-sign');
    const login = document.querySelector('.login');
    const sign = document.querySelector('.signup');
    const btn_idiomas = document.querySelector('.btn-idioma');

    btn_login.addEventListener('click', () => {
        showModal(login);
    });

    btn_sign.addEventListener('click', () => {
        showModal(sign);
    });

    close_log.addEventListener('click', () => {
        hideModal(login);
    });

    close_sign.addEventListener('click', () => {
        hideModal(sign);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideModal(login);
            hideModal(sign);
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === log_sign) {
            hideModal(login);
            hideModal(sign);
        }
    });

    const selectIdioma = document.querySelector('.btn-idioma');
    const slogans = document.querySelectorAll('.slogan');
    const btnLogin = document.querySelector('.btn-login');
    const btnSign = document.querySelector('.btn-sign');
    const signupHeading = document.querySelector('.signup h2');
    const signupButton = document.querySelector('.signup button[type="submit"]');
    const loginHeading = document.querySelector('.login h2');
    const loginButton = document.querySelector('.login button[type="submit"]');

    const translations = {
        'Español': {
            slogan: '¡Únete hoy y encuentra el amor en línea!',
            login: 'Iniciar Sesión',
            signup: 'Regístrate',
            signupHeading: 'Regístrate',
            signupButton: 'Registrarse',
            loginHeading: 'Iniciar Sesión',
            loginButton: 'Iniciar Sesión'
        },
        'Ingles': {
            slogan: 'Join today and find love online!',
            login: 'Log In',
            signup: 'Sign Up',
            signupHeading: 'Sign Up',
            signupButton: 'Sign Up',
            loginHeading: 'Log In',
            loginButton: 'Log In'
        }
    };

    selectIdioma.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const translation = translations[selectedLanguage];

        slogans.forEach(slogan => {
            slogan.textContent = translation.slogan;
        });

        btnLogin.textContent = translation.login;
        btnSign.textContent = translation.signup;
        signupHeading.textContent = translation.signupHeading;
        signupButton.textContent = translation.signupButton;
        loginHeading.textContent = translation.loginHeading;
        loginButton.textContent = translation.loginButton;
    });
});