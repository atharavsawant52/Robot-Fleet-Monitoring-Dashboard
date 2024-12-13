import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const RobotMap = ({ robots }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {robots.map((robot) => (
        <Marker position={robot.location} key={robot.robot_id}>
          <Popup>
            <p>ID: {robot.robot_id}</p>
            <p>Status: {robot.status}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RobotMap;
