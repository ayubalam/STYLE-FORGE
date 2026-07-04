import useCart from "../../hooks/useCart";

import ShippingForm from "../../components/checkout/ShippingForm";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderSummary from "../../components/checkout/OrderSummary";
import CheckoutItem from "../../components/checkout/CheckoutItem";

function Checkout() {
  const { cartItems } = useCart();

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping */}
            <ShippingForm />

            {/* Payment */}
            <PaymentMethod />

            {/* Order Review */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Order Review
              </h2>

              <div className="space-y-5">
                {cartItems.map((item) => (
                  <CheckoutItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;