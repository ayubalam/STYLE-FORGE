import { NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

import useCart from "../../hooks/useCart";

function NavIcons() {
  const { totalItems } = useCart();

  // Debug
  console.log("🛒 Navbar Total Items:", totalItems);

  return (
    <div className="flex items-center gap-5 text-2xl text-white">
      {/* Wishlist */}
      <NavLink
        to="/wishlist"
        className="hover:text-pink-500 transition"
      >
        <FiHeart />
      </NavLink>

      {/* Cart */}
      <NavLink
        to="/cart"
        className="relative hover:text-pink-500 transition"
      >
        <FiShoppingCart />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white font-semibold">
            {totalItems}
          </span>
        )}
      </NavLink>

      {/* User */}
      <NavLink
        to="/login"
        className="hover:text-pink-500 transition"
      >
        <FiUser />
      </NavLink>
    </div>
  );
}

export default NavIcons;