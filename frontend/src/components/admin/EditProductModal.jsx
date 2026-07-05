import { useState } from "react";
import useProducts from "../../hooks/useProducts";

function EditProductModal({
  isOpen,
  onClose,
  selectedProduct,
}) {
  const { updateProduct } = useProducts();

  const [product, setProduct] = useState(selectedProduct || {});

  // Sync state only when opening the modal
  if (
    isOpen &&
    selectedProduct &&
    product.id !== selectedProduct.id
  ) {
    setProduct(selectedProduct);
  }

  if (!isOpen || !selectedProduct) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(product);

    alert("Product Updated Successfully!");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="category"
            value={product.category || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="price"
            value={product.price || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="stock"
            value={product.stock || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="image"
            value={product.image || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="4"
            name="description"
            value={product.description || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;