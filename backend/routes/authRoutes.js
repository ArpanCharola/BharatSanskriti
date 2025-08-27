// backend/routes/authRoutes.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/authMiddleware.js"; // ✅ Import isAdmin

const router = express.Router();

// 🔹 Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Protected route → Profile
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Admin-only route
router.get("/admin/dashboard", verifyToken, isAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin 🚀",
    user: req.user,
  });
});

// 🔹 Seed Admins (Temporary Route)
router.post("/seed-admins", async (req, res) => {
  try {
    const admins = [
      { username: "arpan_admin", email: "arpan.admin@gmail.com", password: "arpan123", role: "admin" },
      { username: "krish_admin", email: "krish.admin@gmail.com", password: "krish123", role: "admin" }
    ];

    for (let a of admins) {
      const exists = await User.findOne({ email: a.email });
      if (!exists) {
        const salt = await bcrypt.genSalt(10);
        a.password = await bcrypt.hash(a.password, salt);
        await User.create(a);
      }
    }

    res.json({ message: "✅ Admins seeded successfully" });
  } catch (err) {
    console.error("❌ Seed admin error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Example Admin-only route
router.get("/admin/dashboard", verifyToken, isAdmin, (req, res) => {
    res.json({ message: "✅ Welcome Admin 🚀", user: req.user });
  });
  

export default router;