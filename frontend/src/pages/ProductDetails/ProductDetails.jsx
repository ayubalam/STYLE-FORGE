import { useState } from "react";
import { useParams } from "react-router-dom";

import useProducts from "../../hooks/useProducts";

import Breadcrumb from "../../components/product/Breadcrumb";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";

function ProductDetails() {
  const { slug } = useParams();

  const { products } = useProducts();

  const [quantity, setQuantity] = useState(1);

  // Find Product
  const product = products.find(
    (item) => item.slug === slug
  );

  // Product Not Found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <Breadcrumb productName={product.name} />

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <ProductGallery product={product} />

          <ProductInfo
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;