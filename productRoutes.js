import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
  const prod = await Product.findById(req.params.id);
  res.json(prod);
});

// POST new product
router.post("/", async (req, res) => {
  const newProd = new Product(req.body);
  const saved = await newProd.save();
  res.status(201).json(saved);
});

// PUT update product
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
