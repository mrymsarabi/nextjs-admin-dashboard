"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { performanceData } from "@/lib/mock-data";

export function PerformanceChart() {
  const avgResponse = Math.round(
    performanceData.reduce((acc, d) => acc + d.responseTime, 0) / performanceData.length
  );

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={performanceData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="rtGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" vertical={false} />
        <XAxis
          dataKey="hour"
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
          tickFormatter={(v) => `${v}ms`}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (!active || !payload || !payload.length) return null;
            const data = payload[0].payload as (typeof performanceData)[number];
            return (
              <div className="card p-3 shadow-xl">
                <div className="text-xs text-muted mb-2">{label}</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Response time</span>
                    <span className="font-semibold">{data.responseTime}ms</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Requests</span>
                    <span className="font-semibold">{data.requests.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          }}
        />
        <ReferenceLine
          y={avgResponse}
          stroke="rgb(var(--muted))"
          strokeDasharray="4 4"
          label={{
            value: `avg ${avgResponse}ms`,
            position: "insideTopRight",
            fill: "rgb(var(--muted))",
            fontSize: 10,
          }}
        />
        <Line
          type="monotone"
          dataKey="responseTime"
          stroke="url(#rtGrad)"
          strokeWidth={2.5}
          dot={{ r: 3, fill: "rgb(var(--card))", stroke: "#14b8a6", strokeWidth: 2 }}
          activeDot={{ r: 6, stroke: "#14b8a6", strokeWidth: 2, fill: "rgb(var(--card))" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
