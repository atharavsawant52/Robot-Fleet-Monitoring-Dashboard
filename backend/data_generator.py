import random
from uuid import uuid4
import time

def generate_robot_data():
    """Generates telemetry data for a single robot."""
    return {
        "robot_id": str(uuid4()),
        "status": random.choice(["Online", "Offline"]),
        "battery": random.randint(0, 100),
        "cpu_usage": random.randint(0, 100),
        "ram_consumption": random.randint(0, 100),
        "last_updated": time.time(),
        "location": (random.uniform(-180, 180), random.uniform(-90, 90)),
    }

# Generate data for 10 robots
robots = [generate_robot_data() for _ in range(10)]
