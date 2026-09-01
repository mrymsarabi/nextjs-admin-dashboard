"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { revenueData } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--border))" vertical={false} />
        <XAxis
          dataKey="month"
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
          tickFormatter={(v) => `$${v / 1000}k`}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "rgb(var(--border-strong))", strokeDasharray: "4 4" }}
        />
        <Legend
          wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
          iconType="circle"
          iconSize={8}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke="#6366f1"
          strokeWidth={2.5}
          fill="url(#revenueGrad)"
          dot={false}
          activeDot={{ r: 5, stroke: "#6366f1", strokeWidth: 2, fill: "rgb(var(--card))" }}
        />
        <Area
          type="monotone"
          dataKey="expenses"
          name="Expenses"
          stroke="#ec4899"
          strokeWidth={2}
          fill="url(#expenseGrad)"
          dot={false}
          activeDot={{ r: 5, stroke: "#ec4899", strokeWidth: 2, fill: "rgb(var(--card))" }}
        />
        <Area
          type="monotone"
          dataKey="profit"
          name="Profit"
          stroke="#10b981"
          strokeWidth={2}
          fill="url(#profitGrad)"
          dot={false}
          activeDot={{ r: 5, stroke: "#10b981", strokeWidth: 2, fill: "rgb(var(--card))" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

type TooltipPayloadItem = {
  name: string;
  value: number;
  color: string;
  dataKey: string;
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="card p-3 shadow-xl min-w-45">
      <div className="text-xs text-muted mb-2">{label} 2026</div>
      <div className="space-y-1.5">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted">{entry.name}</span>
            </div>
            <span className="font-semibold">{formatCurrency(entry.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
