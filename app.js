/* Creating a express app on which our API --> endpoint will work */

const express = require("express");
const app = express();

app.use(express.json());

app.use("/admin", require("./routes/admin.route"));
app.use("/orders", require("./routes/order.route"));
app.use("/wallet", require("./routes/wallet.route"));

module.exports = app;