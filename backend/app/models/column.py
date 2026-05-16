from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.database import Base

class ColumnModel(Base):
    __tablename__ = "columns"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    board_id = Column(Integer, ForeignKey("boards.id"))