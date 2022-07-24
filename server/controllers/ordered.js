const orderModel = require("../models/order");
const cartObjectModel = require("../models/cartObject");
const productModel = require("../models/product");

const getOrdered = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await orderModel.findOne({ user_id: id }).populate({
      path: "orderedProduct",
      model: cartObjectModel,
      populate: {
        path: "product",
        model: productModel,
      },
    });

    console.log("data:", data);
    if (data) {
      return res.send(data);
    }
    return res.sendStatus(404);
  } catch (err) {
    return res.sendStatus(404);
  }
};

module.exports = { getOrdered };
