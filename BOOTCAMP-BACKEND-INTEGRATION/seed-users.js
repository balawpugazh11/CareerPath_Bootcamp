const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');
const connectDB = require('./src/config/db');
require('dotenv').config();

const createUsers = async () => {
  try {
    await connectDB();
    
    // Clear Users
    try {
      await mongoose.connection.db.dropCollection('users');
    } catch(e) {}

    const salt = await bcrypt.genSalt(10);
    const hash1 = await bcrypt.hash('password123', salt);
    const hash2 = await bcrypt.hash('admin123', salt);

    await User.create([
      {
        name: 'John Student',
        email: 'student@example.com',
        password_hash: hash1,
        role: 'student'
      },
      {
        name: 'Jane Admin',
        email: 'admin@example.com',
        password_hash: hash2,
        role: 'admin'
      }
    ]);
    
    console.log('Successfully created testing credentials');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createUsers();
