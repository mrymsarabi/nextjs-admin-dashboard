"use client";

import { ShoppingCart, UserPlus, AlertTriangle, Rocket, Star, TrendingUp } from "lucide-react";
import { activities, topProducts, regionData, type ActivityItem } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const iconMap: Record<ActivityItem["type"], { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  sale: { icon: ShoppingCart, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  signup: { icon: UserPlus, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  alert: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10" },
  deployment: { icon: Rocket, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  review: { icon: Star, color: "text-pink-500", bg: "bg-pink-500/10" },
};

export function ActivityFeed() {
  return (
    <ul className="relative">
      {/* vertical line */}
      <div className="absolute left-4.25 top-2 bottom-2 w-px bg-[rgb(var(--border))]" />

      <div className="space-y-4">
        {activities.map((item) => {
          const meta = iconMap[item.type];
          const Icon = meta.icon;
          return (
            <li key={item.id} className="relative flex gap-3 pl-0">
              <div
                className={cn(
                  "relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ring-4 ring-[rgb(var(--card))]",
                  meta.bg
                )}
              >
                <Icon className={cn("w-4 h-4", meta.color)} />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-semibold">{item.title}</div>
                  <span className="text-[10px] text-muted whitespace-nowrap">{item.time}</span>
                </div>
                <p className="text-xs text-muted mt-0.5 line-clamp-2">{item.description}</p>
              </div>
            </li>
          );
        })}
      </div>

      <button className="mt-5 w-full text-xs font-semibold text-[rgb(var(--accent))] hover:underline">
        View all activity →
      </button>
    </ul>
  );
}

export function TopProducts() {
  const maxRevenue = Math.max(...topProducts.map((p) => p.revenue));
  return (
    <div className="space-y-3">
      {topProducts.map((p, i) => {
        const width = (p.revenue / maxRevenue) * 100;
        return (
          <div key={p.name} className="group">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-indigo-500/20 to-violet-500/20 border border-default flex items-center justify-center text-[10px] font-bold text-muted shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold truncate">{p.name}</div>
                <div className="text-[10px] text-muted truncate">
                  {p.category} · {p.sales.toLocaleString()} units
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-bold tabular-nums">
                  ${(p.revenue / 1000).toFixed(1)}k
                </div>
                <div
                  className={cn(
                    "text-[10px] font-semibold tabular-nums",
                    p.growth >= 0 ? "text-emerald-500" : "text-red-500"
                  )}
                >
                  {p.growth >= 0 ? "+" : ""}
                  {p.growth}%
                </div>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-[rgb(var(--card-muted))] overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500 transition-all group-hover:from-indigo-400 group-hover:to-violet-400"
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function RegionsList() {
  return (
    <div className="space-y-3">
      {regionData.map((r) => (
        <div key={r.region} className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold truncate">{r.region}</span>
              <span className="text-xs text-muted tabular-nums">{r.share}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[rgb(var(--card-muted))] overflow-hidden">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                style={{ width: `${r.share * 2.5}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[10px] text-muted tabular-nums">
                {r.users.toLocaleString()} users
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold inline-flex items-center gap-0.5 tabular-nums",
                  r.change >= 0 ? "text-emerald-500" : "text-red-500"
                )}
              >
                <TrendingUp className="w-2.5 h-2.5" />
                {r.change >= 0 ? "+" : ""}
                {r.change}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
