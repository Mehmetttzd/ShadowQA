from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class ProjectCreate(BaseModel):
    name: str
    url: str
    environment: str = "production"


class ProjectResponse(BaseModel):
    id: UUID
    name: str
    url: str
    environment: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }