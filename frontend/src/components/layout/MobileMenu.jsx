import { FiMenu } from "react-icons/fi";

function MobileMenu() {
  return (
    <button className="md:hidden text-white text-3xl">
      <FiMenu />
    </button>
  );
}

export default MobileMenu;