from fastapi import APIRouter
from ..utils.data_loader import load_data, update_robot_data

router = APIRouter()
robots = load_data('fake_robot_data.json')

@router.get("/robots")
async def get_robots():
    return robots

@router.get("/robots/{robot_id}")
async def get_robot(robot_id: str):
    for robot in robots:
        if robot["Robot ID"] == robot_id:
            return robot
    return {"error": "Robot not found"}
