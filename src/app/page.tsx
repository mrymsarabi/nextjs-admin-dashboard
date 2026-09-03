"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Download,
  Share2,
  RefreshCw,
  DollarSign,
  Users,
  ShoppingBag,
  Target,
  TrendingUp,
  Activity,
  Globe2,
  Zap,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
// import { KpiCard } from "@/components/kpi-card";
// import { RevenueChart } from "@/components/charts/revenue-chart";
// import { TrafficChart } from "@/components/charts/traffic-chart";
// import { ActivityChart } from "@/components/charts/activity-chart";
// import { PerformanceChart } from "@/components/charts/performance-chart";
// import { TransactionsTable } from "@/components/transactions-table";
// import { ActivityFeed, TopProducts, RegionsList } from "@/components/activity-feed";
import { kpis } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { KpiCard } from "@/components/kpi-card";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { TrafficChart } from "@/components/charts/traffic-chart";
import { ActivityChart } from "@/components/charts/activity-chart";
import { PerformanceChart } from "@/components/charts/performance-chart";
import { TransactionsTable } from "@/components/transactions-table";

type TimeRange = "7d" | "30d" | "90d" | "1y";

export default function DashboardPage() {
  const [range, setRange] = useState<TimeRange>("30d");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 800);
  };

  useEffect(() => {
    // Simulate live updates every 30s
    const timer = setInterval(() => setLastUpdated(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  function LegendDot({ color, label, value }: { color: string; label: string; value: string }) {
    return (
      <div className="hidden sm:flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-muted">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[rgb(var(--background))]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />

        <main>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
                  Welcome back, Maryam👋
                </h1>
              </div>
              <p className="text-sm text-muted">
                Here's what's happening with your business today.
              </p>
            </div>

            <div>
              <div>
                {(["7d", "30d", "90d", "1y"] as TimeRange[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={cn(
                      "text-xs font-medium px-3 py-1.5 rounded-md transition-all uppercase",
                      range === r
                        ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                        : "text-muted hover:text-[rgb(var(--foreground))]"
                    )}
                  >
                    {r}
                  </button>
                ))}
                <button className="text-xs font-medium px-3 py-1.5 rounded-md text-muted hover:text-[rgb(var(--foreground))] inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  Custom
                </button>
              </div>

              <button
                onClick={handleRefresh}
                className="w-9 h-9 rounded-lg border border-default bg-[rgb(var(--card))] hover:bg-[rgb(var(--card-muted))] transition-colors inline-flex items-center justify-center"
                aria-label="Refresh"
              >
                <RefreshCw
                  className={cn("w-4 h-4", isRefreshing && "animate-spin")}
                />
              </button>
              <button className="w-9 h-9 rounded-lg border border-default bg-[rgb(var(--card))] hover:bg-[rgb(var(--card-muted))] transition-colors inline-flex items-center justify-center" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[rgb(var(--foreground))] text-[rgb(var(--background))] hover:opacity-90 transition-opacity">
                <Download className="w-3.5 h-3.5" />
                Export report
              </button>
            </div>
          </div>

          {/* Last updated */}
          <div className="flex items-center gap-2 text-xs text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Live · Last updated {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
            <span className="ml-auto hidden sm:inline">
              Showing data for the last {range === "7d" ? "7 days" : range === "30d" ? "30 days" : range === "90d" ? "90 days" : "year"}
            </span>
          </div>

          {/* KPI cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <KpiCard
              label={kpis.revenue.label}
              value={kpis.revenue.value}
              change={kpis.revenue.change}
              trend={kpis.revenue.trend}
              icon={DollarSign}
              prefix="$"
              accent="indigo"
              delay={0}
            />
            <KpiCard
              label={kpis.users.label}
              value={kpis.users.value}
              change={kpis.users.change}
              trend={kpis.users.trend}
              icon={Users}
              accent="emerald"
              delay={50}
            />
            <KpiCard
              label={kpis.orders.label}
              value={kpis.orders.value}
              change={kpis.orders.change}
              trend={kpis.orders.trend}
              icon={ShoppingBag}
              accent="pink"
              delay={100}
            />
            <KpiCard
              label={kpis.conversion.label}
              value={kpis.conversion.value}
              change={kpis.conversion.change}
              trend={kpis.conversion.trend}
              icon={Target}
              suffix="%"
              accent="amber"
              delay={150}
            />
          </section>

          {/* Main charts row */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Revenue chart */}
            <div className="card p-5 xl:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[rgb(var(--accent))]" />
                    Revenue overview
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    Revenue, expenses and profit over time
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <LegendDot color="#6366f1" label="Revenue" value="$863k" />
                  <LegendDot color="#ec4899" label="Expenses" value="$424k" />
                  <LegendDot color="#10b981" label="Profit" value="$439k" />
                </div>
              </div>
              <RevenueChart />
            </div>

            {/* Traffic sources */}
            <div className="card p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-base font-semibold flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[rgb(var(--accent))]" />
                    Traffic sources
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    Where your visitors come from
                  </p>
                </div>
                <button className="w-7 h-7 rounded-md hover:bg-[rgb(var(--card-muted))] inline-flex items-center justify-center">
                  <MoreHorizontal className="w-4 h-4 text-muted" />
                </button>
              </div>
              <TrafficChart />
            </div>
          </section>

          {/* Secondary charts row */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-base font-semibold flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[rgb(var(--accent))]" />
                    Weekly activity
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    Traffic engagement this week
                  </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <ArrowUpRight className="w-3 h-3 inline -mt-0.5" />
                  14.2%
                </span>
              </div>
              <ActivityChart />
            </div>

            <div className="card p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-base font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[rgb(var(--accent))]" />
                    API performance
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    Response time over 24 hours
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold">164ms</div>
                  <div className="text-[10px] text-muted">p95 latency</div>
                </div>
              </div>
              <PerformanceChart />
            </div>
          </section>

          {/* Transactions table */}
          <section className="card p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[rgb(var(--accent))]" />
                  Recent transactions
                </h2>
                <p className="text-xs text-muted mt-0.5">
                  Latest customer orders across all channels
                </p>
              </div>
              <button className="text-xs font-semibold text-[rgb(var(--accent))] hover:underline inline-flex items-center gap-1">
                View all <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
            <TransactionsTable />
          </section>

          
        </main>
      </div>
    </div>
  );
}
