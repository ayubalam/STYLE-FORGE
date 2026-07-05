import {
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiPackage,
} from "react-icons/fi";

function StatsCard({ title, value, type }) {
  const icons = {
    revenue: <FiDollarSign size={28} />,
    users: <FiUsers size={28} />,
    orders: <FiShoppingBag size={28} />,
    products: <FiPackage size={28} />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="bg-pink-100 text-pink-500 p-4 rounded-xl">
          {icons[type]}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;