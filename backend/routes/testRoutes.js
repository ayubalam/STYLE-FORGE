import express from "express";
import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Logged-in users
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route",
    user: req.user,
  });
});

// Admin only
router.get(
  "/admin",
  protect,
  adminOnly,
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
      user: req.user,
    });
  }
);

export default router;