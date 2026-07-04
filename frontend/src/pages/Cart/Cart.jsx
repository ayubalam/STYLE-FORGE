import useCart from "../../hooks/useCart";

function Cart() {
  const { cartItems } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-4">
            Add some products to your cart.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-xl shadow-md p-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.category}
                </p>

                <p className="text-pink-500 text-2xl font-bold mt-3">
                  ${item.price}
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;