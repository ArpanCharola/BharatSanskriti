import express from "express";
import Festival from "../models/Festival.js";
import Tradition from "../models/Tradition.js";
import Heritage from "../models/Heritage.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.json([]);

    const regex = new RegExp(q, "i"); // case-insensitive search

    const festivals = await Festival.find({ name: regex }).limit(5).lean();
    const traditions = await Tradition.find({ name: regex }).limit(5).lean();
    const heritages = await Heritage.find({ name: regex }).limit(5).lean();

    const results = [
      ...festivals.map((f) => ({ ...f, type: "festival" })),
      ...traditions.map((t) => ({ ...t, type: "tradition" })),
      ...heritages.map((h) => ({ ...h, type: "heritage" })),
    ];

    res.json(results);
  } catch (err) {
    console.error("❌ Search error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;