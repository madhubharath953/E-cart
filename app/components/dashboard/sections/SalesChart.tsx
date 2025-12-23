export default function SalesChart() {
  return (
    <div className="bg-white  rounded-xl p-6 shadow-sm h-full">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Sales Analytics</h3>
          <p className="text-sm text-gray-600">Revenue & order trends</p>
        </div>

        <div className="flex gap-2 bg-gray-200 text-gray-700 rounded-lg text-sm">
          <button className="px-3 py-1 rounded-lg">Daily</button>
          <button className="px-3 py-1 rounded-lg">Weekly</button>
          <button className="px-3 py-1 rounded-lg">Monthly</button>
        </div>
      </div>

      <div className="h-56 rounded-lg bg-gradient-to-t from-indigo-50 to-transparent flex items-center justify-center text-gray-400">
        Chart Placeholder
      </div>
    </div>
  );
}