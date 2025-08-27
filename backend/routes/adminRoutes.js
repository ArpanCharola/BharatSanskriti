import express from "express";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";
import Heritage from "../models/Heritage.js";
import Tradition from "../models/Tradition.js";
import Festival from "../models/Festival.js";
import User from "../models/User.js";

const router = express.Router();

/* -------------------- HERITAGE -------------------- */
router.post("/heritages", verifyToken, isAdmin, async (req, res) => {
  try {
    const heritage = new Heritage(req.body);
    await heritage.save();
    res.status(201).json({ message: "✅ Heritage added", heritage });
  } catch (err) {
    res.status(500).json({ message: "Error adding heritage", error: err.message });
  }
});

router.put("/heritages/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const heritage = await Heritage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!heritage) return res.status(404).json({ message: "Heritage not found" });
    res.json({ message: "✅ Heritage updated", heritage });
  } catch (err) {
    res.status(500).json({ message: "Error updating heritage", error: err.message });
  }
});

router.delete("/heritages/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const heritage = await Heritage.findByIdAndDelete(req.params.id);
    if (!heritage) return res.status(404).json({ message: "Heritage not found" });
    res.json({ message: "🗑️ Heritage deleted", heritage });
  } catch (err) {
    res.status(500).json({ message: "Error deleting heritage", error: err.message });
  }
});

/* -------------------- TRADITIONS -------------------- */
router.post("/traditions", verifyToken, isAdmin, async (req, res) => {
  try {
    const tradition = new Tradition(req.body);
    await tradition.save();
    res.status(201).json({ message: "✅ Tradition added", tradition });
  } catch (err) {
    res.status(500).json({ message: "Error adding tradition", error: err.message });
  }
});

router.put("/traditions/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const tradition = await Tradition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tradition) return res.status(404).json({ message: "Tradition not found" });
    res.json({ message: "✅ Tradition updated", tradition });
  } catch (err) {
    res.status(500).json({ message: "Error updating tradition", error: err.message });
  }
});

router.delete("/traditions/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const tradition = await Tradition.findByIdAndDelete(req.params.id);
    if (!tradition) return res.status(404).json({ message: "Tradition not found" });
    res.json({ message: "🗑️ Tradition deleted", tradition });
  } catch (err) {
    res.status(500).json({ message: "Error deleting tradition", error: err.message });
  }
});

/* -------------------- FESTIVALS -------------------- */
router.post("/festivals", verifyToken, isAdmin, async (req, res) => {
  try {
    const festival = new Festival(req.body);
    await festival.save();
    res.status(201).json({ message: "✅ Festival added", festival });
  } catch (err) {
    res.status(500).json({ message: "Error adding festival", error: err.message });
  }
});

router.put("/festivals/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const festival = await Festival.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!festival) return res.status(404).json({ message: "Festival not found" });
    res.json({ message: "✅ Festival updated", festival });
  } catch (err) {
    res.status(500).json({ message: "Error updating festival", error: err.message });
  }
});

router.delete("/festivals/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const festival = await Festival.findByIdAndDelete(req.params.id);
    if (!festival) return res.status(404).json({ message: "Festival not found" });
    res.json({ message: "🗑️ Festival deleted", festival });
  } catch (err) {
    res.status(500).json({ message: "Error deleting festival", error: err.message });
  }
});

/* -------------------- USERS (View Only) -------------------- */
router.get("/users", verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // don’t send passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

export default router;