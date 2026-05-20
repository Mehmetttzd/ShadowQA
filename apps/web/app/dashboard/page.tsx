import {
  Activity,
  AlertTriangle,
  Bot,
  CheckCircle2,
  Clock3,
  GitBranch,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { getRuns } from "@/lib/api";

const metrics = [
  { label: "Total Runs", value: "Live", icon: PlayCircle },
  { label: "Passed", value: "Real Data", icon: CheckCircle2 },
  { label: "Open Risks", value: "Tracked", icon: AlertTriangle },
  { label: "Avg Duration", value: "Soon", icon: Clock3 },
];

export default async function DashboardPage() {
  const runs = await getRuns();

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <aside className="hidden w-64 shrink-0 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 lg:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">ShadowQA</p>
              <p className="text-xs text-white/45">Control Center</p>
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            {["Overview", "Projects", "Test Runs", "Visual Diffs", "AI Insights", "Settings"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl px-4 py-3 ${
                    index === 0
                      ? "bg-white text-black"
                      : "text-white/55 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </aside>

        <section className="flex-1">
          <header className="mb-6 flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-violet-300">Regression Intelligence</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                QA Command Center
              </h1>
              <p className="mt-2 text-sm text-white/50">
                Monitor automated test runs, failures, visual changes, and AI-generated insights.
              </p>
            </div>

            <Link
              href="/runs/new"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              <PlayCircle className="h-4 w-4" />
              New Test Run
            </Link>
          </header>

          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <metric.icon className="mb-5 h-5 w-5 text-white/45" />
                <p className="text-sm text-white/45">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Execution Feed</p>
                  <h2 className="text-xl font-semibold">Latest test runs</h2>
                </div>
                <Activity className="h-5 w-5 text-white/40" />
              </div>

              <div className="space-y-3">
                {runs.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-white/45">
                    No test runs yet. Create your first run to see real execution data.
                  </div>
                ) : (
                  runs.map((run: any) => (
                    <Link
                      href={`/runs/${run.id}`}
                      key={run.id}
                      className="grid grid-cols-4 items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                    >
                      <div className="font-medium">
                        {run.objective.length > 32
                          ? `${run.objective.slice(0, 32)}...`
                          : run.objective}
                      </div>

                      <div className="flex items-center gap-2 text-white/45">
                        <GitBranch className="h-4 w-4" />
                        {run.mode}
                      </div>

                      <div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs ${
                            run.status === "passed"
                              ? "bg-emerald-500/10 text-emerald-300"
                              : run.status === "warning"
                              ? "bg-yellow-500/10 text-yellow-300"
                              : run.status === "failed"
                              ? "bg-red-500/10 text-red-300"
                              : "bg-blue-500/10 text-blue-300"
                          }`}
                        >
                          {run.status}
                        </span>
                      </div>

                      <div className="text-right text-white/50">
                        {new Date(run.created_at).toLocaleDateString()}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex items-center gap-2">
                <Bot className="h-5 w-5 text-violet-300" />
                <h2 className="text-xl font-semibold">AI Failure Insight</h2>
              </div>

              <p className="text-sm leading-7 text-white/55">
                ShadowQA now reads real test runs from your FastAPI backend.
                Click any run from the execution feed to view the captured screenshot,
                execution metadata, and generated insight.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-white/40">Suggested next action</p>
                <p className="mt-2 text-sm text-white/75">
                  Next we will connect the “Create Test Run” form directly to the backend
                  so runs can be launched from the UI instead of Swagger.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}