import json
import subprocess
import uuid


RUNNER_PATH = "/home/mehme/projects/shadowqa/apps/runner/runner.py"

PYTHON_PATH = (
    "/home/mehme/projects/shadowqa/apps/runner/.venv/bin/python"
)


def execute_runner(run_id: uuid.UUID, url: str):
    process = subprocess.run(
        [
            PYTHON_PATH,
            RUNNER_PATH,
            str(run_id),
            url,
        ],
        capture_output=True,
        text=True,
    )

    return json.loads(process.stdout)