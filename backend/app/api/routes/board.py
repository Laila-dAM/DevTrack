from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.board import Board
from app.models.column import ColumnModel
from app.models.task import Task
from app.schemas.board import BoardCreate

router = APIRouter(prefix="/boards", tags=["Boards"])

@router.post("/")
def create_board(board: BoardCreate, db: Session = Depends(get_db)):
    new_board = Board(name=board.name, project_id=board.project_id)
    db.add(new_board)
    db.commit()
    db.refresh(new_board)
    return new_board

@router.get("/{board_id}/columns")
def get_board_columns(board_id: int, db: Session = Depends(get_db)):
    return db.query(ColumnModel).filter(ColumnModel.board_id == board_id).all()

@router.get("/{board_id}/tasks")
def get_board_tasks(board_id: int, db: Session = Depends(get_db)):
    columns = db.query(ColumnModel).filter(ColumnModel.board_id == board_id).all()

    column_ids = [c.id for c in columns]

    return db.query(Task).filter(Task.column_id.in_(column_ids)).all()