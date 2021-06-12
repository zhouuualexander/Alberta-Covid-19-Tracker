import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import React from 'react';

const map = (props) => {
  return (
    <React.Fragment>
      <MapContainer center={[53.9333, -116.5765]} zoom={4.5} scrollWheelZoom={false} style={{ marginTop: '10px', marginBottom: '10px', height: '42vh', width: '50wh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[53.5461, -113.4938]} pathOptions={{ fillColor: 'blue' }} radius={props.edmontonActiveNumber * 100} />
        <Circle center={[51.0447, -114.0719]} pathOptions={{ fillColor: 'red' }} radius={props.calgaryActiveNumber * 100} />
        <Marker position={[53.5461, -113.4938]}>
          <Popup>
            Edmonton Active Cases: {props.edmontonActiveNumber}
          </Popup>
        </Marker>
        <Marker position={[51.0447, -114.0719]}>
          <Popup>
            Calgary Active Cases {props.calgaryActiveNumber}
          </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default map;
