from pydantic import BaseModel

class BoardCreate(BaseModel):
    name: str
    project_id: int