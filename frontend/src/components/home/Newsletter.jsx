function Newsletter() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Be the first to know about new arrivals, exclusive offers,
          and fashion trends.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-5 py-4 rounded-lg text-black outline-none"
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-lg font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;