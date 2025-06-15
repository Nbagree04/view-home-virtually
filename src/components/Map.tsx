
import React, { useEffect, useRef, memo } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  accessToken: string;
  longitude: number;
  latitude: number;
}

const Map: React.FC<MapProps> = ({ accessToken, longitude, latitude }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 15,
    });

    // Add marker for the location
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Clean up on unmount
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [accessToken, longitude, latitude]);


  return <div ref={mapContainer} className="h-96 w-full rounded-lg" />;
};

export default memo(Map);
