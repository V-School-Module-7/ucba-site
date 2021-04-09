import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
// import * as parkData from "./skateboard-parks.json"
import BeeSVG from "./BeeSVG.svg"
import BeePNG from "./BeePNG.png"
import skateboarding from "./skateboarding.svg"
// var csv2geojson = require('csv2geojson');
import UtahLatLong from "./UtahLatLong.json"
import SwarmContacts from "./SwarmContacts.json"
// import request from 'request'
// import csv from 'csvtojson'
import { readRemoteFile } from 'react-papaparse'

// var geoJson = csv2geojson.csv2geojson("https://docs.google.com/spreadsheets/d/1eKByanlX5fbLr5pqOH54rEUUHh9sb15s/edit#gid=838673634", function(err, data) {
//   if(err){
//     console.log('error')
//   } else {
//     console.log(data)
//   }

//   // "https://docs.google.com/spreadsheets/d/838673634/gviz/tq?tqx=out:csv&sheet=MainLocations"
// });
// geoJson()


 
// csv()
// .fromStream(request.get('https://docs.google.com/spreadsheets/d/1EpjqQ4WHQ46nhbVJzgn_klD3clAToeqUYJoUkcsRE5U/edit#gid=1628270625'))
// .subscribe((json)=>{
//     return new Promise((resolve,reject)=>{
//       console.log(json)
//         // long operation for each json e.g. transform / write into database.
//     })
// },onError,onComplete);



export default function SwarmMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.2338,
    longitude: -111.6585,
    width: '60vw',
    height: '60vh',
    zoom: 10

  });

  const [selectedCity, setSelectedCity] = useState(null);
  const [swarmContacts, setSwarmContacts] = useState([]);
  const [locationContacts, setLocationContacts] = useState([])
  


console.log(swarmContacts, "swarm contacts")

  const displayContacts = () => { 
    if(selectedCity) { 
      let newContacts = swarmContacts.filter((contact, index) => {
        let location = contact[5].split(", ")
        console.log(location)
        return location.includes(selectedCity.Location) || location.includes("All Utah County")
      })

      setLocationContacts(newContacts)
    }
  }

  const locations = locationContacts.map((contact)=> { 
    return (
      <div>
        <h2>{contact[2]}</h2>
        <h3><a href={`tel:${contact[3]} `}>{contact[3]}</a></h3>
        <h3><a href={`mailto:${contact[4]} `}>{contact[4]}</a></h3>
      </div>
    )
  })



  useEffect(() => {
    
  readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vTRN6CnLBRxR58umkFZl9dbSKd42l7Gzu0TyRrH6OlUOxO-ki13Fa1MjO1QR4T_eNfJOwsPFY-4Fqhj/pub?gid=1628270625&single=true&output=csv', {
    download: true,
    complete: (results) => {
      console.log(results.data, "results data")
      setSwarmContacts(results.data)
    }
  })

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
      // mapStyle="mapbox://styles/sealdous/ckmb69xdc0zug17q5wz14j8dw"
      mapStyle="mapbox://styles/mapbox/streets-v11"
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
      
        </ReactMapGL>

        {locations}

        <p>Bee image from freepngimg.com</p>
  </div>
}
