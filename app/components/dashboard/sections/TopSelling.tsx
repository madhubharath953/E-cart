const topProducts = [
  {
    name: "MacBook Pro",
    category: "Laptops",
    revenue: "₹3.08M",
    growth: "+12.5%",
  },
  {
    name: "iPhone 15 Pro",
    category: "Smartphones",
    revenue: "₹2.58M",
    growth: "+8.3%",
  },
  {
    name: "AirPods Pro",
    category: "Audio",
    revenue: "₹972K",
    growth: "+23.1%",
  },
  {
    name: "Apple Watch",
    category: "Wearables",
    revenue: "₹713K",
    growth: "+5.7%",
  },
];

export default function TopSelling() {
  return (
    <div className="bg-white rounded-xl b m-10 shadow-sm ">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <h2 className="text-lg font-semibold">Top Products</h2>
          <p className="text-sm text-gray-500">Best selling this month</p>
        </div>
        <button className="text-sm text-orange-600 hover:underline">
          View all
        </button>
      </div>

      {/* Product List */}
      <div className="p-6 space-y-5">
        {topProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{product.revenue}</p>
              <p className="text-sm text-green-600">{product.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}