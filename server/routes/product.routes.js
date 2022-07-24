const { Router } = require("express");
const {
  productPost,
  productGet,
  productGetSearch,
  singleProduct,
  productsGet,
} = require("../controllers/product");

const productRouter = Router();

productRouter.get("/all", productsGet);
productRouter.get("/", productGet);
productRouter.get("/search", productGetSearch);
productRouter.post("/", productPost);
productRouter.get("/single/:title", singleProduct);

module.exports = productRouter;
