/* In this file i am posting temporary user's data */

const axios = require("axios");

const callFulfillmentAPI = async (clientId, orderId) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      userId: clientId,
      title: orderId
    }
  );

  return res.data.id;
};

module.exports = callFulfillmentAPI;