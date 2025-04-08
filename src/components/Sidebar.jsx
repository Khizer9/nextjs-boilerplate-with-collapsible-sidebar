"use client";
import { useState } from "react";
import Link from "next/link";
import { House, LayoutGrid, Menu, Settings, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-gray-800 border-r dark:border-gray-700 transition-all duration-300 ease-in-out h-full ${
        collapsed ? "w-[80px]" : "w-64"
      }`}
    >
      <div className="flex items-center justify-center p-4 border-b dark:border-gray-700 h-[70px]">
        <span className={`text-lg font-bold`}>{collapsed ? <LayoutGrid /> : "My App"}</span>
      </div>
      <div className="flex flex-col justify-between items-center h-[calc(100%-70px)]">
        <nav className="flex flex-col gap-2 p-4">
            <Link href="/" className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2 py-1">
            {collapsed ? <House /> : "Dashboard"}
            </Link>
            <Link href="/profile" className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2 py-1">
            {collapsed ? <UserRoundPen /> : "Profile"}
            </Link>
            <Link href="/settings" className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2 py-1">
            {collapsed ? <Settings /> : "Settings"}
            </Link>
        </nav>

        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          <Menu className="h-5 w-5" />
        </Button>
    </div>
    </div>
  );
}