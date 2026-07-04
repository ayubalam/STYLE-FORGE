import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Elevate Your
            <span className="block text-pink-500">Style Today</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Discover premium fashion designed for the modern man.
            Experience comfort, confidence, and timeless style with
            STYLE-FORGE's latest collection.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 shadow-lg">
              Shop Now
              <FaArrowRight />
            </button>

            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
              Explore Collection
            </button>
          </div>

          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-pink-500">10K+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-500">500+</h2>
              <p className="text-gray-600">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-500">4.9★</h2>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900"
            alt="Fashion Model"
            className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;