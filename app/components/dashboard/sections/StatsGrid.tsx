import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";
import StatCard from "../sections/StatCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <StatCard
        title="Total Revenue"
        value="₹284,392"
        change="+12.5%"
        positive
        icon={<DollarSign />}
      />
      <StatCard
        title="Total Orders"
        value="1,084"
        change="+8.2%"
        positive
        icon={<ShoppingCart />}
      />
      <StatCard
        title="Total Customers"
        value="12,847"
        change="+23.1%"
        positive
        icon={<Users />}
      />
      <StatCard
        title="Conversion Rate"
        value="3.24%"
        change="-0.4%"
        positive={false}
        icon={<TrendingUp />}
      />
    </div>
  );
}