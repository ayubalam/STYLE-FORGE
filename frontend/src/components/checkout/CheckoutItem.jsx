function CheckoutItem({ item }) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">
          {item.name}
        </h3>

        <p className="text-gray-500">
          {item.category}
        </p>

        <p className="text-sm text-gray-500">
          Quantity: {item.quantity}
        </p>
      </div>

      <div className="text-right">
        <p className="font-bold text-pink-500 text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CheckoutItem;