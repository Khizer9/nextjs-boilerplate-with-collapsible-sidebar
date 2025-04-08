"use client";

import { ProfileDropdown } from "./profile-dropdown";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 h-[70px] flex items-center px-4 sticky top-0 z-10 justify-between">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <ProfileDropdown />
      </div>
    </header>
  );
}
