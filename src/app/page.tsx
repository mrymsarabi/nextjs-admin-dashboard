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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
