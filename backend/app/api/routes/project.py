from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.project import Project
from app.models.board import Board
from app.schemas.project import ProjectCreate
from app.core.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/projects", tags=["Projects"])

@router.post("/")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):
    new_project = Project(name=project.name, owner_id=user.id)
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return new_project

@router.get("/")
def list_projects(
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):
    return db.query(Project).filter(Project.owner_id == user.id).all()

@router.get("/{project_id}/boards")
def get_project_boards(
    project_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):
    return db.query(Board).filter(Board.project_id == project_id).all()