// app/data/types.ts
export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  lastLogin: string;
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  date: string;
  items: { name: string; quantity: number; price: number }[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export type Metric = {
  date: string;
  revenue: number;
  orders: number;
  activeUsers: number;
};
