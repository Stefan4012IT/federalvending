import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../assets/styles/main.scss'

const MapComponent = () => {
    const mapRef = useRef(null); // Kreiranje reference za map container
    const mapInstance = useRef(null); // Kreiranje reference za map instance

    const customMarkerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
    });

    useEffect(() => {
        if (mapInstance.current) {
            return; // Ako je mapa već inicijalizovana, prekidamo izvršenje
        }

        // Inicijalizacija mape
        mapInstance.current = L.map(mapRef.current).setView([26.4072167, -80.11297137456897], 15);

        // Dodavanje OpenStreetMap tile sloja
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance.current);

        // Dodavanje markera na specifične koordinate
        L.marker([26.4072167, -80.11297137456897], { icon: customMarkerIcon }).addTo(mapInstance.current)
        .bindPopup('6600 W Rogers Circle Ste-14<br>Boca Raton, FL')
        .openPopup();
}, []); // Ovaj useEffect će se izvršiti samo jednom nakon montiranja komponente

return <div id="map" ref={mapRef} ></div>;
};

export default MapComponent;