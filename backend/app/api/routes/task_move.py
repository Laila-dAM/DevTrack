from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.task import Task
from app.schemas.task_move import TaskMove

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.put("/move")
def move_task(data: TaskMove, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == data.task_id).first()

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    task.column_id = data.column_id

    db.commit()
    db.refresh(task)

    return task