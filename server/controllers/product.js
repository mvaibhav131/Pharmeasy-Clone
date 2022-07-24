const productModel = require("../models/product");

const productGet = async (req, res) => {
  const q = req.query.q;
  try {
    if (q) {
      const data = await productModel.find({ ancestor: { $in: [q] } });
      return res.send(data);
    }
    const data = await productModel.find();
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

const productPost = async (req, res) => {
  const { data } = req.body;

  const insertMany = await productModel.insertMany(data);

  return res.send("Data added");
};

const productGetSearch = async (req, res) => {
  const { q } = req.query;
  try {
    if (q) {
      // let reg = new RegExp(`\\b${q}\\b`, "gi");
      const data = await productModel.find({
        title: { $regex: new RegExp(`${q}`), $options: "gi" },
      });
      return res.send(data);
    }
    return res.send("Data not found");
  } catch (err) {
    return res.sendStatus(404);
  }
};

const singleProduct = async (req, res) => {
  const { title } = req.params;

  const data = await productModel.findOne({
    title: { $regex: new RegExp(`${title}`), $options: "gi" },
  });

  if (data) {
    return res.send(data);
  }

  return res.sendStatus(404);
};

const productsGet = async (req, res) => {
  const data = await productModel.find();
  return res.send(data);
};

module.exports = {
  productGet,
  productPost,
  productGetSearch,
  singleProduct,
  productsGet,
};
