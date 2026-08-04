// Mock data for the analytics dashboard.

export type TimeRange = "7d" | "30d" | "90d" | "1y";

export const kpis = {
  revenue: {
    label: "Total Revenue",
    value: 847329,
    change: 12.4,
    trend: [42, 48, 45, 52, 49, 58, 62, 59, 67, 71, 68, 74, 79, 82] as number[],
    prefix: "$",
  },
  users: {
    label: "Active Users",
    value: 24853,
    change: 8.2,
    trend: [18, 19, 21, 20, 22, 24, 23, 25, 27, 26, 28, 30, 31, 33] as number[],
    prefix: "",
  },
  orders: {
    label: "New Orders",
    value: 5284,
    change: -3.1,
    trend: [320, 310, 298, 305, 295, 288, 276, 284, 270, 265, 258, 248, 240, 232] as number[],
    prefix: "",
  },
  conversion: {
    label: "Conversion Rate",
    value: 4.87,
    change: 1.8,
    trend: [3.8, 4.0, 3.9, 4.1, 4.3, 4.2, 4.5, 4.4, 4.6, 4.7, 4.6, 4.8, 4.9, 4.87] as number[],
    suffix: "%",
  },
};

export const revenueData = [
  { month: "Jan", revenue: 48200, expenses: 28400, profit: 19800 },
  { month: "Feb", revenue: 52100, expenses: 29100, profit: 23000 },
  { month: "Mar", revenue: 49800, expenses: 30200, profit: 19600 },
  { month: "Apr", revenue: 61400, expenses: 31800, profit: 29600 },
  { month: "May", revenue: 68200, expenses: 33400, profit: 34800 },
  { month: "Jun", revenue: 72500, expenses: 35100, profit: 37400 },
  { month: "Jul", revenue: 78900, expenses: 36800, profit: 42100 },
  { month: "Aug", revenue: 81200, expenses: 38200, profit: 43000 },
  { month: "Sep", revenue: 76800, expenses: 37500, profit: 39300 },
  { month: "Oct", revenue: 84300, expenses: 39100, profit: 45200 },
  { month: "Nov", revenue: 91500, expenses: 41200, profit: 50300 },
  { month: "Dec", revenue: 98700, expenses: 43600, profit: 55100 },
];

export const trafficSources = [
  { name: "Direct", value: 42, color: "#6366f1" },
  { name: "Organic Search", value: 28, color: "#8b5cf6" },
  { name: "Social Media", value: 17, color: "#ec4899" },
  { name: "Referral", value: 8, color: "#14b8a6" },
  { name: "Email", value: 5, color: "#f59e0b" },
];

export const weeklyActivity = [
  { day: "Mon", visitors: 2400, pageViews: 4800, bounceRate: 32 },
  { day: "Tue", visitors: 2800, pageViews: 5200, bounceRate: 28 },
  { day: "Wed", visitors: 3100, pageViews: 5900, bounceRate: 25 },
  { day: "Thu", visitors: 2900, pageViews: 5500, bounceRate: 29 },
  { day: "Fri", visitors: 3400, pageViews: 6200, bounceRate: 22 },
  { day: "Sat", visitors: 2200, pageViews: 4100, bounceRate: 35 },
  { day: "Sun", visitors: 1900, pageViews: 3600, bounceRate: 38 },
];

export const performanceData = [
  { hour: "00:00", responseTime: 142, requests: 820 },
  { hour: "02:00", responseTime: 128, requests: 640 },
  { hour: "04:00", responseTime: 118, requests: 480 },
  { hour: "06:00", responseTime: 135, requests: 720 },
  { hour: "08:00", responseTime: 182, requests: 1840 },
  { hour: "10:00", responseTime: 214, requests: 2460 },
  { hour: "12:00", responseTime: 198, requests: 2180 },
  { hour: "14:00", responseTime: 176, requests: 2020 },
  { hour: "16:00", responseTime: 168, requests: 1860 },
  { hour: "18:00", responseTime: 189, requests: 2340 },
  { hour: "20:00", responseTime: 172, requests: 1920 },
  { hour: "22:00", responseTime: 156, requests: 1340 },
];

