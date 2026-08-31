import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[rgb(var(--background))]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
      </div>
    </div>
  );
}
