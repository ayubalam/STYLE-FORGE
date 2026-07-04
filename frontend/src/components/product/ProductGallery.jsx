function ProductGallery({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}

export default ProductGallery;