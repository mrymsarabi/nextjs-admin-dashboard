"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn, formatCompact, formatPercent } from "@/lib/utils";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

type KpiCardProps = {
  label: string;
  value: number;
  change: number;
  trend: number[];
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
  accent: "indigo" | "emerald" | "pink" | "amber";
  delay?: number;
};

const accentMap = {
  indigo: {
    stroke: "#6366f1",
    fill: "url(#grad-indigo)",
    iconBg: "bg-indigo-500/10",
    iconText: "text-indigo-500",
  },
  emerald: {
    stroke: "#10b981",
    fill: "url(#grad-emerald)",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-500",
  },
  pink: {
    stroke: "#ec4899",
    fill: "url(#grad-pink)",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-500",
  },
  amber: {
    stroke: "#f59e0b",
    fill: "url(#grad-amber)",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-500",
  },
};

export function KpiCard({ label, value, change, trend, icon: Icon, prefix = "", suffix = "", accent, delay = 0 }: KpiCardProps) {
  const colors = accentMap[accent];
  const isPositive = change >= 0;
  const sparkData = trend.map((v, i) => ({ i, v }));

  const formattedValue = prefix
    ? `$${formatCompact(value)}`
    : suffix
    ? `${value.toFixed(2)}${suffix}`
    : formatCompact(value);

  return (
    <div
      className="card p-5 relative overflow-hidden animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors.iconBg)}>
          <Icon className={cn("w-5 h-5", colors.iconText)} />
        </div>
        <div
          className={cn(
            "inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md",
            isPositive
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-red-500/10 text-red-500"
          )}
        >
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {formatPercent(change)}
        </div>
      </div>

      <div className="text-xs text-muted mb-1">{label}</div>
      <div className="text-2xl font-bold tracking-tight mb-3">{formattedValue}</div>

      <div className="h-12 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparkData} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
            <defs>
              <linearGradient id="grad-indigo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-emerald" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-pink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-amber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="v"
              stroke={colors.stroke}
              strokeWidth={2}
              fill={colors.fill}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
