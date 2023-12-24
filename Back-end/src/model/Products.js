const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  variation: {
    images: [String],
    colors: [String],
    size: [String],
  },
  color: [String],
  size: String,
  rating: Number,
  prices: {
    price: Number,
    percent: Number,
  },
  description: String,
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
