"use client";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  Settings,
  HelpCircle,
  LogOut,
  CreditCard,
  Bell,
  Zap,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
  active?: boolean;
};

const primaryNav: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
  { label: "Analytics", icon: BarChart3, href: "#", badge: "New" },
  { label: "Customers", icon: Users, href: "#" },
  { label: "Orders", icon: ShoppingBag, href: "#", badge: "12" },
  { label: "Products", icon: Package, href: "#" },
  { label: "Billing", icon: CreditCard, href: "#" },
  { label: "Notifications", icon: Bell, href: "#", badge: "3" },
];

const secondaryNav: NavItem[] = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Help & Support", icon: HelpCircle, href: "#" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-default bg-[rgb(var(--card))] h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-default">
        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[rgb(var(--card))]" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Nebula Analytics</span>
          <span className="text-xs text-muted">Pro workspace</span>
        </div>
      </div>

      {/* Workspace switcher */}
      <div className="px-4 py-3">
        <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-default hover:bg-[rgb(var(--card-muted))] transition-colors">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-xs shrink-0">
              A
            </div>
            <div className="flex flex-col items-start min-w-0">
              <span className="text-xs font-medium truncate">Acme Inc.</span>
              <span className="text-[10px] text-muted truncate">Enterprise plan</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted shrink-0" />
        </button>
      </div>

      {/* Primary nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Overview
        </div>
        {primaryNav.map((item) => (
          <NavItemRow key={item.label} item={item} />
        ))}

        <div className="px-3 py-2 mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Account
        </div>
        {secondaryNav.map((item) => (
          <NavItemRow key={item.label} item={item} />
        ))}
      </nav>

      {/* Upgrade card */}
      <div className="px-4 pb-4">
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-pink-500/10 border border-default">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl" />
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-2">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm font-semibold mb-0.5">Upgrade to Pro</div>
            <p className="text-xs text-muted mb-3">
              Unlock AI insights, advanced reports, and priority support.
            </p>
            <button className="w-full text-xs font-medium py-1.5 rounded-md bg-[rgb(var(--foreground))] text-[rgb(var(--background))] hover:opacity-90 transition-opacity">
              Upgrade now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItemRow({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      className={cn(
        "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
        item.active
          ? "bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent))]"
          : "text-[rgb(var(--foreground))] hover:bg-[rgb(var(--card-muted))]"
      )}
    >
      <Icon className={cn("w-4 h-4 shrink-0", item.active ? "text-[rgb(var(--accent))]" : "text-muted")} />
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge && (
        <span
          className={cn(
            "text-[10px] font-semibold px-1.5 py-0.5 rounded-md",
            item.active
              ? "bg-[rgb(var(--accent))] text-white"
              : "bg-[rgb(var(--card-muted))] text-muted"
          )}
        >
          {item.badge}
        </span>
      )}
    </a>
  );
}
