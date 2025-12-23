"use client";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Boxes,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, active: false },
  { label: "Products", icon: Package, active: false },
  { label: "Orders", icon: ShoppingCart, active: false },
  { label: "Customers", icon: Users, active: false },
  { label: "Inventory", icon: Boxes, active: false },
  { label: "Payments", icon: CreditCard, active: false },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white  p-5 flex flex-col">
      <h1 className="text-xl font-bold text-orange-600 mb-8">E-Cart</h1>

      <nav className="space-y-1">
        {menu.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3 w-full px-3 py-2 hover:text-orange-600 rounded-lg text-sm font-medium ${
              active
                ? "bg-orange-50 text-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto bg-indigo-50 p-4 rounded-xl text-sm">
        <p className="font-medium text-black">Need help?</p>
        <p className="text-gray-500 mb-3">
          Check our docs for quick answers
        </p>
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-2 rounded-lg">
          View Documentation
        </button>
      </div>
    </aside>
  );
}