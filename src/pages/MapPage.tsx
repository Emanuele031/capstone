import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import type { AppDispatch } from '../redux/store';
import { fetchCollectionPoints } from '../redux/collectionPointsSlice';
import 'leaflet/dist/leaflet.css';



const getCustomIcon = (category: string) => {
  let color = "#33611C"; 
  if (category.includes("Plastica")) color = "#FFC107";
  if (category.includes("Vetro")) color = "#007BFF";
  if (category.includes("RAEE") || category.includes("Metalli")) color = "#6C757D";

  return L.divIcon({
    className: 'custom-map-icon',
    html: `<div style="color: ${color}; font-size: 24px;">📍</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

const MapPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const points = useSelector((state: RootState) => state.collectionPoints);
  const markerRefs = useRef<(L.Marker | null)[]>([]);

  useEffect(() => {
    dispatch(fetchCollectionPoints());
  }, [dispatch]);

  return (
    <motion.div
      className="mapview-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mapview-title text-center"
      >
        Trova il centro di raccolta più vicino!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mapview-subtitle text-center"
      >
        Individua facilmente il centro di raccolta differenziata più vicino a te.
      </motion.p>
      <motion.div
        className="map-wrapper"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <MapContainer center={[42.5, 12.5]} zoom={6} style={{ height: '500px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {points.map((point, index) => (
            <Marker
              key={point.id}
              position={[point.latitude, point.longitude]}
              icon={getCustomIcon(point.category)}
              ref={(el) => { markerRefs.current[index] = el; }}
            >
              <Popup>
                <strong>{point.name}</strong> <br />
                <b>Tipologie:</b> {point.description} <br />
                <b>Categoria:</b> {point.category}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </motion.div>
  );
};

export default MapPage;
