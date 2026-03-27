const mongoose = require('mongoose');
const User = require('./backend/src/models/User');
require('dotenv').config({ path: './backend/.env' });

const checkUsers = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';
    await mongoose.connect(mongoURI);
    const count = await User.countDocuments();
    const admin = await User.findOne({ role: 'admin' });
    console.log(`Total users: ${count}`);
    if (admin) {
      console.log(`Admin found: ${admin.email}`);
    } else {
      console.log('No admin found');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
  }
};

checkUsers();
