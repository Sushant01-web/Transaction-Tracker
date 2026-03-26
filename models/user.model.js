/*--------------------------------------
Validation and schemas for the Users
----------------------------------------- */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ["admin", "client"], default: "client" }
});

module.exports = mongoose.model("User", userSchema);