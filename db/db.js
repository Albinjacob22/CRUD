const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectMongo = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log(' MongoDB Connected Successfully');
  } catch (error) {
    console.error(' Database Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectMongo;
