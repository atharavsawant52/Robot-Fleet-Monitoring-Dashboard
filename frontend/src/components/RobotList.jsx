import React from "react";
import "./RobotList.css";  // Import the updated CSS file for styling

const RobotList = ({ robots }) => {
  return (
    <div className="robot-list-container">
      <h1 className="dashboard-title">Robot Fleet Dashboard</h1>
      <table className="robot-table">
        <thead>
          <tr>
            <th>Robot ID</th>
            <th>Status</th>
            <th>Battery (%)</th>
            <th>CPU Usage (%)</th>
            <th>RAM Usage (MB)</th>
            <th>Last Updated</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr
              key={robot.robot_id}
              className={robot.battery < 20 || robot.status === "Offline" ? "highlight" : ""}
            >
              <td>{robot.robot_id}</td>
              <td className={robot.status === "Offline" ? "offline-status" : "online-status"}>
                {robot.status}
              </td>
              <td className={robot.battery < 20 ? "low-battery" : ""}>{robot.battery}%</td>
              <td>{robot.cpu_usage}%</td>
              <td>{robot.ram_usage} MB</td>
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
