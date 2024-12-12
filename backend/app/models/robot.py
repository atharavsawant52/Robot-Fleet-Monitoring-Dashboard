from pydantic import BaseModel
from typing import Tuple

class Robot(BaseModel):
    Robot_ID: str
    Online_Offline: bool
    Battery_Percentage: int
    CPU_Usage: int
    RAM_Consumption: int
    Last_Updated: str
    Location_Coordinates: Tuple[float, float]
