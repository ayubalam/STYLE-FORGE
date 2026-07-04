import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiEye,
  FiStar,
} from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Product Image */}
      <Link to={`/products/${product.slug}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
          />

          <button
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition"
            onClick={(e) => e.preventDefault()}
          >
            <FiHeart />
          </button>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <Link to={`/products/${product.slug}`}>
          <h3 className="text-xl font-semibold mt-2 hover:text-pink-500 transition">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-2">
          <FiStar className="text-yellow-500 fill-yellow-500" />
          <span>{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-pink-500">
            ${product.price}
          </span>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-pink-500 transition">
            <span className="flex items-center justify-center gap-2">
              <FiShoppingCart />
              Add
            </span>
          </button>

          <Link
            to={`/products/${product.slug}`}
            className="p-3 border rounded-lg hover:bg-gray-100 transition"
          >
            <FiEye />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;