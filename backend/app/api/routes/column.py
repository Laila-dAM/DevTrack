from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.column import ColumnModel
from app.schemas.column import ColumnCreate

router = APIRouter(prefix="/columns", tags=["Columns"])

@router.post("/")
def create_column(column: ColumnCreate, db: Session = Depends(get_db)):
    new_column = ColumnModel(name=column.name, board_id=column.board_id)
    db.add(new_column)
    db.commit()
    db.refresh(new_column)
    return new_column

@router.get("/")
def list_columns(db: Session = Depends(get_db)):
    return db.query(ColumnModel).all()