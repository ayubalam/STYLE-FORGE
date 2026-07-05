import { useMemo, useState, useEffect } from "react";

import useProducts from "../../hooks/useProducts";

import ProductCard from "../../components/product/ProductCard";
import ProductSearch from "../../components/product/ProductSearch";
import ProductFilter from "../../components/product/ProductFilter";
import ProductSort from "../../components/product/ProductSort";
import Pagination from "../../components/product/Pagination";

function Products() {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // Reset page whenever search/filter/sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  // ==========================
  // Filter & Sort Products
  // ==========================
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category Filter
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Sorting
    switch (sort) {
      case "low-high":
        filtered.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        break;

      case "high-low":
        filtered.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        break;

      case "name":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [products, search, category, sort]);

  // ==========================
  // Pagination
  // ==========================
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Loading Products...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="text-gray-500 mt-2">
            Browse our premium fashion collection.
          </p>
        </div>

        {/* Search, Filter & Sort */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">

          <ProductSearch
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-wrap gap-4">
            <ProductFilter
              category={category}
              setCategory={setCategory}
            />

            <ProductSort
              sort={sort}
              setSort={setSort}
            />
          </div>

        </div>

        {/* Products */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {displayedProducts.map((product) => (
                <ProductCard
                  key={product._id || product.id}
                  product={product}
                />
              ))}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try another search or category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;