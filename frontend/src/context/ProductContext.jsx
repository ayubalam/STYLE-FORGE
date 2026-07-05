import {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  getProducts,
  addProduct as apiAddProduct,
  updateProduct as apiUpdateProduct,
  deleteProduct as apiDeleteProduct,
} from "../api/productApi";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Products
  // ==========================
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getProducts();

      setProducts(response.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // ==========================
  // Load Products on Mount
  // ==========================
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ==========================
  // Add Product
  // ==========================
  const addProduct = async (productData, token) => {
    try {
      await apiAddProduct(productData, token);

      await fetchProducts();

      return true;
    } catch (error) {
      console.error("Add Product Error:", error);
      return false;
    }
  };

  // ==========================
  // Update Product
  // ==========================
  const updateProduct = async (
    id,
    productData,
    token
  ) => {
    try {
      await apiUpdateProduct(
        id,
        productData,
        token
      );

      await fetchProducts();

      return true;
    } catch (error) {
      console.error("Update Product Error:", error);
      return false;
    }
  };

  // ==========================
  // Delete Product
  // ==========================
  const deleteProduct = async (
    id,
    token
  ) => {
    try {
      await apiDeleteProduct(id, token);

      await fetchProducts();

      return true;
    } catch (error) {
      console.error("Delete Product Error:", error);
      return false;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}