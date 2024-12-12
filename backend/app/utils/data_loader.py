import json
import random
from typing import List

def load_data(filepath: str) -> List[dict]:
    with open(filepath, 'r') as f:
        return json.load(f)

def update_robot_data(robots: List[dict]):
    for robot in robots:
        robot['Battery Percentage'] = max(0, robot['Battery Percentage'] - random.randint(0, 5))
        robot['CPU Usage'] = random.randint(0, 100)
        robot['RAM Consumption'] = random.randint(500, 8000)
        robot['Online/Offline'] = random.choice([True, False])
