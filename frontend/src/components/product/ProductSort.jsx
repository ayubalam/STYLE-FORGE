function ProductSort({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
    >
      <option value="default">Sort By</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="name">Name (A-Z)</option>
    </select>
  );
}

export default ProductSort;