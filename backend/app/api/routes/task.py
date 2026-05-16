from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.task import Task
from app.schemas.task import TaskCreate

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.post("/")
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    new_task = Task(
        title=task.title,
        description=task.description,
        column_id=task.column_id
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

@router.get("/")
def list_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()