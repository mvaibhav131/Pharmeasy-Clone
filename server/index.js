const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const cartRouter = require("./routes/cart.routes");
const orderedRouter = require("./routes/ordered.routes");
const paymentRouter = require("./routes/payment.routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/ordered", orderedRouter);
app.use("/api/payment/", paymentRouter);

app.get("/", (req, res) => {
  return res.send("Hello world!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server has been connected");
  } catch (err) {
    console.log("Server has not connected");
  }
});
