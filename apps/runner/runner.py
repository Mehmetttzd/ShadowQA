import json
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright


ARTIFACTS_DIR = Path(
    "/home/mehme/projects/shadowqa/apps/api/artifacts/screenshots"
)


def run_shadowqa_test(run_id: str, url: str):
    ARTIFACTS_DIR.mkdir(parents=True, exist_ok=True)

    screenshot_path = ARTIFACTS_DIR / f"{run_id}.png"

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            page = browser.new_page()

            page.goto(url)

            title = page.title()

            page.screenshot(path=str(screenshot_path))

            browser.close()

        return {
            "status": "passed",
            "title": title,
            "screenshot": str(screenshot_path),
            "summary": f"ShadowQA successfully validated page: {title}",
        }

    except Exception as e:
        return {
            "status": "failed",
            "summary": str(e),
        }


if __name__ == "__main__":
    run_id = sys.argv[1]
    url = sys.argv[2]

    result = run_shadowqa_test(
        run_id=run_id,
        url=url,
    )

    print(json.dumps(result))