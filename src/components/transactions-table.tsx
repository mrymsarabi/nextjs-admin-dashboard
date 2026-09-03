"use client";

import { useState, useMemo } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown, MoreHorizontal, Download, Filter } from "lucide-react";
import { transactions, type Transaction } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type SortKey = "customer" | "amount" | "date" | "status";
type SortDir = "asc" | "desc";

const statusStyles: Record<Transaction["status"], string> = {
  completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  failed: "bg-red-500/10 text-red-500 border-red-500/20",
  refunded: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export function TransactionsTable() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filter, setFilter] = useState<"all" | Transaction["status"]>("all");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filtered = useMemo(() => {
    let data = [...transactions];
    if (filter !== "all") data = data.filter((t) => t.status === filter);
    data.sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      switch (sortKey) {
        case "amount":
          return (a.amount - b.amount) * dir;
        case "customer":
          return a.customer.localeCompare(b.customer) * dir;
        default:
          return 0;
      }
    });
    return data;
  }, [filter, sortKey, sortDir]);

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <ArrowUpDown className="w-3 h-3" />;
    return sortDir === "asc" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />;
  };

  const statuses: Array<"all" | Transaction["status"]> = ["all", "completed", "pending", "failed", "refunded"];
  const counts = {
    all: transactions.length,
    completed: transactions.filter((t) => t.status === "completed").length,
    pending: transactions.filter((t) => t.status === "pending").length,
    failed: transactions.filter((t) => t.status === "failed").length,
    refunded: transactions.filter((t) => t.status === "refunded").length,
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap capitalize",
                filter === s
                  ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                  : "text-muted hover:bg-[rgb(var(--card-muted))]"
              )}
            >
              {s}
              <span
                className={cn(
                  "text-[10px] px-1 py-0.5 rounded",
                  filter === s
                    ? "bg-white/20 text-[rgb(var(--background))]"
                    : "bg-[rgb(var(--card-muted))]"
                )}
              >
                {counts[s]}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <button className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-default hover:bg-[rgb(var(--card-muted))]">
            <Filter className="w-3 h-3" />
            Filter
          </button>
          <button className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-default hover:bg-[rgb(var(--card-muted))]">
            <Download className="w-3 h-3" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted border-b border-default">
              <th className="text-left font-medium py-2 pr-4">
                <button
                  onClick={() => toggleSort("customer")}
                  className="inline-flex items-center gap-1 hover:text-[rgb(var(--foreground))]"
                >
                  Customer
                  <SortIcon column="customer" />
                </button>
              </th>
              <th className="text-left font-medium py-2 pr-4 hidden md:table-cell">Product</th>
              <th className="text-right font-medium py-2 pr-4">
                <button
                  onClick={() => toggleSort("amount")}
                  className="inline-flex items-center gap-1 hover:text-[rgb(var(--foreground))] ml-auto"
                >
                  Amount
                  <SortIcon column="amount" />
                </button>
              </th>
              <th className="text-left font-medium py-2 pr-4 hidden sm:table-cell">Payment</th>
              <th className="text-left font-medium py-2 pr-4">
                <button
                  onClick={() => toggleSort("status")}
                  className="inline-flex items-center gap-1 hover:text-[rgb(var(--foreground))]"
                >
                  Status
                  <SortIcon column="status" />
                </button>
              </th>
              <th className="text-right font-medium py-2 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-default last:border-0 hover:bg-[rgb(var(--card-muted))]/50 transition-colors"
              >
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold text-xs shrink-0",
                        tx.avatarColor
                      )}
                    >
                      {tx.customer
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium truncate">{tx.customer}</div>
                      <div className="text-xs text-muted truncate">{tx.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-4 hidden md:table-cell">
                  <div className="text-xs truncate">{tx.product}</div>
                  <div className="text-[10px] text-muted truncate">{tx.date}</div>
                </td>
                <td className="py-3 pr-4 text-right tabular-nums font-semibold">
                  ${tx.amount}
                </td>
                <td className="py-3 pr-4 hidden sm:table-cell">
                  <div className="text-xs text-muted truncate">{tx.method}</div>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={cn(
                      "inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md border capitalize",
                      statusStyles[tx.status]
                    )}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="w-7 h-7 inline-flex items-center justify-center rounded-md hover:bg-[rgb(var(--card-muted))]">
                    <MoreHorizontal className="w-4 h-4 text-muted" />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-sm text-muted">
                  No transactions match the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
