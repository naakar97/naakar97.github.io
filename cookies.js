document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya se ha aceptado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostrar el banner si no se han aceptado las cookies
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Función para aceptar las cookies
    const acceptButton = document.getElementById('accept-btn');

    acceptButton.addEventListener('click', function() {
        // Almacenar en localStorage que el usuario ha aceptado las cookies
        localStorage.setItem('cookiesAccepted', 'true');

        // Ocultar el banner de cookies
        document.getElementById('cookie-banner').style.display = 'none';
    });
});
