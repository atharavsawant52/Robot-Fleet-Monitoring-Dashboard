import React, { useState, useEffect } from "react";
import axios from "axios";

const RobotList = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/robots").then((response) => {
      setRobots(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Robot Fleet</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Battery</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Last Updated</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.robot_id}>
              <td>{robot.robot_id}</td>
              <td>{robot.status}</td>
              <td>{robot.battery}%</td>
              <td>{robot.cpu_usage}%</td>
              <td>{robot.ram_consumption}%</td>
              <td>{new Date(robot.last_updated).toLocaleTimeString()}</td>
              <td>{robot.location.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RobotList;
