import { MapContainer, GeoJSON, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import React from 'react';
import edmonton from '../../Data/edmonton.json';
import calgary from '../../Data/calgary.json';
const map = (props) => {
  return (
    <React.Fragment>
      <MapContainer center={[52.0, -114.5765]} zoom={5.5} scrollWheelZoom={false} style={{ height: '42vh', width: '70vw' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[53.5461, -113.4938]} pathOptions={{ fillColor: 'blue' }} radius={props.edmontonActiveNumber * 50} />
        <Circle center={[51.0447, -114.0719]} pathOptions={{ fillColor: 'red' }} radius={props.calgaryActiveNumber * 50} />
        <Marker position={[53.5461, -113.4938]}>

          <Popup>
            Edmonton Active Cases: {props.edmontonActiveNumber}
          </Popup>
        </Marker>
        <Marker position={[51.0447, -114.0719]}>
          <Popup>
            Calgary Active Cases: {props.calgaryActiveNumber}
          </Popup>
        </Marker>
        <GeoJSON data={edmonton} color="blue" />
        <GeoJSON data={calgary} color="red" />
      </MapContainer>
    </React.Fragment>
  );
};

export default map;
