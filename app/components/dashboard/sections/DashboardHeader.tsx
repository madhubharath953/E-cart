"use client";


import { Calendar, Download } from "lucide-react";

export default function DashboardHeader() {

  return (
    <div className="flex bg-orange-50 flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h2>
        <p className="text-gray-500 mt-1">
          Welcome back, Siva! Here&apos;s what&apos;s happening with your store.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          <Calendar size={16} />
          Dec 1 – Dec 20, 2024
        </button>

        <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
          <Download size={16} />
          Download Report
        </button>
      </div>
    </div>
  );
}