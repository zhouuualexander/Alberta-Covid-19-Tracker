import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import React from 'react';

const map = (props) => {
  return (
    <React.Fragment>
      <MapContainer center={[54.9333, -116.5765]} zoom={4.5} scrollWheelZoom={false} style={{ marginTop: '10px', marginBottom: '10px', height: '42vh', width: '50wh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[54.9333, -116.5765]} pathOptions={{ fillColor: 'blue' }} radius={20000} />
        <Marker position={[54.9333, -116.5765]}>
          <Popup>
            Alberta Covid-19
    </Popup>
        </Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default map;
