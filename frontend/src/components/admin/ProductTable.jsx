import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import useProducts from "../../hooks/useProducts";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

function ProductTable() {
  const { products, deleteProduct } = useProducts();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      deleteProduct(id);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Products
          </h2>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg transition"
          >
            + Add Product
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Image</th>
              <th className="text-left py-3">Name</th>
              <th className="text-center">Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Stock</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </td>

                <td>{product.name}</td>

                <td className="text-center">
                  {product.category}
                </td>

                <td className="text-center">
                  ${product.price}
                </td>

                <td className="text-center">
                  {product.stock}
                </td>

                <td>
                  <div className="flex justify-center gap-4">

                    {/* Edit */}
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={20} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </>
  );
}

export default ProductTable;