import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardHeader from "../components/dashboard/sections/DashboardHeader";
import StatsGrid from "../components/dashboard/sections/StatsGrid";
import SalesChart from "../components/dashboard/sections/SalesChart";
import OrderStatusCard from "../components/dashboard/sections/OrderStatusCard";
import RecentOrders from "../components/dashboard/sections/RecentOrders";
import TopSelling from "../components/dashboard/sections/TopSelling";

export default function Dashboard() {
    return (
        <div className="bg-orange-50">
        <DashboardLayout>
            <DashboardHeader />
            <StatsGrid />


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <SalesChart />
                </div>
                <OrderStatusCard />            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentOrders />
                </div>
                <TopSelling />
            </div>
       </DashboardLayout>
       </div>
    );
}