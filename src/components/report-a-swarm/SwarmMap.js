import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import * as parkData from "./skateboard-parks.json"
import BeePNG from "./6-2-bee-png-5.png"

export default function SwarmMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.2338,
    longitude: -111.6585,
    width: '60vw',
    height: '60vh',
    zoom: 10

  });

  // var transformRequest = (url, resourceType) => {
  //   var isMapboxRequest =
  //     url.slice(8, 22) === "api.mapbox.com" ||
  //     url.slice(10, 26) === "tiles.mapbox.com";
  //   return {
  //     url: isMapboxRequest
  //       ? url.replace("?", "?pluginName=sheetMapper&")
  //       : url
  //   };
  // };
  // // mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA'; //Mapbox token 
  // var map = new mapboxgl.Map({
  //   container: 'map', // container id
  //   style: 'mapbox://styles/mapbox/streets-v11', // YOUR TURN: choose a style: https://docs.mapbox.com/api/maps/#styles
  //   center: [-122.411, 37.785], // starting position [lng, lat]
  //   zoom: 10,// starting zoom
  //   transformRequest: transformRequest
  // });

  // $(document).ready(function () {
  //   $.ajax({
  //     type: "GET",
  //     //YOUR TURN: Replace with csv export link
  //     url: 'https://docs.google.com/spreadsheets/d/1dLkr70tfAL_-U6ipad9xLF39lHmU8k-xd08uKHkLD5M/gviz/tq?tqx=out:csv&sheet=Sheet1',
  //     dataType: "text",
  //     success: function (csvData) { makeGeoJSON(csvData); }
  //   });



  //   function makeGeoJSON(csvData) {
  //     csv2geojson.csv2geojson(csvData, {
  //       latfield: 'Latitude',
  //       lonfield: 'Longitude',
  //       delimiter: ','
  //     }, function (err, data) {
  //       map.on('load', function () {

  //         //Add the the layer to the map
  //         map.addLayer({
  //           'id': 'csvData',
  //           'type': 'circle',
  //           'source': {
  //             'type': 'geojson',
  //             'data': data
  //           },
  //           'paint': {
  //             'circle-radius': 5,
  //             'circle-color': "purple"
  //           }
  //         });


  //         // When a click event occurs on a feature in the csvData layer, open a popup at the
  //         // location of the feature, with description HTML from its properties.
  //         map.on('click', 'csvData', function (e) {
  //           var coordinates = e.features[0].geometry.coordinates.slice();

  //           //set popup text
  //           //You can adjust the values of the popup to match the headers of your CSV.
  //           // For example: e.features[0].properties.Name is retrieving information from the field Name in the original CSV.
  //           var description = `<h3>` + e.features[0].properties.Name + `</h3>` + `<h4>` + `<b>` + `Address: ` + `</b>` + e.features[0].properties.Address + `</h4>` + `<h4>` + `<b>` + `Phone: ` + `</b>` + e.features[0].properties.Phone + `</h4>`;

  //           // Ensure that if the map is zoomed out such that multiple
  //           // copies of the feature are visible, the popup appears
  //           // over the copy being pointed to.
  //           while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  //             coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  //           }

  //           //add Popup to map

  //           new mapboxgl.Popup()
  //             .setLngLat(coordinates)
  //             .setHTML(description)
  //             .addTo(map);
  //         });

  //         // Change the cursor to a pointer when the mouse is over the places layer.
  //         map.on('mouseenter', 'csvData', function () {
  //           map.getCanvas().style.cursor = 'pointer';
  //         });

  //         // Change it back to a pointer when it leaves.
  //         map.on('mouseleave', 'places', function () {
  //           map.getCanvas().style.cursor = '';
  //         });

  //         var bbox = turf.bbox(data);
  //         map.fitBounds(bbox, { padding: 50 });

  //       });

  //     });
  //   };
  // });


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
              <img src={BeePNG} alt="Bee Icon"/>City Name</button>
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
            <p>Bee image from freepngimg.com</p>
          </Popup>
   
        )}
        </ReactMapGL>
  </div>
}
