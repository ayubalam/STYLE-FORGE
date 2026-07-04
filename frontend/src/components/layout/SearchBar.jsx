import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="hidden lg:flex items-center w-96 bg-white rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 outline-none text-gray-700"
      />

      <button className="px-4 text-xl text-gray-700 hover:text-pink-500 transition">
        <FiSearch />
      </button>
    </div>
  );
}

export default SearchBar;