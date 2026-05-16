from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.board import Board
from app.models.column import ColumnModel
from app.models.task import Task

router = APIRouter(prefix="/kanban", tags=["Kanban"])

@router.get("/{board_id}")
def get_kanban(board_id: int, db: Session = Depends(get_db)):
    columns = db.query(ColumnModel).filter(ColumnModel.board_id == board_id).all()

    result = []

    for column in columns:
        tasks = db.query(Task).filter(Task.column_id == column.id).all()

        result.append({
            "id": column.id,
            "name": column.name,
            "tasks": tasks
        })

    return result