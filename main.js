let currentIndex = 0;

function moveSlide(direction) {
    const container = document.querySelector('.product-container');
    const products = document.querySelectorAll('.product');
    const totalProducts = products.length;
    const visibleProducts = 3; // Cambia esto según cuántos productos deseas mostrar
    const margin = 20; // El margen entre productos (ajustar según tu CSS)

    // Cambia el índice actual
    currentIndex += direction;

    // Verifica límites del índice
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalProducts - visibleProducts) currentIndex = totalProducts - visibleProducts;

    // Calcula el desplazamiento
    const offset = -currentIndex * (products[0].offsetWidth + margin); // Ajusta el desplazamiento con margen
    container.style.transform = `translateX(${offset}px)`;
}

// Asumiendo que tienes botones de navegación, puedes agregar estos event listeners
document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1); // Mover a la izquierda
});

document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1); // Mover a la derecha
});
