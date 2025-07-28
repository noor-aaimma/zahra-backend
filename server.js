import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ Root route for testing (Railway, etc.)
app.get("/", (req, res) => {
  res.send("ZahraStore backend running...");
});

// ✅ API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ✅ MongoDB Connection and Server Start
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
