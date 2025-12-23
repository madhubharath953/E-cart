"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-2.5 text-gray-400"
          size={18}
        />
        <input
          className="w-full pl-10 text-gray-800 pr-4 py-2 border rounded-lg text-sm"
          placeholder="Search products, orders, customers..."
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="text-gray-600" />

        <div className="flex items-center gap-2">
          <Image
            src="https://i.pravatar.cc/40"
            width={40}
            height={40}
            alt="User"
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-black">Siva</p>
            <p className="text-gray-800">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}