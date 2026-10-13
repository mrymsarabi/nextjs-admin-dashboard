"use client";

import { Search, Bell, Sun, Moon, ChevronDown, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-[rgb(var(--background))]/80 border-b border-default">
      <div className="flex items-center gap-4 px-6 py-3">
        {/* Breadcrumb */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="text-muted">Workspace</span>
          <span className="text-muted">/</span>
          <span className="font-medium">Dashboard</span>
          <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Sparkles className="w-2.5 h-2.5" />
            Live
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <button className="w-full group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-default bg-[rgb(var(--card))] hover:border-strong transition-colors">
            <Search className="w-4 h-4 text-muted" />
            <span className="text-sm text-muted">Search transactions, customers, reports…</span>
            <div className="ml-auto flex items-center gap-1 text-[10px] text-muted">
              <kbd className="px-1.5 py-0.5 rounded border border-default bg-[rgb(var(--card-muted))] font-mono">⌘</kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-default bg-[rgb(var(--card-muted))] font-mono">K</kbd>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <NotificationButton />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg border border-default bg-[rgb(var(--card))] hover:bg-[rgb(var(--card-muted))] transition-colors flex items-center justify-center"
    >
      {mounted && theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}

function NotificationButton() {
  return (
    <button className="relative w-9 h-9 rounded-lg border border-default bg-[rgb(var(--card))] hover:bg-[rgb(var(--card-muted))] transition-colors flex items-center justify-center">
      <Bell className="w-4 h-4" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-[rgb(var(--card))]" />
    </button>
  );
}

function UserMenu() {
  return (
    <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg hover:bg-[rgb(var(--card))] transition-colors">
      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 via-violet-500 to-pink-500 flex items-center justify-center text-white font-semibold text-xs shadow-lg shadow-indigo-500/20">
        AR
      </div>
      <div className="hidden sm:flex flex-col items-start leading-tight">
        <span className="text-xs font-semibold">Alex Rivera</span>
        <span className="text-[10px] text-muted">alex@nebula.io</span>
      </div>
      <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-muted" />
    </button>
  );
}
