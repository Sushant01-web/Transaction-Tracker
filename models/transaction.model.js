/* --------------------------------------
Validation and schemas for the transaction
------------------------------------------- */
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["credit", "debit"] },
  amount: Number
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);