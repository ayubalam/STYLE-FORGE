import { NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

function NavIcons() {
  return (
    <div className="flex items-center gap-5 text-2xl text-white">
      <NavLink to="/wishlist" className="hover:text-pink-500 transition">
        <FiHeart />
      </NavLink>

      <NavLink
        to="/cart"
        className="relative hover:text-pink-500 transition"
      >
        <FiShoppingCart />

        <span className="absolute -top-2 -right-2 bg-pink-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      </NavLink>

      <NavLink to="/login" className="hover:text-pink-500 transition">
        <FiUser />
      </NavLink>
    </div>
  );
}

export default NavIcons;