"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bot,
  Globe2,
  PlayCircle,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createRun, getProjects } from "@/lib/api";

type Project = {
  id: string;
  name: string;
  url: string;
  environment: string;
};

export default function NewRunPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState("");
  const [objective, setObjective] = useState("");
  const [browser, setBrowser] = useState("chromium");
  const [mode, setMode] = useState("regression");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);

        if (data.length > 0) {
          setProjectId(data[0].id);
        }
      } catch {
        setError("Could not load projects. Make sure the backend is running.");
      }
    }

    loadProjects();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!projectId || !objective.trim()) {
      setError("Please select a project and enter a test objective.");
      return;
    }

    try {
      setIsLoading(true);

      const run = await createRun({
        project_id: projectId,
        objective,
        browser,
        mode,
      });

      router.push(`/runs/${run.id}`);
    } catch {
      setError("Failed to create test run. Check your backend terminal.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-300">
              <Sparkles className="h-4 w-4" />
              AI Test Generation
            </div>

            <h1 className="text-4xl font-semibold tracking-tight">
              Create a new autonomous test run.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
              Select a monitored project and describe what ShadowQA should validate.
              The backend will launch Playwright, capture a screenshot, and generate
              an execution insight.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Project
                </label>
                <select
                  value={projectId}
                  onChange={(event) => setProjectId(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name} — {project.url}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Test objective
                </label>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <textarea
                    value={objective}
                    onChange={(event) => setObjective(event.target.value)}
                    className="min-h-40 w-full resize-none bg-transparent text-sm leading-6 outline-none placeholder:text-white/25"
                    placeholder="Example: Validate homepage rendering, capture a screenshot, and detect major visual issues."
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Browser
                  </label>
                  <select
                    value={browser}
                    onChange={(event) => setBrowser(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
                  >
                    <option value="chromium">Chromium</option>
                    <option value="firefox">Firefox</option>
                    <option value="webkit">WebKit</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Mode
                  </label>
                  <select
                    value={mode}
                    onChange={(event) => setMode(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
                  >
                    <option value="regression">Regression</option>
                    <option value="smoke">Smoke Test</option>
                    <option value="visual">Visual Check</option>
                    <option value="exploratory">Exploratory AI</option>
                  </select>
                </div>
              </div>

              <button
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Running ShadowQA..." : "Generate & Run Test"}
                <PlayCircle className="h-4 w-4" />
              </button>
            </form>

            <aside className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
              <div className="mb-5 flex items-center gap-2">
                <Bot className="h-5 w-5 text-violet-300" />
                <h2 className="text-lg font-semibold">What happens next?</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "Project target is selected",
                    desc: "ShadowQA uses the saved project URL from PostgreSQL.",
                  },
                  {
                    icon: PlayCircle,
                    title: "Playwright runner executes",
                    desc: "The backend launches the runner and captures a browser screenshot.",
                  },
                  {
                    icon: Sparkles,
                    title: "Result page opens",
                    desc: "You are redirected to the run details page with the artifact and insight.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-white/50" />
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                    <p className="text-sm leading-6 text-white/45">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}