import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gpx";
import { GpxTrack } from "./GpxTrack";
import { IMapFile } from "../types/common/IMapFile";

export const RenderedMap = ({ file }: IMapFile) => {
  return (
    <MapContainer
      center={[54.9225, 23.915]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GpxTrack file={file} />
    </MapContainer>
  );
};
