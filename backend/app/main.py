from fastapi import FastAPI
from app.routes.websocket import router as websocket_router

app = FastAPI()

# Include your routes
app.include_router(websocket_router)
