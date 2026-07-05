import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ==========================
// Get All Products
// ==========================
export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

// ==========================
// Get Single Product
// ==========================
export const getProduct = async (id) => {
  const response = await API.get(`/products/${id}`);
  return response.data;
};

// ==========================
// Add Product
// ==========================
export const addProduct = async (formData, token) => {
  const response = await API.post(
    "/products",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
// ==========================
// Update Product
// ==========================
export const updateProduct = async (
  id,
  productData,
  token
) => {
  const response = await API.put(
    `/products/${id}`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ==========================
// Delete Product
// ==========================
export const deleteProduct = async (
  id,
  token
) => {
  const response = await API.delete(
    `/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};