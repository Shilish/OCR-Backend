require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB 👍");
  } catch (error) {
    console.error("🆘🆘🆘 Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;