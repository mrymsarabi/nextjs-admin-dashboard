"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";
import { weeklyActivity } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Metric = "visitors" | "pageViews" | "bounceRate";

const metrics: { key: Metric; label: string; color: string; format: (v: number) => string }[] = [
  { key: "visitors", label: "Visitors", color: "#6366f1", format: (v) => v.toLocaleString() },
  { key: "pageViews", label: "Page views", color: "#8b5cf6", format: (v) => v.toLocaleString() },
  { key: "bounceRate", label: "Bounce rate", color: "#14b8a6", format: (v) => `${v}%` },
];

export function ActivityChart() {
  const [activeMetric, setActiveMetric] = useState<Metric>("visitors");
  const current = metrics.find((m) => m.key === activeMetric)!;

  const total = weeklyActivity.reduce((acc, item) => acc + item[activeMetric], 0);
  const avg = total / weeklyActivity.length;

  return (
    <div>
      <div className="flex items-center gap-1 p-1 mb-4 rounded-lg bg-[rgb(var(--card-muted))] border border-default w-fit">
        {metrics.map((m) => (
          <button
            key={m.key}
            onClick={() => setActiveMetric(m.key)}
            className={cn(
              "text-xs font-medium px-3 py-1.5 rounded-md transition-all",
              activeMetric === m.key
                ? "bg-[rgb(var(--card))] text-[rgb(var(--foreground))] shadow-sm"
                : "text-muted hover:text-[rgb(var(--foreground))]"
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-xs text-muted mb-0.5">Weekly avg</div>
          <div className="text-lg font-bold">{current.format(Math.round(avg))}</div>
        </div>
        <div>
          <div className="text-xs text-muted mb-0.5">Peak</div>
          <div className="text-lg font-bold">
            {current.format(Math.max(...weeklyActivity.map((d) => d[activeMetric])))}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted mb-0.5">Total</div>
          <div className="text-lg font-bold">{current.format(total)}</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={weeklyActivity} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" vertical={false} />
          <XAxis
            dataKey="day"
            stroke="rgb(var(--muted))"
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="rgb(var(--muted))"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
          />
          <Tooltip
            cursor={{ fill: "rgb(var(--card-muted))", opacity: 0.5 }}
            content={({ active, payload, label }) => {
              if (!active || !payload || !payload.length) return null;
              const data = payload[0].payload as (typeof weeklyActivity)[number];
              return (
                <div className="card p-3 shadow-xl">
                  <div className="text-xs text-muted mb-2">{label}</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Visitors</span>
                      <span className="font-semibold">{data.visitors.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Page views</span>
                      <span className="font-semibold">{data.pageViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Bounce rate</span>
                      <span className="font-semibold">{data.bounceRate}%</span>
                    </div>
                  </div>
                </div>
              );
            }}
          />
          <Bar dataKey={activeMetric} radius={[6, 6, 0, 0]} maxBarSize={36}>
            {weeklyActivity.map((entry, index) => {
              const max = Math.max(...weeklyActivity.map((d) => d[activeMetric]));
              const intensity = entry[activeMetric] / max;
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={current.color}
                  opacity={0.35 + intensity * 0.65}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
