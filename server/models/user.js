const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    mail: { type: String, required: true },
    otp: { type: [Number], required: false },
  },
  {
    timestamps: true,
  }
);

const userModel = model("user", userSchema);

module.exports = userModel;
