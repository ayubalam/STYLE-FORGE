import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";

import OrderStatus from "./OrderStatus";

function OrderCard({ order }) {
  const firstProduct = order.products?.[0];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}
        <div className="flex gap-6">
          <img
            src={firstProduct?.image}
            alt={firstProduct?.name}
            className="w-28 h-28 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {firstProduct?.name}
            </h2>

            <p className="text-gray-500 mt-1">
              {firstProduct?.category}
            </p>

            <p className="mt-3">
              Qty :
              <span className="font-semibold ml-2">
                {firstProduct?.quantity}
              </span>
            </p>

            <p className="text-pink-500 text-2xl font-bold mt-3">
              ${firstProduct?.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="text-right space-y-4">
          <OrderStatus status={order.status} />

          <div>
            <p className="text-gray-500">
              Order ID
            </p>

            <h3 className="font-semibold">
              #{order.id}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Date
            </p>

            <h3>{order.date}</h3>
          </div>

          <div>
            <p className="text-gray-500">
              Total
            </p>

            <h2 className="text-3xl font-bold text-pink-500">
              ${order.total.toFixed(2)}
            </h2>
          </div>

          {/* View Details */}
          <Link
            to={`/orders/${order.id}`}
            className="inline-flex items-center gap-2 bg-black hover:bg-pink-500 text-white px-6 py-3 rounded-lg transition"
          >
            <FiEye />
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OrderCard;