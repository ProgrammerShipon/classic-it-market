const Products = require("../model/Products");

const createProduct = async (req, res) => {
  const body = req.body;
  console.log("body ", body);
  try {
    if (!body?.userId) {
      return res.status(400).json("userId is required");
    }

    const product = new Products(body);
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({
      message: "finds successful",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getSingleProduct = async (req, res) => {
  const productId = req.params?.productId;

  try {
    // Use findOne to find a single product based on the _id
    const product = await Products.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "find successfull", data: product });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = { createProduct, getProducts, getSingleProduct };
