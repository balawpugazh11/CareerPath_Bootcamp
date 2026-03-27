const mongoose = require('mongoose');
const User = require('../src/models/User');
const dotenv = require('dotenv');
const path = require('path');

// Load env
dotenv.config({ path: path.join(__dirname, '../.env') });

const ensureUsers = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bootcamp';
        console.log(`Connecting to: ${mongoURI}`);
        await mongoose.connect(mongoURI);

        const users = [
            {
                name: 'System Admin',
                email: 'admin@path4career.com',
                password: 'password123',
                role: 'admin'
            },
            {
                name: 'Test Learner',
                email: 'learner@path4career.com',
                password: 'password123',
                role: 'student'
            }
        ];

        for (const userData of users) {
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                console.log(`User ${userData.email} already exists. Updating role...`);
                existingUser.role = userData.role;
                // Note: password won't be updated unless we explicitly do it and trigger the 'save' middleware
                // For simplicity, if they exist we assume the password matches what we want or the user knows it
                await existingUser.save();
            } else {
                console.log(`Creating user: ${userData.email}`);
                await User.create(userData);
            }
        }

        console.log('Test users ensured successfully.');
    } catch (err) {
        console.error('Error ensuring users:', err);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

ensureUsers();
