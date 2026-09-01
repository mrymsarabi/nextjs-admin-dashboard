"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { trafficSources } from "@/lib/mock-data";

export function TrafficChart() {
  const total = trafficSources.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSources}
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={96}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {trafficSources.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload || !payload.length) return null;
                const data = payload[0].payload as (typeof trafficSources)[number];
                return (
                  <div className="card p-2.5 shadow-xl">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: data.color }}
                      />
                      <span className="text-xs font-medium">{data.name}</span>
                    </div>
                    <div className="text-sm font-bold mt-0.5">{data.value}%</div>
                  </div>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold">{total}%</span>
          <span className="text-[10px] text-muted uppercase tracking-wider">Sources</span>
        </div>
      </div>

      <div className="w-full space-y-2 mt-2">
        {trafficSources.map((source) => (
          <div key={source.name} className="flex items-center gap-3 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-sm shrink-0"
              style={{ backgroundColor: source.color }}
            />
            <span className="flex-1 truncate">{source.name}</span>
            <span className="font-semibold tabular-nums">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
