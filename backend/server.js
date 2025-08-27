import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import traditionRoutes from "./routes/tRoutes.js"; 
import heritageRoutes from "./routes/heritageRoutes.js";
import festivalRoutes from "./routes/festivalRoutes.js"; // ✅ Import festival routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

// Load environment variables
dotenv.config({ path: "./.env" }); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/search", searchRoutes);

// ✅ Debug check: see if MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Check your .env file.");
  process.exit(1); // Stop server if missing
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/traditions", traditionRoutes);
app.use("/api/heritages", heritageRoutes);
app.use("/api/festivals", festivalRoutes); // ✅ Use festival routes

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));