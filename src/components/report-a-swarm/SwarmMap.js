import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
// import * as parkData from "./skateboard-parks.json"
import BeeSVG from "./BeeSVG.svg"
import BeePNG from "./BeePNG.png"
import skateboarding from "./skateboarding.svg"
// var csv2geojson = require('csv2geojson');
import UtahLatLong from "./UtahLatLong.json"
import SwarmContacts from "./SwarmContacts.json"

// var geoJson = csv2geojson.csv2geojson("https://docs.google.com/spreadsheets/d/1eKByanlX5fbLr5pqOH54rEUUHh9sb15s/edit#gid=838673634", function(err, data) {
//   if(err){
//     console.log('error')
//   } else {
//     console.log(data)
//   }

//   // "https://docs.google.com/spreadsheets/d/838673634/gviz/tq?tqx=out:csv&sheet=MainLocations"
// });
// geoJson()



export default function SwarmMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.2338,
    longitude: -111.6585,
    width: '60vw',
    height: '60vh',
    zoom: 10

  });

  const [selectedCity, setSelectedCity] = useState(null);
  const [swarmContacts, setSwarmContacts] = useState(SwarmContacts);
  const [locationContacts, setLocationContacts] = useState([])
  console.log(swarmContacts, "swarm contacts")

  const displayContacts = () => { 
    if(selectedCity) { 
      let newContacts = swarmContacts.filter((contact, index) => {
        let location = contact["Coverage areas"].split(", ")
        return location.includes(selectedCity.Location)
      })

      setLocationContacts(newContacts)
    }
  }

  const locations = locationContacts.map((contact)=> { 
    return (
      <div>
        <h2>{contact["First and Last Name:"]}</h2>
        <h3>{contact["MMS and SMS capable phone number (CELL ONLY)"]}</h3>
      </div>
    )
  })

  useEffect(() => {
    
    const listener = e => {
      if(e.key === "Escape") {
        setSelectedCity(null);
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
        {UtahLatLong.map((city, index) => (
          <Marker key={index} latitude={city.Latitude}
            longitude={city.Longitude}>
            <button 
              className="marker-btn" 
              onClick={(e) => {
              e.preventDefault();
              setSelectedCity(city);
              displayContacts()
            }}
            >
              <img src={skateboarding} alt="Bee Icon"/>{city.Location}</button>
          </Marker>
        ))} 
        {selectedCity && (
          <Popup 
            latitude={selectedCity.Latitude} 
            longitude={selectedCity.Longitude}
            onClose={() => {
              setSelectedCity(null)
            }}>
            <div>
              <h2>{selectedCity.Location}</h2>
            </div>
          
          </Popup>
   
        )}
        </ReactMapGL>

        {locations}

        <p>Bee image from freepngimg.com</p>
  </div>
}
