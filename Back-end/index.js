// clear
console.clear();

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./src/routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");

app.use("/auth", authRoutes);
// app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Server Running Success");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
