from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class TestRunCreate(BaseModel):
    project_id: UUID
    objective: str
    browser: str = "chromium"
    mode: str = "regression"


class TestRunResponse(BaseModel):
    id: UUID
    project_id: UUID
    objective: str
    status: str
    browser: str
    mode: str
    ai_summary: str | None
    screenshot_path: str | None
    created_at: datetime

    model_config = {
        "from_attributes": True
    }