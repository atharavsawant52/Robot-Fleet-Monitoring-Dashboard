import React, { useState, useEffect } from "react";
import RobotList from "./RobotList";
import RobotMap from "./RobotMap";

const Dashboard = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws"); // Correct WebSocket endpoint

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data); // Parse incoming data
      setRobots(data);
    };

    return () => {
      ws.close(); // Clean up WebSocket connection
    };
  }, []);

  return (
    <div>
      <RobotList robots={robots} />
      <RobotMap robots={robots} />
    </div>
  );
};

export default Dashboard;
