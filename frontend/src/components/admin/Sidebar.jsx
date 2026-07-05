import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiLayers,
  FiBarChart2,
} from "react-icons/fi";

function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/admin",
    },
    {
      name: "Products",
      icon: <FiShoppingBag />,
      path: "/admin/products",
    },
    {
      name: "Orders",
      icon: <FiLayers />,
      path: "/admin/orders",
    },
    {
      name: "Users",
      icon: <FiUsers />,
      path: "/admin/users",
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
      path: "/admin/analytics",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-10">
        Admin
      </h2>

      <nav className="space-y-3">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-pink-500"
                  : "hover:bg-gray-800"
              }`
            }
          >
            {item.icon}

            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;