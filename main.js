//Deslizamiento de los objetos en main

let currentIndex = 0;

function moveSlide(direction) {
    const container = document.querySelector('.product-container');
    const products = document.querySelectorAll('.product');
    const totalProducts = products.length;
    const visibleProducts = 3; // Cambia esto según cuántos productos deseas mostrar

    // Cambia el índice actual
    currentIndex += direction;

    // Verifica límites del índice
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalProducts - visibleProducts) currentIndex = totalProducts - visibleProducts;

    // Calcula el desplazamiento
    const offset = -currentIndex * (products[0].offsetWidth + 20); // 20 es el margen
    container.style.transform = `translateX(${offset}px)`;
}
