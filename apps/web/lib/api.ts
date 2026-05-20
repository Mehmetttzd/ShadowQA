export const API_BASE_URL = "http://localhost:8000";

export async function getRuns() {
  const res = await fetch(`${API_BASE_URL}/runs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch runs");
  }

  return res.json();
}

export async function getRun(id: string) {
  const res = await fetch(`${API_BASE_URL}/runs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch run");
  }

  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export async function createRun(payload: {
  project_id: string;
  objective: string;
  browser: string;
  mode: string;
}) {
  const res = await fetch(`${API_BASE_URL}/runs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create run");
  }

  return res.json();
}
export async function createProject(payload: {
  name: string;
  url: string;
  environment: string;
}) {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create project");
  }

  return res.json();
}