import { useNavigate } from "react-router-dom";

import useCart from "../../hooks/useCart";
import useOrders from "../../hooks/useOrders";

function OrderSummary() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const { addOrder } = useOrders();

  const shipping = 0;
  const tax = totalPrice * 0.18;
  const total = totalPrice + tax + shipping;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    addOrder({
      items: cartItems.length,
      total,
      products: cartItems,
    });

    clearCart();

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
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
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;