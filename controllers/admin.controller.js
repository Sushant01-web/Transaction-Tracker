/* In This file Admin is able to credit balance to client AC */

const Wallet = require("../models/wallet.model")
const Transaction = require("../models/transaction.model")


/* Credit Money to wallet */
exports.creditWallet = async (req, res) => {
  const { client_id, amount } = req.body;

  let wallet = await Wallet.findOne({ client: client_id });

  if (!wallet) {
    wallet = await Wallet.create({ client: client_id, balance: 0 });
  }

  wallet.balance += amount;
  await wallet.save();

  await Transaction.create({
    client: client_id,
    type: "credit",
    amount
  });

  res.json({ message: "Wallet credited", balance: wallet.balance });
};


/* Debit Money from wallet based on client id*/
exports.debitWallet = async (req, res) => {
  const { client_id, amount } = req.body;

  const wallet = await Wallet.findOne({ client: client_id });

  if (!wallet || wallet.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  wallet.balance -= amount;
  await wallet.save();

  await Transaction.create({
    client: client_id,
    type: "debit",
    amount
  });

  res.json({ message: "Wallet debited", balance: wallet.balance });
};