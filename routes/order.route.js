/* Creating a route to handle orders of users */

const express = require("express");
const router = express.Router();
const { createOrder, getOrder } = require("../controllers/order.controller");

router.post("/", createOrder);
router.get("/:order_id", getOrder);

module.exports = router;