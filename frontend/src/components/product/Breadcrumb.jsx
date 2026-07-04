import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

function Breadcrumb({ productName }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 py-6">
      <Link
        to="/"
        className="hover:text-pink-500 transition"
      >
        Home
      </Link>

      <FiChevronRight />

      <Link
        to="/products"
        className="hover:text-pink-500 transition"
      >
        Products
      </Link>

      <FiChevronRight />

      <span className="text-black font-semibold">
        {productName}
      </span>
    </nav>
  );
}

export default Breadcrumb;