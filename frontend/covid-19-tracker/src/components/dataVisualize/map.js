import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from "react-google-maps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "72%",
    marginLeft:"10%",
    marginBottom:"15%"
    };
  
  const defaultCenter = {
    lat: 53.5461, lng: -116.4938
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E'>
        <GoogleMap
        
          mapContainerStyle={mapStyles}
          zoom={6}
          center={defaultCenter}
        >
            <Circle def={defaultCenter}
            radius='100'
            
            />
            </GoogleMap>
     </LoadScript>
  )
  }
export default MapContainer;