from fastapi import FastAPI, WebSocket
from data_generator import robots, generate_robot_data
import asyncio

app = FastAPI()

# REST API to fetch robots
@app.get("/robots")
async def get_robots():
    """Returns the list of robots."""
    return robots

# WebSocket for real-time updates
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """Handles real-time updates via WebSocket."""
    await websocket.accept()
    while True:
        for robot in robots:
            # Update robot data
            robot.update(generate_robot_data())
        await websocket.send_json(robots)
        await asyncio.sleep(5)
