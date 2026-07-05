import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

function FeaturedProducts() {
  const { products, loading } = useProducts();

  // Show only first 4 products
  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return (
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

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
          {featuredProducts.map((product) => (
            <div
              key={product._id || product.id}
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
                  ${product.price}
                </p>

                <Link
                  to={`/products/${product.slug}`}
                  className="block mt-5 w-full text-center bg-black text-white py-3 rounded-lg hover:bg-pink-500 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;