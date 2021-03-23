import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import * as parkData from "./skateboard-parks.json"


export default function SwarmMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.2338,
    longitude: -111.6585,
    width: '60vw',
    height: '60vh',
    zoom: 10

  });

  const [selectedPark, setSelectedPark] = useState(null);


  useEffect(() => {
    const listener = e => {
      if(e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    }

  }, [])

  return <div>
    
    <ReactMapGL
      {...viewport}
     mapboxApiAccessToken={process.env.GATSBY_MAP_TOKEN}
      mapStyle="mapbox://styles/sealdous/ckmb69xdc0zug17q5wz14j8dw"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        {parkData.features.map((park) => (
          <Marker key={park.properties.PARK_ID} latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}>
            <button 
              className="marker-btn" 
              onClick={(e) => {
              e.preventDefault();
              setSelectedPark(park);
            }}
            >
              <img src="./skateboarding.svg" alt="Skate Park Icon"/>SKATE</button>
          </Marker>
        ))} 
        {selectedPark && (
          <Popup 
            latitude={selectedPark.geometry.coordinates[1]} 
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}>
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
        </ReactMapGL>
  </div>
}
