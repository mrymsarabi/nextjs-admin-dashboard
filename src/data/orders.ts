import { Order } from "./types";

export const orders: Order[] = [
  { id: "o1", customer: "Sara H.", total: 120, status: "pending", date: "2025-10-01", items: [{ name: "T-Shirt", quantity: 2, price: 20 }] },
  { id: "o2", customer: "Ali R.", total: 200, status: "shipped", date: "2025-10-02", items: [{ name: "Jeans", quantity: 1, price: 50 }, { name: "Hat", quantity: 2, price: 15 }] },
  { id: "o3", customer: "Mina K.", total: 90, status: "delivered", date: "2025-10-03", items: [{ name: "Sneakers", quantity: 1, price: 80 }] },
  { id: "o4", customer: "Nima P.", total: 120, status: "pending", date: "2025-09-29", items: [{ name: "Jacket", quantity: 1, price: 120 }] },
  { id: "o5", customer: "Lara S.", total: 15, status: "delivered", date: "2025-09-30", items: [{ name: "Hat", quantity: 1, price: 15 }] },
  { id: "o6", customer: "Omid T.", total: 5, status: "cancelled", date: "2025-10-01", items: [{ name: "Socks", quantity: 1, price: 5 }] },
  { id: "o7", customer: "Yasmin V.", total: 60, status: "shipped", date: "2025-10-03", items: [{ name: "Backpack", quantity: 1, price: 60 }] },
  { id: "o8", customer: "Reza A.", total: 90, status: "pending", date: "2025-09-28", items: [{ name: "Boots", quantity: 1, price: 90 }] },
  { id: "o9", customer: "Negin M.", total: 25, status: "delivered", date: "2025-10-02", items: [{ name: "Scarf", quantity: 1, price: 25 }] },
  { id: "o10", customer: "Kian L.", total: 40, status: "shipped", date: "2025-10-03", items: [{ name: "Sweater", quantity: 1, price: 40 }] },
];
