const mongoose = require('mongoose');
const User = require('../src/models/User');
require('dotenv').config();

const checkUsers = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';
    await mongoose.connect(mongoURI);
    const count = await User.countDocuments();
    const users = await User.find({}, 'email role');
    console.log(`Total users: ${count}`);
    users.forEach(u => console.log(`- ${u.email} (${u.role})`));
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
  }
};

checkUsers();
