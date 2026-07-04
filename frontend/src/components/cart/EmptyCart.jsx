import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="text-center py-24">
      <h2 className="text-4xl font-bold">
        Your Cart is Empty
      </h2>

      <p className="text-gray-500 mt-4">
        Looks like you haven't added anything yet.
      </p>

      <Link
        to="/products"
        className="inline-block mt-8 bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;