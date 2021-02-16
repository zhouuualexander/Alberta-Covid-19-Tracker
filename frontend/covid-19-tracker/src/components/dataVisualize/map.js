import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle,Marker,InfoWindow} from '@react-google-maps/api';

import { InfoBox } from '@react-google-maps/api';
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
  const center = {
    lat: 58.545457,
    lng: -130.843898
  };
 
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
              <div  key={city[0]["lat"]}>
              <Circle
             
              // optional
             
              // required
              center={city[0]}
              // required
              options={city[1]}
            />
            {city[0]['lat']===53.5461?
            <InfoBox  position={center}>
            <div style={{ backgroundColor: 'white', opacity: 0.75, padding: 12 ,width:"200px"}}>
        <div style={{ fontSize: 16, fontColor: `#08233B` }}>
          Circle is about active cases
        </div>
      </div>
            </InfoBox>:
            null
            }
            
            
           
           
          </div>
        
            );
          })}
              
        
            
          
            </GoogleMap>
     </LoadScript>
  )
  }
export default MapContainer;