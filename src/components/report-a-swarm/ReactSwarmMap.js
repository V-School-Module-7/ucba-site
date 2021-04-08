import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
 
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbGRvdXMiLCJhIjoiY2ttYjRsenVkMXkzdDJ3cWw3eGlnemsxOCJ9.j_NYzxSUO88p1EATJ12BiA';

const MapContainer = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
`

const Map = () => {
    return (
        <div>
        <MapContainer className="map-container" ref={mapContainer} />
        </div>
        );
};
 
ReactDOM.render(<Map />, document.getElementById('app'));


const mapContainer = useRef();
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom

    
    });
    return () => map.remove();
    }, []);