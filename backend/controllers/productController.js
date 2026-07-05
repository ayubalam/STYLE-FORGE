import Product from "../models/Product.js";

// ===============================
// GET ALL PRODUCTS
// ===============================
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// GET SINGLE PRODUCT
// ===============================
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// CREATE PRODUCT
// ===============================
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      category,
      description,
      price,
      originalPrice,
      stock,
      sizes,
      colors,
    } = req.body;

    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const existing = await Product.findOne({ slug });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Product already exists",
      });
    }

    // Image uploaded by Multer + Cloudinary
    const image = req.file ? req.file.path : "";

    const product = await Product.create({
      name,
      slug,
      brand: brand || "STYLE-FORGE",
      category,
      description,
      price: Number(price),
      originalPrice: Number(originalPrice) || Number(price),
      stock: Number(stock),
      image,
      sizes: sizes ? JSON.parse(sizes) : [],
      colors: colors ? JSON.parse(colors) : [],
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// UPDATE PRODUCT
// ===============================
export const updateProduct = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    // If new image uploaded
    if (req.file) {
      updateData.image = req.file.path;
    }

    if (updateData.price) {
      updateData.price = Number(updateData.price);
    }

    if (updateData.originalPrice) {
      updateData.originalPrice = Number(updateData.originalPrice);
    }

    if (updateData.stock) {
      updateData.stock = Number(updateData.stock);
    }

    if (updateData.sizes) {
      updateData.sizes = JSON.parse(updateData.sizes);
    }

    if (updateData.colors) {
      updateData.colors = JSON.parse(updateData.colors);
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// DELETE PRODUCT
// ===============================
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};