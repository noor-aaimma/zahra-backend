import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  customer: {
    name: String,
    phone: String,
    address: String,
  },
  paymentMethod: {
    type: String,
    enum: ["easypaisa", "jazzcash", "card"],
  },
  total: Number,
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
