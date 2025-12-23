export default function OrderStatusCard() {
  const data = [
    { label: "Pending", value: 24, bg: "bg-yellow-50" },
    { label: "Shipped", value: 156, bg: "bg-blue-50" },
    { label: "Delivered", value: 892, bg: "bg-green-50" },
    { label: "Cancelled", value: 12, bg: "bg-red-50" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4 text-gray-900">Order Status</h3>
      <p className="text-sm text-gray-600 mb-4">current order distribution </p>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.label}
            className={`flex justify-between items-center p-4 rounded-lg ${item.bg}`}
          >
            <span className="font-medium text-gray-700">{item.label}</span>
            <span className="font-bold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}