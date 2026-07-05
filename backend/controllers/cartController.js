import Cart from "../models/Cart.js";

// ===============================
// Get User Cart
// ===============================
export const getCart = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Get Cart API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Add to Cart
// ===============================
export const addToCart = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Add To Cart API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update Quantity
// ===============================
export const updateCart = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Update Cart API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Remove Item
// ===============================
export const removeFromCart = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Remove Item API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Clear Cart
// ===============================
export const clearCart = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Clear Cart API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};