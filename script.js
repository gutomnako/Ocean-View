// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([12.687537125569971, 124.12913529346297], 13);

// Add the OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([12.687537125569971, 124.12913529346297]).addTo(map);
marker.bindPopup('Ocean View, Santa Magdalena, Sorsogon').openPopup();
