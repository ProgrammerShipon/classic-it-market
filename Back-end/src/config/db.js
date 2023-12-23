const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "classic-It-market",
      })
      .then(() => console.log("Database connection successful"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Could not connect to DB: ", error.toString());
  }
};

module.exports = connectDB;
