const orders = [
  {
    id: "#ORD-7891",
    customer: "Sarah Johnson",
    email: "sarah@email.com",
    product: "MacBook Pro 14",
    amount: "₹2,499.00",
    status: "Delivered",
  },
  {
    id: "#ORD-7890",
    customer: "Michael Chen",
    email: "michael@email.com",
    product: "iPhone 15 Pro Max",
    amount: "₹1,199.00",
    status: "Shipped",
  },
  {
    id: "#ORD-7889",
    customer: "Emily Davis",
    email: "emily@email.com",
    product: "AirPods Pro",
    amount: "₹249.00",
    status: "Pending",
  },
  {
    id: "#ORD-7888",
    customer: "James Wilson",
    email: "james@email.com",
    product: "iPad Air",
    amount: "₹799.00",
    status: "Delivered",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-sm m-10">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <p className="text-sm text-gray-500">Latest customer orders</p>
        </div>
        <button className="text-sm text-orange-600 hover:underline">
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 uppercase text-xs border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 font-semibold">{order.id}</td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.email}</p>
                </td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4 font-semibold">{order.amount}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Status Badge Component */
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}