 function OrderProduct({ product }) {
  return (
    <div className="flex items-center gap-5 border-b pb-5">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="mt-2">
          Qty : {product.quantity}
        </p>
      </div>

      <h2 className="text-2xl font-bold text-pink-500">
        ${product.price}
      </h2>
    </div>
  );
}

export default OrderProduct;