export const topProducts = [
  { name: "Aurora Pro Headphones", category: "Audio", sales: 1284, revenue: 192600, growth: 18.4 },
  { name: "Nimbus Cloud Storage 1TB", category: "Digital", sales: 2847, revenue: 142350, growth: 24.1 },
  { name: "Zenith Mechanical Keyboard", category: "Peripherals", sales: 964, revenue: 134960, growth: 12.7 },
  { name: "Pulse Fitness Tracker", category: "Wearable", sales: 1847, revenue: 110820, growth: 8.2 },
  { name: "Voyager Smart Luggage", category: "Travel", sales: 624, revenue: 93600, growth: -4.3 },
  { name: "Echo Smart Speaker", category: "Smart Home", sales: 1204, revenue: 84280, growth: 15.9 },
];

export type Transaction = {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "completed" | "pending" | "failed" | "refunded";
  method: string;
  date: string;
  avatarColor: string;
};

export const transactions: Transaction[] = [
  { id: "TXN-7842", customer: "Amelia Chen", email: "amelia@acme.io", product: "Aurora Pro", amount: 249, status: "completed", method: "Visa •• 4242", date: "2 min ago", avatarColor: "bg-indigo-500" },
  { id: "TXN-7841", customer: "Marcus Johnson", email: "marcus.j@mail.com", product: "Zenith KB", amount: 189, status: "completed", method: "Mastercard •• 8821", date: "12 min ago", avatarColor: "bg-emerald-500" },
  { id: "TXN-7840", customer: "Sofia Reyes", email: "sofia.r@studio.co", product: "Cloud Storage", amount: 49, status: "pending", method: "PayPal", date: "28 min ago", avatarColor: "bg-pink-500" },
  { id: "TXN-7839", customer: "James Whitfield", email: "jwhitfield@corp.net", product: "Pulse Tracker", amount: 129, status: "completed", method: "Amex •• 1004", date: "1 hour ago", avatarColor: "bg-amber-500" },
  { id: "TXN-7838", customer: "Priya Patel", email: "priya.p@design.io", product: "Aurora Pro", amount: 249, status: "refunded", method: "Visa •• 0098", date: "2 hours ago", avatarColor: "bg-violet-500" },
  { id: "TXN-7837", customer: "Noah Williams", email: "noah.w@gmail.com", product: "Echo Speaker", amount: 89, status: "failed", method: "Visa •• 3310", date: "3 hours ago", avatarColor: "bg-red-500" },
  { id: "TXN-7836", customer: "Elena Vasquez", email: "elena.v@corp.io", product: "Voyager Luggage", amount: 299, status: "completed", method: "Mastercard •• 5521", date: "4 hours ago", avatarColor: "bg-cyan-500" },
  { id: "TXN-7835", customer: "Kenji Tanaka", email: "kenji.t@studio.jp", product: "Zenith KB", amount: 189, status: "completed", method: "Apple Pay", date: "5 hours ago", avatarColor: "bg-teal-500" },
];

export type ActivityItem = {
  id: string;
  type: "sale" | "signup" | "alert" | "deployment" | "review";
  title: string;
  description: string;
  time: string;
};

export const activities: ActivityItem[] = [
  { id: "a1", type: "sale", title: "New enterprise deal closed", description: "Acme Corp signed a $48,000 annual contract", time: "5m ago" },
  { id: "a2", type: "deployment", title: "Production deploy v2.14.0", description: "Rolling out to 4 regions, 98% complete", time: "22m ago" },
  { id: "a3", type: "alert", title: "Elevated error rate in EU-West", description: "500 errors spiked to 0.8% — investigating", time: "48m ago" },
  { id: "a4", type: "signup", title: "1,240 new signups today", description: "Up 18% vs. yesterday's total", time: "1h ago" },
  { id: "a5", type: "review", title: "5-star review on Aurora Pro", description: '"Best headphones I\'ve ever owned" — TechRadar', time: "2h ago" },
  { id: "a6", type: "sale", title: "Flash sale milestone", description: "Crossed $100k in the first 3 hours", time: "3h ago" },
];

export const regionData = [
  { region: "North America", users: 9842, share: 39.6, change: 6.2 },
  { region: "Europe", users: 7124, share: 28.7, change: 4.8 },
  { region: "Asia Pacific", users: 5421, share: 21.8, change: 14.3 },
  { region: "Latin America", users: 1684, share: 6.8, change: 9.1 },
  { region: "Middle East & Africa", users: 782, share: 3.1, change: 18.7 },
];
