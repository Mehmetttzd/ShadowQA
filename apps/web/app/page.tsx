"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  FolderKanban,
  GitBranch,
  LayoutDashboard,
  PlayCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  {
    title: "Dashboard",
    description: "Monitor live runs, risks, screenshots, and AI insights.",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    description: "Register apps and manage monitored product URLs.",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "New Test Run",
    description: "Launch real Playwright validation from the UI.",
    href: "/runs/new",
    icon: PlayCircle,
  },
];

const features = [
  "Playwright browser automation",
  "Screenshot artifact capture",
  "FastAPI orchestration engine",
  "PostgreSQL-backed run history",
  "AI-ready failure insights",
  "Premium QA command center",
];

const flow = [
  {
    title: "Connect your product",
    desc: "Add staging or production URLs into ShadowQA.",
    icon: FolderKanban,
  },
  {
    title: "Launch autonomous checks",
    desc: "Trigger browser automation directly from the UI.",
    icon: PlayCircle,
  },
  {
    title: "Review evidence",
    desc: "See screenshots, status, metadata, and generated insight.",
    icon: Radar,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.28),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:justify-between"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">ShadowQA</p>
                <p className="text-xs text-white/45">
                  Autonomous Regression Intelligence
                </p>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/dashboard"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/runs/new"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                New Test Run
              </Link>
            </div>
          </motion.nav>

          <div className="grid min-h-[calc(100vh-120px)] items-center gap-12 py-16 lg:grid-cols-[1fr_560px]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70 shadow-xl backdrop-blur"
              >
                <Sparkles className="h-4 w-4 text-violet-300" />
                AI-native QA platform for teams shipping fast
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-white md:text-8xl"
              >
                Catch regressions before your users do.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-7 max-w-2xl text-lg leading-8 text-white/58"
              >
                ShadowQA launches real browser checks, captures visual evidence,
                stores execution history, and turns failures into clear product
                intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  href="/runs/new"
                  className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-2xl transition hover:scale-[1.02] hover:bg-white/90"
                >
                  Launch a QA run
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white shadow-xl backdrop-blur transition hover:bg-white/10"
                >
                  View command center
                  <LayoutDashboard className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32 }}
                className="mt-10 grid gap-3 md:grid-cols-3"
              >
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.075]"
                  >
                    <item.icon className="mb-4 h-5 w-5 text-violet-300" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-12 z-10 hidden rounded-3xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Run passed</p>
                    <p className="text-xs text-white/45">Screenshot captured</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-16 z-10 hidden rounded-3xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-500/10 p-2">
                    <Bot className="h-5 w-5 text-violet-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">AI insight ready</p>
                    <p className="text-xs text-white/45">Failure context generated</p>
                  </div>
                </div>
              </motion.div>

              <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <div className="rounded-[1.9rem] border border-white/10 bg-[#080a10]/90 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/45">Command Center</p>
                      <h2 className="text-xl font-semibold">
                        Live Regression Run
                      </h2>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      Production Ready
                    </span>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white text-black p-2">
                          <Code2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Homepage Visual Check</p>
                          <p className="text-xs text-white/40">Chromium · regression</p>
                        </div>
                      </div>
                      <GitBranch className="h-5 w-5 text-white/35" />
                    </div>

                    <div className="space-y-3">
                      {[
                        ["Project URL loaded", "passed"],
                        ["Browser screenshot captured", "passed"],
                        ["Artifact stored", "passed"],
                        ["AI summary generated", "passed"],
                      ].map(([label, status]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                            <span className="text-sm text-white/78">{label}</span>
                          </div>
                          <span className="text-xs capitalize text-white/40">
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                        <Zap className="h-4 w-4 text-yellow-300" />
                        Execution Engine
                      </div>
                      <p className="text-sm leading-6 text-white/50">
                        FastAPI launches Playwright and returns real run data.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                        <Radar className="h-4 w-4 text-sky-300" />
                        Evidence Layer
                      </div>
                      <p className="text-sm leading-6 text-white/50">
                        Screenshots are served back into the product UI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium text-violet-300">
              Why teams would buy this
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Not another test dashboard. A regression intelligence layer.
            </h2>
            <p className="mt-4 text-white/50">
              The market wants tools that reduce release risk, explain failures,
              and give teams confidence when shipping faster with AI-generated code.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {flow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium text-violet-300">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Built like a real SaaS product from day one.
            </h2>
            <p className="mt-5 text-white/50">
              ShadowQA already connects frontend workflows, backend execution,
              persistent run history, and visual artifacts.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm text-white/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_35%),rgba(255,255,255,0.04)] p-10 shadow-2xl md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-violet-300">
                Ready to test the product flow?
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
                Create a project, launch a run, and review the captured result.
              </h2>
            </div>

            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-white/90"
            >
              Start from Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}