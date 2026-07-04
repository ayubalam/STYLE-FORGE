import { FiTrash2 } from "react-icons/fi";
import useCart from "../../hooks/useCart";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-36 h-36 rounded-xl object-cover"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">
          {item.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {item.category}
        </p>

        <p className="text-pink-500 text-3xl font-bold mt-3">
          ${item.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-10 h-10 rounded-lg border hover:bg-pink-500 hover:text-white transition"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="w-10 h-10 rounded-lg border hover:bg-pink-500 hover:text-white transition"
        >
          +
        </button>

      </div>

      {/* Total Price */}
      <div className="text-right">

        <p className="text-2xl font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 mt-4 hover:text-red-700 transition"
        >
          <FiTrash2 size={24} />
        </button>

      </div>

    </div>
  );
}

export default CartItem;