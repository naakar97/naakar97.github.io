// Crear el mapa centrado en la ubicación de tu tienda
const map = L.map('map').setView([37.985209, -1.131517], 16); // Aumentamos el zoom a 16

// Añadir la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un marcador en la ubicación de la tienda
const marker = L.marker([37.985209, -1.131517]).addTo(map);

// Añadir una ventana de información al marcador
marker.bindPopup("<b>Urban Rolling</b><br>C. Sta. Catalina, 4, 30004 Murcia").openPopup();
