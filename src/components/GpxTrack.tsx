import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

export const GpxTrack = () => {
  const map = useMap();

  useEffect(() => {
    new L.GPX('/kaunas_mock_route.gpx', {
      async: true,
      marker_options: {
        startIconUrl: '',
        endIconUrl: '',
        shadowUrl: '',
      },
      polyline_options: {
        color: 'blue',
        weight: 4,
      },
    })
      .on('loaded', (e) => {
        map.fitBounds(e.target.getBounds());
      })
      .addTo(map);
  }, [map]);

  return null;
};
