"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { createProject, getProjects } from "@/lib/api";

type Project = {
  id: string;
  name: string;
  url: string;
  environment: string;
  created_at: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [environment, setEnvironment] = useState("production");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadProjects() {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch {
      setError("Could not load projects. Make sure the backend is running.");
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !url.trim()) {
      setError("Please enter a project name and URL.");
      return;
    }

    try {
      setIsLoading(true);

      await createProject({
        name,
        url,
        environment,
      });

      setName("");
      setUrl("");
      setEnvironment("production");

      await loadProjects();
    } catch {
      setError("Failed to create project. Check your backend terminal.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">ShadowQA</p>
              <p className="text-xs text-white/45">Projects</p>
            </div>
          </Link>

          <Link
            href="/runs/new"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            <Plus className="h-4 w-4" />
            New Test Run
          </Link>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.3fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-300">
              <Sparkles className="h-4 w-4" />
              Project Setup
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">
              Add a monitored product.
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Register an app URL so ShadowQA can launch Playwright runs,
              capture screenshots, and track regression health.
            </p>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Project Name
                </label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/25"
                  placeholder="Example: ShadowQA Web App"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Application URL
                </label>
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/25"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Environment
                </label>
                <select
                  value={environment}
                  onChange={(event) => setEnvironment(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none"
                >
                  <option value="production">Production</option>
                  <option value="staging">Staging</option>
                  <option value="development">Development</option>
                </select>
              </div>

              <button
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating Project..." : "Add Project"}
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm text-violet-300">Application Inventory</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Products monitored by ShadowQA.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
              Each project connects to regression suites, visual baselines, CI
              triggers, and AI-generated failure insights.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.length === 0 ? (
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-white/45">
                  No projects yet. Add your first monitored product.
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Globe2 className="h-5 w-5 text-white/55" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/35" />
                    </div>

                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="mt-2 break-all text-sm text-white/40">
                      {project.url}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                        {project.environment}
                      </span>
                      <span className="text-white/45">
                        {new Date(project.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}