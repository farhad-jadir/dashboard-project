import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Map View Update Component
const ChangeMapView = ({ position }) => {
  const map = useMap();
  map.setView(position, 13);
  return null;
};

const MapComponent = ({ position, address }) => {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={13} className="w-full h-full rounded-lg">
        <ChangeMapView position={position} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon}>
          <Popup>{address || "Incident Location"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
