const cartObjectModel = require("../models/cartObject");
const cartModel = require("../models/cart");
const productModel = require("../models/product");
const orderModel = require("../models/order");

const addCart = async (req, res) => {
  const { productId, qty, user_id } = req.body;
  try {
    if (qty && productId && user_id) {
      const isProduct = await cartObjectModel.findOne({
        product: productId,
        user_id: user_id,
      });
      if (isProduct) {
        const updateProductQty = await cartObjectModel.updateOne(
          { product: productId, user_id: user_id },
          { $set: { qty: isProduct.qty + qty } }
        );
        const oldCartUser = await cartModel.findOne({ user_id: user_id });
        if (oldCartUser) {
          const productExists = await cartModel.findOne({
            user_id: user_id,
            cartProduct: { $in: [isProduct._id] },
          });
          if (!productExists) {
            const updateCartUser = await cartModel.updateOne(
              { user_id: user_id },
              { $push: { cartProduct: isProduct._id } }
            );
          }
          return res.send("product successfully added into cart");
        }
        return res.send("product already added into cart");
      }

      const newProduct = new cartObjectModel({
        user_id: user_id,
        product: productId,
        qty: qty,
      });
      await newProduct.save();

      const oldCartUser = await cartModel.findOne({ user_id: user_id });
      if (oldCartUser) {
        const updateCartUser = await cartModel.updateOne(
          { user_id: user_id },
          { $push: { cartProduct: newProduct._id } }
        );
        return res.send("product successfully added into cart");
      }

      const newCartUser = new cartModel({
        user_id: user_id,
        cartProduct: [newProduct._id],
      });
      await newCartUser.save();
      return res.send("New product successfully added into cart");
    }
  } catch (err) {
    return res.status(403).send("Something went wrong");
  }
};

const getCart = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await cartModel.findOne({ user_id: id }).populate({
      path: "cartProduct",
      model: cartObjectModel,
      populate: {
        path: "product",
        model: productModel,
      },
    });

    if (data) {
      return res.send(data);
    }
    return res.sendStatus(404);
  } catch (err) {
    return res.sendStatus(404);
  }
};

const moveToOrder = async (req, res) => {
  const { id } = req.params;
  const data = await cartModel.findOne({ user_id: id });
  try {
    const oldOrder = await orderModel.findOne({ user_id: id });
    if (oldOrder) {
      const updateOldOrder = await orderModel.updateOne(
        { user_id: id },
        { $push: { orderedProduct: { $each: [...data.cartProduct] } } }
      );
      const deleteOneCart = await cartModel.deleteOne({ user_id: id });
      return res.send("data moved to ordered collection");
    }
    const newOrder = new orderModel({
      user_id: id,
      orderedProduct: data.cartProduct,
    });
    await newOrder.save();
    const deleteOneCart = await cartModel.deleteOne({ user_id: id });
    return res.send(" data moved to new ordered collection");
  } catch (err) {
    return res.sendStatus(404);
  }
};

const deleteProduct = async (req, res) => {
  const { user_id, product_id } = req.params;

  try {
    const findPro = await cartObjectModel.deleteOne({
      user_id: user_id,
      _id: product_id,
    });

    return res.send({});
  } catch (err) {
    return res.sendStatus(404);
  }
};

module.exports = { addCart, getCart, moveToOrder, deleteProduct };
