from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import AsyncSessionLocal
from app.models.project import Project
from app.models.test_run import TestRun
from app.schemas.test_run import TestRunCreate, TestRunResponse
from app.services.runner_service import execute_runner

router = APIRouter()


async def get_db():
    async with AsyncSessionLocal() as session:
        yield session


@router.post("", response_model=TestRunResponse)
async def create_test_run(
    payload: TestRunCreate,
    db: AsyncSession = Depends(get_db),
):
    project = await db.get(Project, payload.project_id)

    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    test_run = TestRun(
        project_id=payload.project_id,
        objective=payload.objective,
        browser=payload.browser,
        mode=payload.mode,
        status="queued",
        ai_summary="ShadowQA generated an execution plan and queued the regression run.",
    )

    db.add(test_run)
    await db.commit()
    await db.refresh(test_run)

    test_run.status = "running"
    await db.commit()

    result = execute_runner(
        run_id=test_run.id,
        url=project.url,
    )

    test_run.status = result["status"]
    test_run.ai_summary = result["summary"]
    test_run.screenshot_path = result.get("screenshot")

    await db.commit()
    await db.refresh(test_run)

    return test_run


@router.get("", response_model=list[TestRunResponse])
async def list_test_runs(
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(TestRun).order_by(TestRun.created_at.desc())
    )

    return result.scalars().all()


@router.get("/{run_id}", response_model=TestRunResponse)
async def get_test_run(
    run_id: str,
    db: AsyncSession = Depends(get_db),
):
    test_run = await db.get(TestRun, run_id)

    if not test_run:
        raise HTTPException(status_code=404, detail="Run not found")

    return test_run