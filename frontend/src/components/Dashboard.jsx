import React, { useState, useEffect } from "react";
import RobotMap from "./RobotMap";  // Import the map component
import "./Dashboard.css";

const Dashboard = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const robotData = JSON.parse(event.data);
      setRobots(robotData);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Robot Fleet Monitoring Dashboard</h1>
      </div>
      
      <div className="summary-section">
        <div className="summary-card active-robots">
          <h3>Active Robots</h3>
          <p>{robots.filter((robot) => robot.status === "online").length}</p>
        </div>
        <div className="summary-card offline-robots">
          <h3>Offline Robots</h3>
          <p>{robots.filter((robot) => robot.status === "offline").length}</p>
        </div>
        <div className="summary-card low-battery">
          <h3>Low Battery</h3>
          <p>{robots.filter((robot) => robot.battery < 20).length}</p>
        </div>
      </div>

      <RobotMap robots={robots} />
      
      <div className="robot-status-section">
        <h2>Robot Status</h2>
        <div className="robot-cards-container">
          {robots.map((robot) => (
            <div
              key={robot.robot_id}
              className={`robot-card ${robot.battery < 20 ? "low-battery-card" : ""} ${robot.status === "offline" ? "offline-card" : ""}`}
            >
              <h3>{robot.robot_id}</h3>
              <p>Status: {robot.status}</p>
              <p>Battery: {robot.battery}%</p>
              <p>Location: {robot.location[0].toFixed(2)}, {robot.location[1].toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
