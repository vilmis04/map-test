import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import { IMapFile } from "../types/common/IMapFile";

export const GpxTrack = ({ file }: IMapFile) => {
  const map = useMap();

  useEffect(() => {
    if (!file) return;

    new L.GPX(file, {
      async: true,
      marker_options: {
        startIconUrl: "",
        endIconUrl: "",
        shadowUrl: "",
      },
      polyline_options: {
        color: "blue",
        weight: 4,
      },
    })
      .on("loaded", (e) => {
        map.fitBounds(e.target.getBounds());
      })
      .addTo(map);
  }, [map, file]);

  return null;
};
