import { FiSearch } from "react-icons/fi";

function ProductSearch({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-96">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
    </div>
  );
}

export default ProductSearch;