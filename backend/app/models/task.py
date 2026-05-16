from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    column_id = Column(Integer, ForeignKey("columns.id"))