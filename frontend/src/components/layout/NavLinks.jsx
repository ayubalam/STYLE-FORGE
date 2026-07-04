import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Cart", path: "/cart" },
];

function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-pink-500"
                : "text-white hover:text-pink-500"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;