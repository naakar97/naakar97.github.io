// Importa Firebase y los servicios necesarios
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCCVK98neuyR1CULdcYc2x3gRIlTGmaVRo",
    authDomain: "proyectojaac.firebaseapp.com",
    projectId: "proyectojaac",
    storageBucket: "proyectojaac.firebasestorage.app",
    messagingSenderId: "804528553972",
    appId: "1:804528553972:web:c16235da91bd2e278a03a1",
    measurementId: "G-47RREP130C"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Función de Registro
const registerForm = document.querySelector('.formulario__register');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
        // Crear usuario con correo y contraseña
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Almacenar los datos del usuario en Firestore
        await setDoc(doc(db, 'users', user.uid), {
            name: name,
            email: email,
            username: username
        });

        /*  // Almacenar los datos del usuario en Firestore
        await setDoc(doc(db, 'nombre de la tabla que cree en database', user.uid), {
            name: name,
            time: timestamp,
            timestamp cada vez para que se registre xd
        }); */

        alert('Usuario registrado exitosamente');
        // Redirigir o limpiar formulario
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error.message);
        alert('Error al registrarse: ' + error.message);
    }
});

// Función de Login
const loginForm = document.querySelector('.formulario__login');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        // Iniciar sesión
        await signInWithEmailAndPassword(auth, email, password);
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html'; // Redirigir a la página de usuario
    } catch (error) {
        console.error(error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }
});
