/* ----------------------------------------
This file contains database connection
------------------------------------------ */
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("Your DB Url");
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;