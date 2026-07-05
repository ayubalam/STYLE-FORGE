import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// ==========================================
// Register User
// POST /api/auth/register
// ==========================================
export const registerUser = async (req, res) => {
  try {
    console.log("STEP 1 - Request Received");

    const { name, email, password, role } = req.body;

    console.log("STEP 2 - Data Extracted");

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    console.log("STEP 3 - Checking Existing User");

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    console.log("STEP 4 - Creating User");

    const user = new User({
      name,
      email,
      password,
      role: role || "user",
    });

    console.log("STEP 5 - Saving User");

    await user.save();

    console.log("STEP 6 - User Saved");

    const token = generateToken(user._id);

    console.log("STEP 7 - Token Generated");

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("====================================");
    console.log("REGISTER ERROR");
    console.error(error);
    console.error(error.stack);
    console.log("====================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Login User
// POST /api/auth/login
// ==========================================
export const loginUser = async (req, res) => {
  try {
    console.log("LOGIN STEP 1");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    console.log("LOGIN STEP 2");

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("LOGIN STEP 3");

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("LOGIN STEP 4");

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("====================================");
    console.log("LOGIN ERROR");
    console.error(error);
    console.error(error.stack);
    console.log("====================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Make Admin
// PUT /api/auth/make-admin/:email
// ==========================================
export const makeAdmin = async (req, res) => {
  try {
    console.log("MAKE ADMIN STEP 1");

    const user = await User.findOne({
      email: req.params.email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("MAKE ADMIN STEP 2");

    user.role = "admin";

    await user.save();

    console.log("MAKE ADMIN STEP 3");

    return res.status(200).json({
      success: true,
      message: `${user.email} is now an Admin`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("====================================");
    console.log("MAKE ADMIN ERROR");
    console.error(error);
    console.error(error.stack);
    console.log("====================================");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};