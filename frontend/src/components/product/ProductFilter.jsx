function ProductFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
    >
      <option value="All">All Categories</option>
      <option value="Hoodies">Hoodies</option>
      <option value="Shoes">Shoes</option>
      <option value="Jeans">Jeans</option>
      <option value="Jackets">Jackets</option>
    </select>
  );
}

export default ProductFilter;