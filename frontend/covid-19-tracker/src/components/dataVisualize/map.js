import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';


const MapContainer = (props) => {
  
  const mapStyles = {        
    height: "30vh",
    width: "90vh",
    marginLeft:"auto",
    marginRight:"auto"
    };
  
  const defaultCenter = {
    lat: 54.861, lng: -116.4938
  }

  // const options = {
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 2,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.35,
  //   clickable: false,
  //   draggable: false,
  //   editable: false,
  //   visible: true,
  //   radius: 50000,
  //   zIndex: 1
  // }
  

 
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E'>
        <GoogleMap
        
          mapContainerStyle={mapStyles}
          zoom={4.8}
          center={defaultCenter}
        >
          {props.cities.map(function (city) {
           
            return (
              <div>
              <Circle
              // optional
             
              // required
              center={city[0]}
              // required
              options={city[1]}
            />
           
          </div>
        
            );
          })}
              
        
            
          
            </GoogleMap>
     </LoadScript>
  )
  }
export default MapContainer;