import { ArrowLeft, Bot, Camera, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { API_BASE_URL, getRun } from "@/lib/api";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RunDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const run = await getRun(id);

  const screenshotUrl = run.screenshot_path
    ? `${API_BASE_URL}/artifacts/screenshots/${run.screenshot_path.split("/").pop()}`
    : null;

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-violet-300">Run Details</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                {run.objective}
              </h1>
              <p className="mt-3 text-sm text-white/45">
                Browser: {run.browser} · Mode: {run.mode}
              </p>
            </div>

            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              {run.status}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-white/50" />
                <h2 className="text-lg font-semibold">Captured Screenshot</h2>
              </div>

              {screenshotUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={screenshotUrl}
                  alt="Run screenshot"
                  className="rounded-2xl border border-white/10"
                />
              ) : (
                <div className="flex h-80 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm text-white/40">
                  No screenshot captured yet.
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-violet-300" />
                  <h2 className="text-lg font-semibold">AI Insight</h2>
                </div>

                <p className="text-sm leading-7 text-white/60">
                  {run.ai_summary || "No AI insight generated yet."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <h2 className="text-lg font-semibold">Execution Metadata</h2>
                </div>

                <div className="space-y-3 text-sm text-white/55">
                  <p>Run ID: {run.id}</p>
                  <p>Project ID: {run.project_id}</p>
                  <p>Created: {new Date(run.created_at).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}