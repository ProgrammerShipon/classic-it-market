const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controller/ProductsController");

router.post("/products", createProduct);
router.get("/products", getProducts);
router.get("/product/:productId", getSingleProduct);

module.exports = router;
