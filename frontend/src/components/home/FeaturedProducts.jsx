const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: "$59",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
  },
  {
    id: 2,
    name: "Premium White Sneakers",
    price: "$89",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: "$69",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
  },
  {
    id: 4,
    name: "Casual Jacket",
    price: "$99",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
  },
];

function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Handpicked products specially selected for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-pink-500 font-bold mt-2">
                  {product.price}
                </p>

                <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-pink-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;