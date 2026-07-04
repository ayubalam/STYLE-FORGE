function QuantitySelector({
  quantity,
  setQuantity,
  stock,
}) {
  return (
    <div className="flex items-center gap-4 mt-6">

      <button
        onClick={() =>
          quantity > 1 && setQuantity(quantity - 1)
        }
        className="w-10 h-10 rounded-lg border hover:bg-gray-100"
      >
        -
      </button>

      <span className="text-xl font-semibold">
        {quantity}
      </span>

      <button
        onClick={() =>
          quantity < stock &&
          setQuantity(quantity + 1)
        }
        className="w-10 h-10 rounded-lg border hover:bg-gray-100"
      >
        +
      </button>

    </div>
  );
}

export default QuantitySelector;