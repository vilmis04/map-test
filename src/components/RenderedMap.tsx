import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';
import { GpxTrack } from './GpxTrack';

export const RenderedMap = () => {
  return (
    <MapContainer
      center={[54.9225, 23.9150]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <GpxTrack />
    </MapContainer>
  );
}
