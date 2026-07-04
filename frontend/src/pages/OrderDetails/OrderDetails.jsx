import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import useOrders from "../../hooks/useOrders";

import OrderProduct from "../../components/orders/OrderProduct";
import ShippingDetails from "../../components/orders/ShippingDetails";
import PaymentDetails from "../../components/orders/PaymentDetails";
import OrderTimeline from "../../components/orders/OrderTimeline";

function OrderDetails() {
  const { id } = useParams();
  const { orders } = useOrders();

  // Find the selected order
  const order = orders.find(
    (item) => item.id.toString() === id
  );

  if (!order) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Order Not Found
          </h2>

          <Link
            to="/orders"
            className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Back to Orders
          </Link>
        </div>
      </section>
    );
  }

  const tax = order.total * 0.18;
  const subtotal = order.total - tax;

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/orders"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"
        >
          <FiArrowLeft />
          Back to Orders
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h1 className="text-4xl font-bold">
            Order #{order.id}
          </h1>

          <p className="text-gray-500 mt-2">
            {order.date}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2 space-y-8">

            {/* Products */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Ordered Products
              </h2>

              <div className="space-y-5">
                {order.products.map((product) => (
                  <OrderProduct
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>

            <ShippingDetails />

            <PaymentDetails />

          </div>

          {/* Right */}
          <div className="space-y-8">

            <OrderTimeline status={order.status} />

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span className="text-pink-500">
                    ${order.total.toFixed(2)}
                  </span>
                </div>

                <button className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
                  Download Invoice
                </button>

                <button className="w-full border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                  Cancel Order
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderDetails;