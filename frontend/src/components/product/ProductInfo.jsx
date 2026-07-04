import { FiHeart, FiShoppingCart } from "react-icons/fi";
import QuantitySelector from "./QuantitySelector";
import useCart from "../../hooks/useCart";

function ProductInfo({
  product,
  quantity,
  setQuantity,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });

    alert("Product added to cart!");
  };

  return (
    <div>
      <p className="text-pink-500 font-semibold">
        {product.brand}
      </p>

      <h1 className="text-5xl font-bold mt-2">
        {product.name}
      </h1>

      <p className="text-yellow-500 mt-4">
        ⭐ {product.rating} ({product.reviews} Reviews)
      </p>

      <div className="flex items-center gap-4 mt-5">
        <span className="text-4xl font-bold text-pink-500">
          ${product.price}
        </span>

        <span className="text-gray-400 line-through text-xl">
          ${product.originalPrice}
        </span>
      </div>

      <p className="text-gray-600 mt-6 leading-8">
        {product.description}
      </p>

      {/* Sizes */}
      <div className="mt-8">
        <h3 className="font-semibold mb-3">
          Available Sizes
        </h3>

        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mt-8">
        <h3 className="font-semibold mb-3">
          Colors
        </h3>

        <div className="flex gap-3 flex-wrap">
          {product.colors.map((color) => (
            <span
              key={color}
              className="border px-4 py-2 rounded-lg"
            >
              {color}
            </span>
          ))}
        </div>
      </div>

      <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
        stock={product.stock}
      />

      <div className="flex gap-4 mt-10">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-pink-500 transition flex items-center justify-center gap-2"
        >
          <FiShoppingCart />
          Add to Cart
        </button>

        <button className="border px-5 rounded-lg hover:bg-pink-500 hover:text-white transition">
          <FiHeart size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;