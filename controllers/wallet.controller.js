/* This code is for wallet which track the balance in wallet */
const Wallet = require("../models/wallet.model")

exports.getBalance = async (req, res) => {
  const clientId = req.headers["client-id"];

  const wallet = await Wallet.findOne({ client: clientId });

  res.json({
    balance: wallet ? wallet.balance : 0
  });
};