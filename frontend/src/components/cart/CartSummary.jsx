import useCart from "../../hooks/useCart";

function CartSummary() {
  const { totalPrice } = useCart();

  const shipping = totalPrice > 0 ? 0 : 0;
  const tax = totalPrice * 0.18;
  const grandTotal = totalPrice + shipping + tax;

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
          <span>${grandTotal.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
}

export default CartSummary;