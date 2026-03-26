/* Creating a route to handle remaining balance of wallet */
const express = require("express");
const router = express.Router();
const { getBalance } = require("../controllers/wallet.controller");

router.get("/balance", getBalance);

module.exports = router;