const categories = [
  {
    id: 1,
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
  },
  {
    id: 3,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 4,
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
  },
];

function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">
          Shop By Category
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Find your perfect style from our premium collections.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;