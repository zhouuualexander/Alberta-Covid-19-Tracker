import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';


const MapContainer = (props) => {
  
  const mapStyles = {        
    height: "50vh",
    width: "82%",
    marginLeft:"10%",
    marginBottom:"15%"
    };
  
  const defaultCenter = {
    lat: 54.861, lng: -116.4938
  }

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 50000,
    zIndex: 1
  }
  

  const onLoad = circle => {
    console.log('Circle onLoad circle: ', circle)
  }
  
  const onUnmount = circle => {
    console.log('Circle onUnmount circle: ', circle)
  }
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E'>
        <GoogleMap
        
          mapContainerStyle={mapStyles}
          zoom={5.2}
          center={defaultCenter}
        >
          {props.cities.map(function (city) {
           
            return (
              <div>
              <Circle
              // optional
              onLoad={onLoad}
              // optional
              onUnmount={onUnmount}
              // required
              center={city[0]}
              // required
              options={city[1]}
            />
            <Circle
            // optional
            onLoad={onLoad}
            // optional
            onUnmount={onUnmount}
            // required
            center={city[0]}
            // required
            options={city[2]}
          />
          </div>
        
            );
          })}
              
        
            
          
            </GoogleMap>
     </LoadScript>
  )
  }
export default MapContainer;