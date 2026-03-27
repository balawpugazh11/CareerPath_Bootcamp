const mongoose = require('mongoose');
const User = require('../src/models/User');
require('dotenv').config();

const resetAdmin = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';
    await mongoose.connect(mongoURI);

    const email = 'admin@example.com';
    const password = 'password123';

    // Delete existing admin@example.com if it exists
    await User.deleteOne({ email });

    // Create a NEW one with a KNOWN password
    await User.create({
      name: 'System Administrator',
      email,
      password,
      role: 'admin'
    });

    console.log(`✓ Admin user reset successfully:`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Role: admin`);

  } catch (err) {
    console.error('Failed to reset admin user:', err);
  } finally {
    await mongoose.connection.close();
  }
};

resetAdmin();
