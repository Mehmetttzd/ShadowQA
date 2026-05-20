from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app.api.health import router as health_router
from app.api.projects import router as projects_router
from app.api.runs import router as runs_router

app = FastAPI(
    title="ShadowQA API",
    version="0.1.0",
    description="AI-native QA automation backend",
)

app.mount(
    "/artifacts",
    StaticFiles(directory="artifacts"),
    name="artifacts",
)

app.include_router(health_router, prefix="/health", tags=["Health"])
app.include_router(projects_router, prefix="/projects", tags=["Projects"])
app.include_router(runs_router, prefix="/runs", tags=["Test Runs"])