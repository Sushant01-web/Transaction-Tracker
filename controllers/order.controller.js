/* In this client can order and with respect to this we can fetch that created order using
CRUD operation -->> i.e Most important topic in DATABASE */


const Wallet = require("../models/wallet.model")
const Order = require("../models/orders.model")
const callFulfillmentAPI = require("../utils/fulfillmentService")


/* Creating order as per client id */
exports.createOrder = async (req, res) => {
  const clientId = req.headers["client-id"];
  const { amount } = req.body;

  const wallet = await Wallet.findOne({ client: clientId });

  if (!wallet || wallet.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  // Deduct balance
  wallet.balance -= amount;
  await wallet.save();

  // Create order
  const order = await Order.create({
    client: clientId,
    amount
  });

  // Call fulfillment API
  const fulfillmentId = await callFulfillmentAPI(clientId, order._id);

  order.fulfillmentId = fulfillmentId;
  await order.save();

  res.json(order);
};


/* Finding the created order of user */
exports.getOrder = async (req, res) => {
  const clientId = req.headers["client-id"];
  const { order_id } = req.params;

  const order = await Order.findOne({
    _id: order_id,
    client: clientId
  });

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
};