// Función para alternar la visibilidad de la contraseña
function togglePassword(inputId, toggleIconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    // Alternar el tipo de input entre "password" y "text"
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Muestra la contraseña
        toggleIcon.classList.add('open');  // Añadir la clase para mostrar el ojo cerrado
        toggleIcon.classList.remove('closed'); // Eliminar la clase de ojo abierto
        toggleIcon.textContent = '🙈'; // Cambiar emoticono a ojo cerrado
    } else {
        passwordInput.type = "password"; // Ocultar la contraseña
        toggleIcon.classList.add('closed'); // Añadir la clase para mostrar el ojo abierto
        toggleIcon.classList.remove('open'); // Eliminar la clase de ojo cerrado
        toggleIcon.textContent = '👁️'; // Cambiar emoticono a ojo abierto
    }
}

// Añadir los event listeners para los iconos de cada formulario
document.getElementById('toggle-password-login').addEventListener('click', function(event) {
    togglePassword('login-password', 'toggle-password-login');
    event.preventDefault(); // Evitar que el clic envíe el formulario accidentalmente
});

document.getElementById('toggle-password-register').addEventListener('click', function(event) {
    togglePassword('register-password', 'toggle-password-register');
    event.preventDefault(); // Evitar que el clic envíe el formulario accidentalmente
});

document.getElementById('toggle-password-register2').addEventListener('click', function(event) {
    togglePassword('register-password2', 'toggle-password-register2');
    event.preventDefault(); // Evitar que el clic envíe el formulario accidentalmente
});


// Añadir el evento para el formulario de registro
document.querySelector('.formulario__register').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Verificar si las contraseñas coinciden antes de registrar al usuario
    if (validarContraseñas()) {
        console.log("Formulario de Registro enviado");
        // Aquí puedes agregar la lógica para registrar al usuario en Firebase
    } else {
        console.log("Las contraseñas no coinciden. Registro cancelado.");
    }
});

// Declarando las funciones y variables necesarias para los formularios
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}
