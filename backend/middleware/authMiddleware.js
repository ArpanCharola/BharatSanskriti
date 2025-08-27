// backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";

// 🔹 Verify JWT Token
export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user payload { id, role } to request
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// 🔹 Check if user is Admin
export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};