import express from "express";

import {
  registerUser,
  loginUser,
  makeAdmin,
} from "../controllers/authController.js";

const router = express.Router();

// =========================
// Authentication Routes
// =========================

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/make-admin/:email", makeAdmin);

export default router;