import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import BeeSVG from "./BeeSVG.svg"
import BeePNG from "./BeePNG.png"
// import skateboarding from "./skateboarding.svg"
import UtahLatLong from "./UtahLatLong.json"
import { readRemoteFile } from 'react-papaparse'
import styled from "styled-components"

const CityButton = styled.button`
  background-color: paleblue;
`

export default function SwarmMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.2338,
    longitude: -111.6585,
    width: '80vw',
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
      // if(e.key === "Escape") {
      //   setSelectedCity(null);
      // }
    };
    // window.addEventListener('keydown', listener);
    // return () => {
    //   window.removeEventListener('keydown', listener);
    // }

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
            <CityButton             
              className="marker-btn" 
              onClick={(e) => {
              e.preventDefault();
              setSelectedCity(city);
              displayContacts()
            }}
            >
              {/* <img src={skateboarding} alt="Bee Icon"/> */}
              {city.Location}
              </CityButton>
              
          </Marker>
        ))} 
      
        </ReactMapGL>

        {locations}

       
  </div>
}
