export const dashboardMetrics = [
  { label: "Total Runs", value: "1,284", trend: "+14%" },
  { label: "Pass Rate", value: "94.8%", trend: "+3.2%" },
  { label: "Open Risks", value: "18", trend: "-9%" },
  { label: "Avg Duration", value: "2.1m", trend: "-11%" },
];

export const recentRuns = [
  {
    id: "run_001",
    suite: "Checkout Regression",
    branch: "main",
    status: "Passed",
    duration: "2m 09s",
    score: "98%",
  },
  {
    id: "run_002",
    suite: "Auth Flow",
    branch: "release-1.4",
    status: "Warning",
    duration: "1m 47s",
    score: "84%",
  },
  {
    id: "run_003",
    suite: "Billing Settings",
    branch: "main",
    status: "Failed",
    duration: "3m 21s",
    score: "61%",
  },
  {
    id: "run_004",
    suite: "User Onboarding",
    branch: "feature/signup",
    status: "Passed",
    duration: "2m 33s",
    score: "96%",
  },
];

export const projects = [
  {
    name: "Core Web App",
    url: "https://app.shadowdemo.dev",
    health: "Stable",
    coverage: "92%",
  },
  {
    name: "Billing Portal",
    url: "https://billing.shadowdemo.dev",
    health: "At Risk",
    coverage: "76%",
  },
  {
    name: "Marketing Site",
    url: "https://shadowdemo.dev",
    health: "Stable",
    coverage: "88%",
  },
];