require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Bootcamp = require('../src/models/Bootcamp');

const bootcamps = [
  {
    name: 'Full Stack Web Development Masterclass',
    slug: 'full-stack-web-development-masterclass',
    title: 'Full Stack Web Development Masterclass',
    shortTitle: 'Full Stack Web Development',
    description:
      'A comprehensive journey from frontend basics to advanced backend architecture. Build production-ready applications with React, Node.js, and MongoDB.',
    summary:
      'Master React, Node.js, and MongoDB in 12 weeks with production-style projects, mentor reviews, and portfolio coaching.',
    level: 'Intermediate',
    duration: '12 Weeks',
    price: '$999',
    cohortStart: 'April 8',
    paymentPlan: '$349/month for 3 months',
    format: 'Live cohort + guided projects',
    mentor: {
      name: 'Priya Raman',
      role: 'Senior Full Stack Engineer',
      company: 'Atlas Commerce',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
    outcomes: ['3 capstone projects', 'Mock interviews', 'Portfolio review'],
    features: [
      'Live mentorship sessions twice a week',
      'Code reviews from industry experts',
      'Portfolio building and resume review',
      'Certificate of completion',
    ],
    modules: [
      { week: 1, title: 'HTML, CSS & JavaScript Fundamentals', lessons: 8 },
      { week: 2, title: 'React Basics & State Management', lessons: 10 },
      { week: 3, title: 'Advanced React & Hooks', lessons: 7 },
      { week: 4, title: 'Node.js & Express API Development', lessons: 9 },
    ],
  },
  {
    name: 'Data Science & Machine Learning',
    slug: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning',
    shortTitle: 'Data Science & Machine Learning',
    description:
      'Learn Python, Pandas, SQL, and model deployment workflows through practical datasets and portfolio-ready case studies.',
    summary:
      'Go from spreadsheets to model deployment with guided labs, case studies, and role-focused career preparation.',
    level: 'Intermediate',
    duration: '16 Weeks',
    price: '$1299',
    cohortStart: 'April 15',
    paymentPlan: '$449/month for 3 months',
    format: 'Live labs + case-study sprints',
    mentor: {
      name: 'Daniel Brooks',
      role: 'Lead Data Scientist',
      company: 'Northstar Health',
    },
    tags: ['Python', 'AI', 'SQL'],
    outcomes: [
      '4 applied case studies',
      'Data storytelling labs',
      'Hiring sprint',
    ],
    features: [
      'Weekly live doubt-clearing labs',
      'Hands-on projects with real datasets',
      'Career support for analyst and ML roles',
      'Certificate of completion',
    ],
    modules: [
      { week: 1, title: 'Python Foundations for Data Work', lessons: 7 },
      { week: 2, title: 'Data Cleaning with Pandas', lessons: 9 },
      { week: 3, title: 'Machine Learning with Scikit-Learn', lessons: 10 },
      { week: 4, title: 'Model Evaluation and Deployment', lessons: 8 },
    ],
  },
  {
    name: 'UI/UX Design Masterclass',
    slug: 'ui-ux-design-masterclass',
    title: 'UI/UX Design Masterclass',
    shortTitle: 'UI/UX Design Masterclass',
    description:
      'Design intuitive digital experiences with research, wireframing, prototyping, and polished case studies for your portfolio.',
    summary:
      'Build a standout design portfolio with user research, systems thinking, and polished Figma case studies.',
    level: 'Beginner',
    duration: '8 Weeks',
    price: '$799',
    cohortStart: 'April 22',
    paymentPlan: '$279/month for 3 months',
    format: 'Studio critiques + portfolio building',
    mentor: {
      name: 'Anika Sen',
      role: 'Product Design Lead',
      company: 'Lattice Studio',
    },
    tags: ['Figma', 'Design', 'Prototyping'],
    outcomes: [
      '2 portfolio case studies',
      'Design critiques',
      'Presentation coaching',
    ],
    features: [
      'Portfolio-ready design case studies',
      'Mentor feedback on every milestone',
      'Figma templates and reusable assets',
      'Certificate of completion',
    ],
    modules: [
      { week: 1, title: 'Design Thinking and User Research', lessons: 6 },
      { week: 2, title: 'Wireframes and Information Architecture', lessons: 8 },
      { week: 3, title: 'High-Fidelity UI in Figma', lessons: 9 },
      { week: 4, title: 'Interactive Prototypes and Portfolio Review', lessons: 7 },
    ],
  },
];

const seedBootcamps = async () => {
  try {
    await connectDB();
    await Bootcamp.deleteMany({});
    await Bootcamp.insertMany(bootcamps);
    console.log(`Seeded ${bootcamps.length} bootcamps`);
  } catch (error) {
    console.error('Failed to seed bootcamps:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedBootcamps();
