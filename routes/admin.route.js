/* Creating a route Credit and debit of money from wallet */

const express = require("express");
const router = express.Router();
const { creditWallet, debitWallet } = require("../controllers/admin.controller")

router.post("/wallet/credit", creditWallet);
router.post("/wallet/debit", debitWallet);

module.exports = router;