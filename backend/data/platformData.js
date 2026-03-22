const bootcamps = [
  {
    id: '1',
    title: 'Full Stack Web Development Masterclass',
    level: 'Intermediate',
    duration: '12 Weeks',
    price: '$999',
    cohortStart: 'April 8',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning',
    level: 'Intermediate',
    duration: '16 Weeks',
    price: '$1299',
    cohortStart: 'April 15',
    tags: ['Python', 'AI', 'SQL'],
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    level: 'Beginner',
    duration: '8 Weeks',
    price: '$799',
    cohortStart: 'April 22',
    tags: ['Figma', 'Design', 'Prototyping'],
  },
];

const dashboardSummary = {
  learnersPlaced: 4200,
  averageCompletion: 89,
  activeLearners: 312,
  mentors: 18,
};

module.exports = {
  bootcamps,
  dashboardSummary,
};
