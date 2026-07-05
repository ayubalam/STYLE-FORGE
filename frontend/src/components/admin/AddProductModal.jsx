import { useState } from "react";
import useProducts from "../../hooks/useProducts";

function AddProductModal({ isOpen, onClose }) {
  const { addProduct } = useProducts();

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("styleforge-token");

      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("stock", product.stock);
      formData.append("description", product.description);
      formData.append("brand", "STYLE-FORGE");
      formData.append("originalPrice", product.price);

      formData.append("sizes", JSON.stringify([]));
      formData.append("colors", JSON.stringify([]));

      if (image) {
        formData.append("image", image);
      }

      await addProduct(formData, token);

      alert("Product Added Successfully!");

      setProduct({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
      });

      setImage(null);
      setPreview("");

      onClose();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to add product."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        <h2 className="text-3xl font-bold mb-6">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Product Name */}
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Description */}
          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2">
              Product Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg p-3"
              required
            />

            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-48 rounded-lg border object-cover"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
            >
              {loading ? "Saving..." : "Save Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddProductModal;