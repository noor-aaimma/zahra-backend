import express from "express";
import Order from "../models/Order.js";
const router = express.Router();

// POST new order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

// GET all orders (admin)
router.get("/", async (req, res) => {
  const all = await Order.find().sort({ createdAt: -1 });
  res.json(all);
});

export default router;
