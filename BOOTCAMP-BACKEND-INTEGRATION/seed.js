const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Bootcamp = require('./src/models/Bootcamp');
const connectDB = require('./src/config/db');

const seedBootcamps = [
  {
    title: 'Full Stack Web Development Masterclass',
    description: 'A comprehensive journey from frontend basics to advanced backend architecture. Build production-ready applications with React, Node.js, and MongoDB.',
    duration: '12 Weeks',
    level: 'Intermediate',
    price: '$999',
    tags: ['React', 'Node.js', 'MongoDB'],
    modules: [
      { week: 1, title: 'HTML, CSS & JavaScript Fundamentals', lessons: 8 },
      { week: 2, title: 'React Basics & State Management', lessons: 10 },
      { week: 3, title: 'Advanced React & Hooks', lessons: 7 },
      { week: 4, title: 'Node.js & Express API Development', lessons: 9 },
    ],
    features: [
      'Live mentorship sessions twice a week',
      'Code reviews from industry experts',
      'Portfolio building and resume review',
      'Certificate of completion',
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Learn Python, Pandas, SQL, and model deployment workflows through practical datasets and portfolio-ready case studies.',
    duration: '16 Weeks',
    level: 'Intermediate',
    price: '$1299',
    tags: ['Python', 'AI', 'SQL'],
    modules: [
      { week: 1, title: 'Python Foundations for Data Work', lessons: 7 },
      { week: 2, title: 'Data Cleaning with Pandas', lessons: 9 },
      { week: 3, title: 'Machine Learning with Scikit-Learn', lessons: 10 },
      { week: 4, title: 'Model Evaluation and Deployment', lessons: 8 },
    ],
    features: [
      'Weekly live doubt-clearing labs',
      'Hands-on projects with real datasets',
      'Career support for analyst and ML roles',
      'Certificate of completion',
    ],
  },
  {
    title: 'UI/UX Design Masterclass',
    description: 'Design intuitive digital experiences with research, wireframing, prototyping, and polished case studies for your portfolio.',
    duration: '8 Weeks',
    level: 'Beginner',
    price: '$799',
    tags: ['Figma', 'Design', 'Prototyping'],
    modules: [
      { week: 1, title: 'Design Thinking and User Research', lessons: 6 },
      { week: 2, title: 'Wireframes and Information Architecture', lessons: 8 },
      { week: 3, title: 'High-Fidelity UI in Figma', lessons: 9 },
      { week: 4, title: 'Interactive Prototypes and Portfolio Review', lessons: 7 },
    ],
    features: [
      'Portfolio-ready design case studies',
      'Mentor feedback on every milestone',
      'Figma templates and reusable assets',
      'Certificate of completion',
    ],
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    try {
      await mongoose.connection.db.dropCollection('bootcamps');
    } catch (e) {
      console.log('Collection may not exist yet or drop failed', e.message);
    }
    await Bootcamp.insertMany(seedBootcamps);
    console.log('Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding DB:', error);
    process.exit(1);
  }
};

seedDB();
