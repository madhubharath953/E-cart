import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  positive,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl text-gray-900 font-bold mt-1">{value}</p>
        <p
          className={`text-sm mt-2 ${
            positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {change} vs last month
        </p>
      </div>

      <div className="h-10 w-10 bg-orange-600 text-white rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}