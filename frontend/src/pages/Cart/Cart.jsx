import useCart from "../../hooks/useCart";

import CartList from "../../components/cart/CartList";
import EmptyCart from "../../components/cart/EmptyCart";
import CartSummary from "../../components/cart/CartSummary";

function Cart() {
  const { cartItems } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <CartList cartItems={cartItems} />
          </div>

          {/* Right Side */}
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;