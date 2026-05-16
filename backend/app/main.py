from fastapi import FastAPI

from app.database.database import Base, engine

from app.models.user import User
from app.models.project import Project
from app.models.board import Board
from app.models.column import ColumnModel
from app.models.task import Task

from app.api.routes.task_move import router as task_move_router
from app.api.routes.auth import router as auth_router
from app.api.routes.user import router as user_router
from app.api.routes.project import router as project_router
from app.api.routes.board import router as board_router
from app.api.routes.column import router as column_router
from app.api.routes.task import router as task_router
from app.api.routes.kanban import router as kanban_router
from app.api.routes.dashboard import router as dashboard_router

app = FastAPI()

app.include_router(dashboard_router)
app.include_router(kanban_router)
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(project_router)
app.include_router(board_router)
app.include_router(column_router)
app.include_router(task_router)
app.include_router(task_move_router)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "DevTrack API"}