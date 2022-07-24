const { Schema, model } = require("mongoose");
const userModel = require("./user");
const cartObjectModel = require("./cartObject");

const orderSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: userModel },
    orderedProduct: [{ type: Schema.Types.ObjectId, ref: cartObjectModel }],
  },
  {
    timestamps: true,
    // CreatedAt:{ type: Date, required: true, default: Date.now },
    // UpdatedAt:{ type: Date, required: true, default: Date.now },
  }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
