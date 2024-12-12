from fastapi import APIRouter, WebSocket
from ..utils.data_loader import update_robot_data

router = APIRouter()
connected_clients = []

robots = []  # Placeholder for robot data

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)
    while True:
        update_robot_data(robots)  # Update robot data
        for client in connected_clients:
            await client.send_json(robots)  # Send updated robot data to clients
