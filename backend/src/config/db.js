const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';

    const options = {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      retryWrites: true,
      maxPoolSize: 10,
      minPoolSize: 2,
    };

    const conn = await mongoose.connect(mongoURI, options);

    console.log(
      `MongoDB connected: ${conn.connection.host} (${conn.connection.name})`
    );
    return conn;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
