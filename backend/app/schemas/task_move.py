from pydantic import BaseModel

class TaskMove(BaseModel):
    task_id: int
    column_id: int