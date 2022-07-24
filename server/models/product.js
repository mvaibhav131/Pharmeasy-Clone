const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: true },
  strike: { type: Number, required: false },
  discount: { type: Number, required: false },
  ancestor: { type: [String], required: true },
  brand: { type: String, required: false },
  instock: { type: Boolean, default: true, required: true },
});

const productModel = model("product", productSchema);

module.exports = productModel;
