import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  // Import Leaflet for custom icon usage
import "leaflet/dist/leaflet.css";  // Import Leaflet CSS for styling

const RobotMap = ({ robots }) => {
  // Define the default position for the map (can be updated based on robot data)
  const defaultPosition = [20.5937, 78.9629]; // Center on India (you can change it)

  return (
    <div className="map-container">
      <MapContainer center={defaultPosition} zoom={5} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {robots.map((robot) => (
          <Marker
            key={robot.robot_id}
            position={robot.location}
            icon={new L.Icon({
              iconUrl: robot.status === "offline" ? "/offline-icon.png" : "/online-icon.png",
              iconSize: [25, 25],
              iconAnchor: [12, 12],
              popupAnchor: [0, -12],
            })}
          >
            <Popup>
              <strong>Robot ID:</strong> {robot.robot_id}<br />
              <strong>Status:</strong> {robot.status}<br />
              <strong>Battery:</strong> {robot.battery}%<br />
              <strong>Location:</strong> {robot.location[0].toFixed(2)}, {robot.location[1].toFixed(2)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default RobotMap;
