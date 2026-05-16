from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.project import Project
from app.models.board import Board
from app.models.column import ColumnModel
from app.models.task import Task
from app.core.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/project/{project_id}")
def project_dashboard(
    project_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):
    project = db.query(Project).filter(Project.id == project_id, Project.owner_id == user.id).first()

    boards = db.query(Board).filter(Board.project_id == project_id).all()

    board_ids = [b.id for b in boards]

    columns = db.query(ColumnModel).filter(ColumnModel.board_id.in_(board_ids)).all()

    column_ids = [c.id for c in columns]

    tasks = db.query(Task).filter(Task.column_id.in_(column_ids)).all()

    total_tasks = len(tasks)

    done_tasks = len([t for t in tasks if "done" in t.title.lower()])

    progress = 0

    if total_tasks > 0:
        progress = (done_tasks / total_tasks) * 100

    return {
        "project_id": project_id,
        "total_tasks": total_tasks,
        "done_tasks": done_tasks,
        "progress": progress
    }