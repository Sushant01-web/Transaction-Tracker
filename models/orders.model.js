/* -------------------------------------
Validation and schemas for the Order
--------------------------------------- */
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  status: { type: String, default: "created" },
  fulfillmentId: String
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);