const { Schema, model } = require("mongoose");
const productModel = require("./product");
const userModel = require("./user");
const cartObjectSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: userModel, required: false },
    product: { type: Schema.Types.ObjectId, ref: productModel },
    qty: { type: Number, default: 1, required: false },
  },
  {
    timestamps: true,
  }
);

const cartObjectModel = model("cartObject", cartObjectSchema);

module.exports = cartObjectModel;
