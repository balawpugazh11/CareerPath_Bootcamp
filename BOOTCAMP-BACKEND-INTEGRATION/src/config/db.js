const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';

    const options = {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      retryWrites: true,
      maxPoolSize: 10,
      minPoolSize: 2,
    };

    const conn = await mongoose.connect(mongoURI, options);

    console.log(`✓ MongoDB Connected: ${conn.connection.host} (${conn.connection.name} database)`);
    console.log(`✓ MongoDB URI: ${mongoURI}`);
    return conn;
  } catch (error) {
    console.error('✗ MongoDB Connection Failed:');
    console.error(`  Error: ${error.message}`);
    console.error(`  MongoDB URI attempted: ${process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp'}`);
    
    if (process.env.NODE_ENV === 'development') {
      console.error('\n  Troubleshooting tips:');
      console.error('  1. Ensure MongoDB service is running');
      console.error('  2. Check if MongoDB is listening on port 27017');
      console.error('  3. Verify MONGODB_URI in .env file');
      console.error('  4. Run: mongod (to start MongoDB locally)');
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;